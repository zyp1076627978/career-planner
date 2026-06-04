// 生涯规划助手 Web版 - 核心应用
import { HOLLAND_QUESTIONS } from './data/holland-questions.js';
import { MBTI_QUESTIONS } from './data/mbti-questions.js';
import { HOLLAND_DESCRIPTIONS } from './data/holland-descriptions.js';
import { MBTI_PROFILES } from './data/mbti-profiles.js';
import { CAREERS } from './data/careers.js';
import { UNIVERSITIES } from './data/universities.js';
import { REGIONS } from './data/regions.js';
import { SUBJECT_COMBINATIONS, recommendSubjects } from './data/subject-combinations.js';
import { MAJOR_CAREER_MAP, getMajorsByCareer } from './data/major-career-map.js';
import { getCertificatesByCareer } from './data/certificates.js';
import { getStrategy } from './data/learning-strategies.js';
import { EXTRA_SCORES } from './data/universities-scores-ext.js';

// ========== Storage ==========
const S = {
  get(k) { try { const v = localStorage.getItem('cp_' + k); return v ? JSON.parse(v) : null; } catch(e) { return null; } },
  set(k, v) { localStorage.setItem('cp_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('cp_' + k); },
  clear() { Object.keys(localStorage).filter(k => k.startsWith('cp_')).forEach(k => localStorage.removeItem(k)); }
};

// ========== Toast/Modal ==========
function toast(msg, icon = 'none') {
  const el = document.getElementById('toast');
  el.textContent = msg; el.className = 'toast show';
  setTimeout(() => el.className = 'toast', 2000);
}
function showModal(title, body, btns) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('modal-btns').innerHTML = btns;
  document.getElementById('modal-overlay').style.display = 'flex';
}
window._modalCallback = null;
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; if (window._modalCallback) { window._modalCallback(); window._modalCallback = null; } }

// ========== Router ==========
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
  var nav = document.getElementById('bottom-nav');
  var navPages = ['home','landing','archive'];
  var showNav = navPages.indexOf(page) >= 0;
  nav.style.display = showNav ? 'flex' : 'none';
  document.body.style.paddingBottom = showNav ? '70px' : '0';
  // Page init
  if (page === 'test-result') renderTestResult();
  if (page === 'career-recommend') renderCareerRecommend();
  if (page === 'subject-choice') renderSubjectChoice();
  if (page === 'score-input') renderScoreInput();
  if (page === 'school-match') renderSchoolMatch();
  if (page === 'gap-analysis') renderGapAnalysis();
  if (page === 'report') renderReport();
  if (page === 'archive') renderArchive();
  if (page === 'holland-test') App.hollandTest.init();
  if (page === 'mbti-test') App.mbtiTest.init();
}

// ========== Polyfill ==========
REGIONS.forEach(r => { if (!PROVINCE_MAP[r.value]) PROVINCE_MAP[r.value] = r.label; });
function extractProvince(loc) {
  for (const r of REGIONS) { if (loc.startsWith(r.label)) return r.value; }
  return loc.substring(0, 2);
}
function getExtraScores(uid) { return EXTRA_SCORES[uid] || null; }

// ========== Career Matcher ==========
function matchCareers(hRes, mRes) {
  const gender = S.get('user_gender') || '';
  const GA = {
    male:{C001:5,C002:-2,C003:3,C004:-5,C005:5,C006:5,C007:5,C008:3,C009:-5,C010:3,C011:5,C012:-2,C013:-3,C014:2,C015:5,C016:-3,C017:5,C018:5,C019:3,C020:2},
    female:{C001:-3,C002:3,C003:-2,C004:5,C005:-2,C006:-3,C007:1,C008:-2,C009:5,C010:3,C011:-5,C012:3,C013:5,C014:-2,C015:-2,C016:3,C017:1,C018:-5,C019:5,C020:3}
  };
  const adj = GA[gender] || {};
  return CAREERS.map(c => {
    const hs = calcHolland(hRes.hollandCode, c.hollandCodes);
    const ms = calcMBTI(mRes.typeCode, c.mbtiPreferences);
    let total = Math.round(hs * 0.6 + ms * 0.4) + (adj[c.id] || 0);
    return {...c, matchScore: Math.min(100, Math.max(0, total)), hollandMatch: Math.round(hs), mbtiMatch: Math.round(ms)};
  }).sort((a,b) => b.matchScore - a.matchScore).slice(0, 5);
}
function calcHolland(uCode, cCodes) {
  const parts = uCode.split(''); let w = 0;
  cCodes.forEach(code => { const p = parts.indexOf(code); if (p >= 0) w += Math.max(0.1, 1 - p * 0.3); });
  return Math.round((w / Math.max(1, cCodes.length)) * 100);
}
function calcMBTI(uType, prefs) {
  if (!prefs || !prefs.length) return 50;
  let m = 0; prefs.forEach(p => { if (uType.includes(p)) m++; });
  return Math.round((m / prefs.length) * 100);
}

// ========== Holland Scorer ==========
function calcHollandResult(answers) {
  const scores = {R:0,I:0,A:0,S:0,E:0,C:0};
  answers.forEach(a => { const q = HOLLAND_QUESTIONS.find(x => x.id === a.questionId); if (q) scores[q.dimension] += a.selectedScore; });
  const sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  const hollandCode = sorted.slice(0,3).map(e => e[0]).join('');
  const ns = {}; Object.entries(scores).forEach(([k,v]) => ns[k] = Math.round(v / 30 * 100));
  return { scores, hollandCode, normalizedScores: ns, maxDimension: sorted[0][0], completedAt: Date.now() };
}

// ========== MBTI Scorer ==========
function calcMBTIResult(answers) {
  const dc = {EI:{E:0,I:0},SN:{S:0,N:0},TF:{T:0,F:0},JP:{J:0,P:0}};
  answers.forEach(a => { const q = MBTI_QUESTIONS.find(x => x.id === a.questionId); if (q) dc[q.dimension][a.selectedOrientation]++; });
  const parts = []; const traits = {};
  Object.entries(dc).forEach(([dim, counts]) => {
    const [a,b] = dim.split(''); const t = counts[a] + counts[b];
    parts.push(counts[a] >= counts[b] ? a : b);
    traits[a] = t ? Math.round(counts[a]/t*100) : 50; traits[b] = 100 - traits[a];
  });
  const tc = parts.join(''); const p = MBTI_PROFILES[tc] || {};
  return { typeCode: tc, typeName: p.typeName || tc, strengths: p.strengths||[], weaknesses: p.weaknesses||[], learningStyle: p.learningStyle||'', suitableEnv: p.suitableEnv||'', traits, completedAt: Date.now() };
}

// ========== School Filter ==========
function filterSchools(input, targetMajorIds) {
  const { province, subjectGroup, totalScore, ranking, preferredProvinces } = input;
  const effRank = ranking || Math.max(0, (750 - totalScore) * 200);
  const raw = [];
  UNIVERSITIES.forEach(uni => {
    targetMajorIds.forEach(mid => {
      const e = tryMatch(uni, mid, province, subjectGroup, totalScore, effRank);
      if (e) { e.inPref = preferredProvinces && preferredProvinces.some(p => { const pn = PROVINCE_MAP[p]||p; return uni.location.includes(pn)||uni.location.includes(p); }); raw.push(e); }
    });
  });
  const sm = {}; raw.forEach(m => {
    if (!sm[m.schoolId]) sm[m.schoolId] = {schoolId:m.schoolId, schoolName:m.schoolName, tier:m.tier, tierLevel:m.tierLevel, location:m.location, type:m.type, isEstimated:m.isEstimated, inPreferredProvince:m.inPref, majors:[], closestDiff:999};
    sm[m.schoolId].majors.push({majorName:m.majorName, majorId:m.majorId, minScore:m.minScore, avgScore:m.avgScore, scoreDiff:m.scoreDiff, confidence:m.confidence});
    if (Math.abs(m.scoreDiff) < Math.abs(sm[m.schoolId].closestDiff)) sm[m.schoolId].closestDiff = m.scoreDiff;
    if (m.inPref) sm[m.schoolId].inPreferredProvince = true;
  });
  const all = Object.values(sm); if (!all.length) return {provinceResults:[]};
  all.sort((a,b) => { if (a.inPreferredProvince&&!b.inPreferredProvince) return -1; if (!a.inPreferredProvince&&b.inPreferredProvince) return 1; return Math.abs(a.closestDiff)-Math.abs(b.closestDiff); });

  const pm = {};
  all.forEach(s => {
    const d = s.closestDiff; s.majors.sort((a,b) => a.scoreDiff - b.scoreDiff);
    let cat = null;
    if (d < -30 && d >= -120) cat = 'rush'; else if (d < -5 && d >= -30) cat = 'steady'; else if (d >= -5 && d <= 20) cat = 'safe'; else if (d > 20 && d <= 50) cat = 'bottom';
    if (!cat) { if (d < -120) cat = 'rush'; else if (d > 50) cat = 'bottom'; }
    if (!cat) return;
    const pv = extractProvince(s.location);
    if (!pm[pv]) pm[pv] = {provinceName: PROVINCE_MAP[pv]||pv, provinceValue:pv, inPreferredProvince:s.inPreferredProvince, rush:[], steady:[], safe:[], bottom:[]};
    pm[pv][cat].push(s); if (s.inPreferredProvince) pm[pv].inPreferredProvince = true;
  });
  // 兜底：一个学校都没分类→强制把最接近的推进去
  let totalClassified = 0;
  Object.values(pm).forEach(p => { ['rush','steady','safe','bottom'].forEach(c => totalClassified += p[c].length); });
  if (totalClassified === 0 && all.length > 0) {
    all.slice(0, 10).forEach(s => {
      const pv = extractProvince(s.location);
      if (!pm[pv]) pm[pv] = {provinceName: PROVINCE_MAP[pv]||pv, provinceValue:pv, inPreferredProvince:s.inPreferredProvince, rush:[], steady:[], safe:[], bottom:[]};
      pm[pv].rush.push(s);
    });
  }
  const pr = Object.values(pm);
  pr.forEach(p => { ['rush','steady','safe','bottom'].forEach(c => { p[c].sort((a,b)=>Math.abs(a.closestDiff)-Math.abs(b.closestDiff)); p[c]=p[c].slice(0,8); }); p.schoolCount = p.rush.length+p.steady.length+p.safe.length+p.bottom.length; });
  pr.sort((a,b) => { if (a.inPreferredProvince&&!b.inPreferredProvince) return -1; if (!a.inPreferredProvince&&b.inPreferredProvince) return 1; return 0; });
  return {provinceResults:pr};
}
function tryMatch(uni, mid, province, sg, totalScore, effRank) {
  const mn = MAJOR_CAREER_MAP[mid] && MAJOR_CAREER_MAP[mid].majorName; if (!mn) return null;
  var major = uni.majors && uni.majors.length ? uni.majors.find(function(m){return m.majorId === mid;}) : null;
  let ad = null, est = false;
  if (major) ad = major.admissionScores.find(s => s.province === province && s.subjectGroup === sg);
  if (!ad) { ad = uni.overallAdmissionScores.find(s => s.province === province && s.subjectGroup === sg); if (ad) est = true; }
  if (!ad) { const ext = getExtraScores(uni.id); if (ext && ext[province] && ext[province][sg]) { ad = ext[province][sg]; est = true; } }
  if (!ad) { ad = uni.overallAdmissionScores.find(s => s.province === province); if (ad) est = true; }
  if (!ad && uni.overallAdmissionScores.length > 0) { ad = uni.overallAdmissionScores[0]; est = true; }
  if (!ad) return null;
  const sd = totalScore - ad.minScore, rd = ad.minRanking - effRank;
  const sc = Math.min(1,Math.max(0,sd/60+0.5)), rc = Math.min(1,Math.max(0,rd/15000+0.5));
  return {schoolId:uni.id, schoolName:uni.name, tier:uni.tier, tierLevel:uni.tierLevel, location:uni.location, type:uni.type, majorName:mn, majorId:mid, minScore:ad.minScore, avgScore:ad.avgScore||(ad.minScore+8), minRanking:ad.minRanking, scoreDiff:sd, rankingDiff:rd, confidence:Math.round((sc*0.5+rc*0.5)*100)/100, isEstimated:est};
}

// ========== App Global ==========
window.App = {
  userEntry: null,
  userGender: null,
  selectedCareer: null,
  preferredProvinces: [],

  navigateTo,
  toast, showModal, closeModal,

  selectGender: function(g, el) {
    document.querySelectorAll('#page-landing .gs-opt').forEach(function(o) { if (o.dataset.gender) o.classList.remove('gs-active'); });
    el.classList.add('gs-active');
    this.userGender = g;
    S.set('user_gender', g);
  },

  selectEntry: function(entry, el) {
    document.querySelectorAll('#page-landing .gs-opt').forEach(function(o) { if (o.dataset.entry) o.classList.remove('gs-active'); });
    el.classList.add('gs-active');
    this.userEntry = entry;
    S.set('user_entry', entry);
  },

  startJourney: function() {
    if (!this.userGender) { toast('请先选择性别'); return; }
    if (!this.userEntry) { toast('请选择选科状态'); return; }
    navigateTo('holland-test');
  },

  // ===== Holland Test =====
  hollandTest: {
    idx: 0, answers: [],
    init() {
      this.idx = 0; this.answers = new Array(36).fill(null);
      this.render(); this.attachBtn([], 'h');
    },
    render: function() {
      var q = HOLLAND_QUESTIONS[this.idx];
      var hasAns = this.answers[this.idx] ? true : false;
      var isLast = this.idx >= 35;
      var optsHtml = '';
      for (var i = 0; i < q.options.length; i++) {
        var o = q.options[i];
        var sel = this.answers[this.idx] && this.answers[this.idx].selectedScore === o.score;
        optsHtml += '<div class="option-item' + (sel?' option-selected':'') + '" onclick="App.hollandTest.select(' + o.score + ',this)"><span class="option-radio">' + (sel?'<span class="option-radio-inner"></span>':'') + '</span><span class="option-label">' + o.label + '</span></div>';
      }
      document.getElementById('h-question-area').innerHTML = '<div class="question-wrap"><div class="question-header"><span class="question-num">Q' + (this.idx+1) + '</span><span class="question-text">' + q.question + '</span></div><div class="options-list">' + optsHtml + '</div></div>';
      document.getElementById('h-progress-text').textContent = (this.idx+1) + ' / 36';
      document.getElementById('h-progress-bar').style.width = ((this.idx+1)/36*100) + '%';
      document.getElementById('h-prev-btn').disabled = this.idx === 0;
      var btn = document.getElementById('h-next-btn');
      btn.textContent = isLast ? '提交测评 →' : '下一题';
      btn.className = isLast ? 'btn-confirm btn-half' : 'btn-primary btn-half';
      btn.disabled = !hasAns && !isLast;
      btn.setAttribute('onclick', isLast ? 'App.hollandTest.submit()' : 'App.hollandTest.next()');
      var hsb = document.getElementById('h-submit-btn'); if(hsb) hsb.style.display = 'none';
    },
    select: function(score, el) {
      this.answers[this.idx] = { questionId: HOLLAND_QUESTIONS[this.idx].id, selectedScore: score };
      this.render();
      if (this.idx < 35) { var self = this; setTimeout(function(){ self.idx++; self.render(); }, 250); }
    },
    prev: function() { if (this.idx > 0) { this.idx--; this.render(); } },
    next: function() { if (this.idx < 35) { this.idx++; this.render(); } },
    submit: function() {
      var missing = [];
      for (var i = 0; i < 36; i++) { if (!this.answers[i]) missing.push(i+1); }
      if (missing.length > 0) { toast('还有第' + missing.join(',') + '题未完成'); return; }
      var r = calcHollandResult(this.answers);
      try { localStorage.setItem('cp_holland_result', JSON.stringify(r)); } catch(e) {}
      toast('测评1/2完成！');
      setTimeout(function(){ navigateTo('mbti-test'); }, 800);
    },
    attachBtn: function(arr, pfx) {
      document.getElementById(pfx+'-prev-btn').onclick = () => this.prev();
      document.getElementById(pfx+'-next-btn').onclick = () => this.next();
      document.getElementById(pfx+'-submit-btn').onclick = () => this.submit();
    }
  },

  // ===== MBTI Test =====
  mbtiTest: {
    idx: 0, answers: [],
    init() {
      this.idx = 0; this.answers = new Array(28).fill(null);
      this.render();
    },
    render: function() {
      var q = MBTI_QUESTIONS[this.idx];
      var hasAns = this.answers[this.idx] ? true : false;
      var isLast = this.idx >= 27;
      var optsHtml = '';
      for (var i = 0; i < q.options.length; i++) {
        var o = q.options[i];
        var sel = this.answers[this.idx] && this.answers[this.idx].selectedOrientation === o.orientation;
        optsHtml += '<div class="option-item' + (sel?' option-selected':'') + '" onclick="App.mbtiTest.select(\'' + o.orientation + '\',this)"><span class="option-radio">' + (sel?'<span class="option-radio-inner"></span>':'') + '</span><span class="option-label">' + o.label + '</span></div>';
      }
      document.getElementById('m-question-area').innerHTML = '<div class="question-wrap"><div class="question-header"><span class="question-num">Q' + (this.idx+1) + '</span><span class="question-text">' + q.question + '</span></div><div class="options-list">' + optsHtml + '</div></div>';
      document.getElementById('m-progress-text').textContent = (this.idx+1) + ' / 28';
      document.getElementById('m-progress-bar').style.width = ((this.idx+1)/28*100) + '%';
      document.getElementById('m-prev-btn').disabled = this.idx === 0;
      var mbtn = document.getElementById('m-next-btn');
      mbtn.textContent = isLast ? '提交测评 →' : '下一题';
      mbtn.className = isLast ? 'btn-confirm btn-half' : 'btn-primary btn-half';
      mbtn.disabled = !hasAns && !isLast;
      mbtn.setAttribute('onclick', isLast ? 'App.mbtiTest.submit()' : 'App.mbtiTest.next()');
      var msb = document.getElementById('m-submit-btn'); if(msb) msb.style.display = 'none';
    },
    select: function(orientation, el) {
      this.answers[this.idx] = { questionId: MBTI_QUESTIONS[this.idx].id, selectedOrientation: orientation };
      var done = true;
      for (var i = 0; i < 28; i++) { if (!this.answers[i]) { done = false; break; } }
      if (done && this.idx >= 27) { this.render(); var s = this; setTimeout(function(){ s.submit(); }, 350); return; }
      this.render();
      if (this.idx < 27) { var self = this; setTimeout(function(){ self.idx++; self.render(); }, 250); }
    },
    prev: function() { if (this.idx > 0) { this.idx--; this.render(); } },
    next: function() { if (this.idx < 27) { this.idx++; this.render(); } },
    submit: function() {
      var missing = [];
      for (var i = 0; i < 28; i++) { if (!this.answers[i]) missing.push(i+1); }
      if (missing.length > 0) { toast('还有第' + missing.join(',') + '题未完成'); return; }
      var r = calcMBTIResult(this.answers);
      try { localStorage.setItem('cp_mbti_result', JSON.stringify(r)); } catch(e) {}
      toast('测评全部完成！');
      setTimeout(function(){ navigateTo('test-result'); }, 800);
    }
  },

  // ===== Career =====
  selectCareer(career) {
    document.querySelectorAll('.career-card-el').forEach(c => c.classList.remove('selected'));
    const el = document.querySelector(`.career-card-el[data-id="${career.id}"]`);
    if (el) el.classList.add('selected');
    this.selectedCareer = career;
    document.getElementById('career-footer').style.display = 'block';
    document.getElementById('career-footer-text').textContent = `✅ 已选择「${career.name}」为目标职业方向`;
  },
  confirmCareer() {
    if (!this.selectedCareer) { toast('请先选择一个职业'); return; }
    S.set('selected_career', {careerId: this.selectedCareer.id, careerName: this.selectedCareer.name, selectedAt: Date.now()});
    navigateTo(this.userEntry === 'before' ? 'subject-choice' : 'score-input');
  },

  // ===== Subject Choice =====
  analyzeAllScores: function() {
    var scores = {}, filled = 0;
    var allSubs = ['语文','数学','英语','物理','化学','生物','历史','地理','政治'];
    for (var i = 0; i < allSubs.length; i++) {
      var el = document.getElementById('as-' + allSubs[i]);
      if (el) { var v = parseInt(el.value) || 0; scores[allSubs[i]] = v; if (v > 0) filled++; }
    }
    if (filled < 5) { toast('请至少填写5科成绩'); return; }
    var sg = ['物理','化学','生物'], ag = ['历史','地理','政治'];
    function avg(arr) {
      var sum = 0, cnt = 0;
      for (var i = 0; i < arr.length; i++) {
        var fullMark = (arr[i] === '语文' || arr[i] === '数学' || arr[i] === '英语') ? 150 : 100;
        if (scores[arr[i]] > 0) { sum += scores[arr[i]] / fullMark; cnt++; }
      }
      return cnt > 0 ? Math.round(sum / cnt * 100) : 0;
    }
    var sa = avg(sg), aa = avg(ag);
    var strengths = [], weaknesses = [];
    for (var i = 0; i < allSubs.length; i++) {
      var s = allSubs[i];
      var full = (s === '语文' || s === '数学' || s === '英语') ? 150 : 100;
      var r = scores[s] / full;
      if (r >= 0.7) strengths.push({name: s, score: scores[s]});
      else if (r < 0.5 && scores[s] > 0) weaknesses.push({name: s, score: scores[s]});
    }
    var sc = S.get('selected_career');
    var careerName = sc ? sc.careerName : '';
    var careerAdvice = '';
    var requiredSubs = [], recommendedSubs = [];
    if (sc && typeof getMajorsByCareer === 'function') {
      var majors = getMajorsByCareer(sc.careerId);
      if (majors && majors.length > 0) {
        for (var j = 0; j < majors.length; j++) {
          var req = majors[j].subjectRequirements;
          if (req) {
            if (req.required) for (var k = 0; k < req.required.length; k++) { if (requiredSubs.indexOf(req.required[k]) < 0) requiredSubs.push(req.required[k]); }
            if (req.recommended) for (var k = 0; k < req.recommended.length; k++) { if (recommendedSubs.indexOf(req.recommended[k]) < 0) recommendedSubs.push(req.recommended[k]); }
          }
        }
      }
      if (requiredSubs.length > 0) {
        careerAdvice += '<div class="card card-elevated block career-advice-box"><span class="step-title">🎯 目标职业 「' + careerName + '」的选科要求</span>';
        careerAdvice += '<div class="ca-item">📌 必选科目：<b>' + requiredSubs.join('、') + '</b></div>';
        if (recommendedSubs.length > 0) careerAdvice += '<div class="ca-item">💡 建议加选：' + recommendedSubs.join('、') + '</div>';
        var goodReq = [];
        for (var k = 0; k < requiredSubs.length; k++) {
          var rs = requiredSubs[k];
          var rscore = scores[rs] || 0;
          var rfull = (rs === '语文' || rs === '数学' || rs === '英语') ? 150 : 100;
          if (rscore / rfull >= 0.6) goodReq.push(rs);
        }
        if (goodReq.length === requiredSubs.length) {
          careerAdvice += '<div class="ca-item ca-good">✅ 你必选科目的成绩不错！朝目标职业努力吧。</div>';
        } else {
          var badReq = [];
          for (var k = 0; k < requiredSubs.length; k++) { if (goodReq.indexOf(requiredSubs[k]) < 0) badReq.push(requiredSubs[k]); }
          careerAdvice += '<div class="ca-item ca-warn">⚠️ ' + badReq.join('、') + ' 成绩偏低，却是目标职业的必选科目。建议重点提升这些科目，或考虑相关但不强制要求这些科目的备选职业方向。</div>';
        }
        careerAdvice += '</div>';
      } else {
        careerAdvice += '<div class="card card-elevated block career-advice-box"><span class="step-title">🎯 目标职业 「' + careerName + '」</span><div class="ca-item">📋 不限选科要求，可根据兴趣和成绩自由选择。</div></div>';
      }
    }
    var hRes = S.get('holland_result'), mRes = S.get('mbti_result');
    var combos = recommendSubjects(hRes, mRes);
    var scoredCombos = [];
    var subMap = {物:'物理',化:'化学',生:'生物',历:'历史',政:'政治',地:'地理'};
    for (var i = 0; i < combos.length; i++) {
      var combo = combos[i];
      var subNames = combo.shortName ? combo.shortName.split('') : [];
      var comboSubs = [];
      for (var j = 0; j < subNames.length; j++) { if (subMap[subNames[j]]) comboSubs.push(subMap[subNames[j]]); }
      var scoreBonus = 0;
      for (var j = 0; j < comboSubs.length; j++) {
        var cs = comboSubs[j];
        var cf = (cs === '语文' || cs === '数学' || cs === '英语') ? 150 : 100;
        var cr = (scores[cs] || 0) / cf;
        if (cr >= 0.7) scoreBonus += 10;
        else if (cr >= 0.5) scoreBonus += 5;
        else if (cr > 0) scoreBonus -= 3;
      }
      for (var j = 0; j < requiredSubs.length; j++) {
        if (comboSubs.indexOf(requiredSubs[j]) >= 0) scoreBonus += 8;
      }
      var adjusted = Math.min(100, Math.max(10, combo.matchScore + scoreBonus));
      scoredCombos.push({ name: combo.name, shortName: combo.shortName, description: combo.description, matchScore: adjusted, coverageRate: combo.coverageRate });
    }
    scoredCombos.sort(function(a, b) { return b.matchScore - a.matchScore; });
    var inputCard = document.querySelector('#subject-combo-area .card');
    if (inputCard) inputCard.style.display = 'none';
    var area = document.getElementById('subject-analysis-area');
    area.style.display = 'block';
    var stext = sa > aa ? '理科成绩（' + sa + '%）优于文科（' + aa + '%），建议优先考虑含物理/化学的组合。' : aa > sa ? '文科成绩（' + aa + '%）优于理科（' + sa + '%），建议优先考虑含历史/政治的组合。' : '文理成绩接近（理科' + sa + '% vs 文科' + aa + '%），可自由选择。';
    var strengthsHtml = '';
    for (var i = 0; i < strengths.length; i++) { strengthsHtml += '<span class="tag tag-green">' + strengths[i].name + ' (' + strengths[i].score + '分)</span>'; }
    var weaknessesHtml = '';
    for (var i = 0; i < weaknesses.length; i++) { weaknessesHtml += '<span class="tag tag-orange">' + weaknesses[i].name + ' (' + weaknesses[i].score + '分)</span>'; }
    var combosHtml = '';
    for (var i = 0; i < Math.min(scoredCombos.length, 3); i++) {
      var c = scoredCombos[i];
      combosHtml += '<div class="combo-card mini top-recommend"><span class="combo-rank">TOP' + (i+1) + '</span><span class="combo-name">' + c.name + '（' + c.shortName + '）</span><span class="combo-match-tag">综合' + c.matchScore + '%推荐</span><span class="combo-desc">' + c.description + '</span></div>';
    }
    area.innerHTML = careerAdvice +
      '<div class="card card-elevated block"><span class="step-title">📊 ' + careerName + ' · 各科实力分析</span><span class="step-desc">' + stext + '</span>' +
      '<div class="compare-bars mt-16"><div class="cb-row"><span class="cb-label">理科均分率</span><div class="cb-bar-bg"><div class="cb-bar cb-blue" style="width:' + sa + '%"></div></div><span class="cb-pct">' + sa + '%</span></div><div class="cb-row"><span class="cb-label">文科均分率</span><div class="cb-bar-bg"><div class="cb-bar cb-purple" style="width:' + aa + '%"></div></div><span class="cb-pct">' + aa + '%</span></div></div>' +
      (strengths.length ? '<div class="strength-box mt-16"><span class="box-label">💪 优势学科</span><div class="tags">' + strengthsHtml + '</div></div>' : '') +
      (weaknesses.length ? '<div class="strength-box mt-12"><span class="box-label">📌 需提升</span><div class="tags">' + weaknessesHtml + '</div></div>' : '') +
      '</div>' +
      '<div class="card card-elevated block"><span class="step-title">📋 个性化选科推荐</span>' + combosHtml + '</div>' +
      '<div class="footer-actions"><button class="btn-confirm btn-block" onclick="App.showSubjectReport()">📋 生成选科建议报告 →</button></div>';
    window.scrollTo(0, 0);
  },

  showSubjectReport: function() {
    var area = document.getElementById('subject-analysis-area');
    var sc = S.get('selected_career');
    var h = S.get('holland_result'), m = S.get('mbti_result');
    var reportHtml = '<div class="card card-elevated block" style="text-align:center"><span class="step-title">📋 你的选科建议报告</span><span class="step-desc" style="margin-top:10px">基于霍兰德 ' + (h?h.hollandCode:'') + ' + 校园性格 ' + (m?m.typeCode:'') + ' 的综合分析</span>';
    reportHtml += '<div class="divider"></div>';
    reportHtml += '<img src="assets/images/qrcode-teacher.png" style="width:180px;height:180px;border-radius:12px;display:block;margin:10px auto;">';
    reportHtml += '<span style="display:block;font-size:16px;font-weight:600;">扫码添加升学规划导师</span>';
    reportHtml += '<span style="display:block;font-size:13px;color:#9CA3AF;margin-top:4px;">将你的选科分析报告发给导师，获取1对1指导</span>';
    reportHtml += '<div class="divider"></div>';
    reportHtml += '<span style="font-size:12px;color:#D1D5DB;">本报告由「生涯规划助手」生成 · 选科建议仅供参考</span></div>';
        area.innerHTML = area.innerHTML + reportHtml;
    window.scrollTo(0, 99999);
  },

  // ===== Score Input =====
  siElectiveActive: {},
  siSubjectScores: {},
  onProvinceChange() { const pv = document.getElementById('si-province').value; const cities = REGIONS.find(r => r.value === pv)?.cities || []; const sel = document.getElementById('si-city'); sel.innerHTML = cities.map(c => `<option value="${c.value}">${c.label}</option>`).join(''); },
  onCityChange() {},
  toggleElective(subject, el) {
    if (this.siElectiveActive[subject]) { delete this.siElectiveActive[subject]; el.classList.remove('el-active'); }
    else { if (Object.keys(this.siElectiveActive).length >= 3) { toast('最多选3门选考科目'); return; } this.siElectiveActive[subject] = true; el.classList.add('el-active'); }
    document.getElementById('el-count-text').textContent = `已选 ${Object.keys(this.siElectiveActive).length} / 3 科`;
    this.rebuildSubjectGrid();
  },
  rebuildSubjectGrid() {
    const subs = ['语文','数学','英语', ...Object.keys(this.siElectiveActive)];
    const grid = document.getElementById('si-subject-grid');
    grid.innerHTML = subs.map(s => `<div class="subject-item"><span class="subject-name">${s}</span><input class="subject-input" type="number" placeholder="-" value="${this.siSubjectScores[s]||''}" oninput="App.onSubjectScoreInput('${s}',this.value)"></div>`).join('');
  },
  onSubjectScoreInput(sub, val) {
    this.siSubjectScores[sub] = val;
    const subs = ['语文','数学','英语', ...Object.keys(this.siElectiveActive)];
    const total = subs.reduce((sum, s) => sum + (parseInt(this.siSubjectScores[s]) || 0), 0);
    document.getElementById('si-total').textContent = total;
  },
  togglePrefProvince(pv, el) {
    if (this.preferredProvinces.includes(pv)) { this.preferredProvinces = this.preferredProvinces.filter(p => p !== pv); el.classList.remove('pp-active'); }
    else { this.preferredProvinces.push(pv); el.classList.add('pp-active'); }
    document.getElementById('pp-count-text').textContent = `已选 ${this.preferredProvinces.length} 个省份`;
    document.getElementById('pp-count-text').style.display = this.preferredProvinces.length ? 'block' : 'none';
  },
  startMatch() {
    const subs = ['语文','数学','英语', ...Object.keys(this.siElectiveActive)];
    if (subs.length < 6) { toast('请选择3门选考科目并填写成绩'); return; }
    const pv = document.getElementById('si-province').value;
    const input = { province: pv, subjectGroup: subs.includes('物理')?'wuli':'lishi', totalScore: subs.reduce((s,sub) => s+(parseInt(this.siSubjectScores[sub])||0),0), ranking: parseInt(document.getElementById('si-ranking').value)||0, subjectScores: this.siSubjectScores, subjects: subs, preferredProvinces: this.preferredProvinces };
    S.set('score_input', input);
    navigateTo('school-match');
  }
};

// ========== Page Renderers ==========
function renderTestResult() {
  const h = S.get('holland_result'), m = S.get('mbti_result'); if (!h || !m) { navigateTo('landing'); return; }
  const hd = HOLLAND_DESCRIPTIONS[h.maxDimension];
  document.getElementById('result-hero').innerHTML = `<span class="thc-page-title">你的测评结果</span><span class="thc-page-sub">霍兰德职业兴趣 + 校园性格分析</span><div class="thc-body"><div class="thc-avatar-wrap"><span class="thc-avatar">${hd.avatar}</span></div><div class="thc-info"><span class="thc-holland-code">${h.hollandCode}</span><span class="thc-type-name">${hd.name}</span><span class="thc-summary">${hd.summary}</span></div><div class="thc-mbti-badge"><span class="thc-mbti-code">${m.typeCode}</span><span class="thc-mbti-name">${m.typeName}</span></div></div>`;
  document.getElementById('res-holland-code').textContent = h.hollandCode;
  // Hex rings
  const dims = Object.entries(h.normalizedScores);
  document.getElementById('hex-rings').innerHTML = `<div class="hex-center"><span class="hex-avatar">${hd.avatar}</span><span class="hex-code">${h.hollandCode}</span></div><div class="hex-dims">${dims.map(([k,v]) => `<div class="hex-dim-item"><div class="hdi-ring"><div class="hdi-fill" style="height:${v}%"></div></div><span class="hdi-name">${k}</span><span class="hdi-score">${v}</span></div>`).join('')}</div>`;
  // Score bars
  document.getElementById('h-score-bars').innerHTML = dims.map(([k,v]) => `<div class="score-bar-item"><div class="score-bar-label"><span class="bar-name">${['R','I','A','S','E','C'].indexOf(k)>=0 ? ['现实型','研究型','艺术型','社会型','企业型','常规型'][['R','I','A','S','E','C'].indexOf(k)] : k}</span><span class="bar-score">${v}分</span></div><div class="score-bar-bg"><div class="score-bar-fill" style="width:${v}%"></div></div></div>`).join('');
  document.getElementById('h-type-desc').innerHTML = hd ? `<div class="tags">${hd.traits.map(t => `<span class="tag tag-blue">${t}</span>`).join('')}</div><span class="desc-text mt-16">${hd.suitable}</span><span class="desc-text">📖 学习方式：${hd.learningStyle}</span>` : '';
  document.getElementById('res-mbti-code').textContent = m.typeCode;
  document.getElementById('res-mbti-name').textContent = m.typeName;
  const EI=m.traits.E||50, SN=m.traits.S||50, TF=m.traits.T||50, JP=m.traits.J||50;
  document.getElementById('mbti-dim-bars').innerHTML = [
    {l:'外向E',r:'内向I',lp:EI},{l:'感觉S',r:'直觉N',lp:SN},{l:'思考T',r:'情感F',lp:TF},{l:'判断J',r:'感知P',lp:JP}
  ].map(d => `<div class="dim-item"><div class="dim-labels"><span class="dim-label ${d.lp>=50?'active':''}">${d.l} (${d.lp})</span><span class="dim-label ${d.lp<50?'active':''}">${d.r} (${100-d.lp})</span></div><div class="dim-bar-bg"><div class="dim-bar-left" style="width:${d.lp}%"><span class="dim-pct">${d.lp}%</span></div></div></div>`).join('');
  document.getElementById('mbti-traits').innerHTML = `<div class="traits-block"><span class="traits-label">✅ 优势</span><div class="tags">${m.strengths.map(s=>`<span class="tag tag-green">${s}</span>`).join('')}</div></div><div class="traits-block"><span class="traits-label">⚠️ 待提升</span><div class="tags">${m.weaknesses.map(w=>`<span class="tag tag-orange">${w}</span>`).join('')}</div></div>`;
  document.getElementById('mbti-learning').textContent = m.learningStyle;
}

function renderSubjectChoice() {
  var el = document.getElementById('subject-combo-area');
  var h = S.get('holland_result'), m = S.get('mbti_result'), sc = S.get('selected_career');
  if (!h || !m || !sc) { navigateTo('landing'); return; }

  var subjects = ['语文','数学','英语','物理','化学','生物','历史','地理','政治'];
  var gridHtml = '';
  for (var i = 0; i < subjects.length; i++) {
    gridHtml += '<div class="subject-item"><span class="subject-name">' + subjects[i] + '</span><input class="asg-input" id="as-' + subjects[i] + '" type="number" placeholder="分数"></div>';
  }
  el.innerHTML = '<div class="card card-elevated block"><span class="step-title">📝 第一步：输入最近一次大考的9科成绩</span><span class="step-desc">语数英满分150，其余6科满分100</span><div class="all-score-grid">' + gridHtml + '</div><button class="btn-confirm btn-block mt-24" onclick="App.analyzeAllScores()">分析成绩 →</button></div><div id="subject-analysis-area" style="display:none"></div>';
}

function renderCareerRecommend() {
  const h = S.get('holland_result'), m = S.get('mbti_result'); if (!h || !m) { navigateTo('landing'); return; }
  const careers = matchCareers(h, m);
  document.getElementById('career-header-sub').textContent = `霍兰德 ${h.hollandCode} + 校园性格 ${m.typeCode}`;
  document.getElementById('career-list').innerHTML = careers.map((c,i) => `
    <div class="career-card-el card" data-id="${c.id}" onclick="App.selectCareer(${JSON.stringify(c).replace(/"/g,'&quot;')})">
      <div class="card-top flex-between"><span class="career-name">${i+1}. ${c.name}</span><span class="match-badge"><span class="match-score">${c.matchScore}%</span></span></div>
      <div class="match-detail"><span>🔬 霍兰德: ${c.hollandMatch}%</span><span>🧠 性格: ${c.mbtiMatch}%</span></div>
      <div class="tags mt-8">${c.tags.map(t=>`<span class="tag tag-blue">${t}</span>`).join('')}</div>
      <span class="desc-text mt-8">${c.description}</span>
    </div>`).join('');
  document.getElementById('career-footer').style.display = 'none';
}

function renderScoreInput() {
  document.getElementById('si-province').innerHTML = REGIONS.map(r => `<option value="${r.value}">${r.label}</option>`).join('');
  App.onProvinceChange();
  document.getElementById('pref-province-grid').innerHTML = REGIONS.map(r => `<span class="pp-item" data-province="${r.value}" onclick="App.togglePrefProvince('${r.value}',this)">${r.label}</span>`).join('');
  document.getElementById('elective-grid').innerHTML = [{n:'物理',i:'⚛️'},{n:'化学',i:'🧪'},{n:'生物',i:'🧬'},{n:'历史',i:'📜'},{n:'地理',i:'🌍'},{n:'政治',i:'⚖️'}].map(s => `<div class="el-item" onclick="App.toggleElective('${s.n}',this)"><span class="el-icon">${s.i}</span><span class="el-name">${s.n}</span><span class="el-full">满分100</span></div>`).join('');
  App.rebuildSubjectGrid();
  // Restore saved
  const saved = S.get('score_input');
  if (saved) {
    document.getElementById('si-province').value = saved.province; App.onProvinceChange();
    Object.entries(saved.subjectScores||{}).forEach(([k,v]) => App.siSubjectScores[k] = v);
    (saved.subjects||[]).filter(s => !['语文','数学','英语'].includes(s)).forEach(s => App.siElectiveActive[s] = true);
    App.rebuildSubjectGrid();
    document.getElementById('si-ranking').value = saved.ranking || '';
    document.getElementById('si-total').textContent = saved.totalScore || 0;
    saved.preferredProvinces?.forEach(p => App.preferredProvinces.push(p));
  }
}

function renderSchoolMatch() {
  const input = S.get('score_input'), career = S.get('selected_career'); if (!input || !career) { navigateTo('score-input'); return; }
  document.getElementById('sm-subtitle').textContent = `总分 ${input.totalScore} · ${career.careerName}`;
  const majors = getMajorsByCareer(career.careerId);
  const result = filterSchools(input, majors.map(m => m.majorId));
  const pr = result.provinceResults || [];
  document.getElementById('school-match-content').innerHTML = pr.length === 0 ? '<div class="empty-state"><span class="empty-icon">🔍</span><span class="empty-text">暂未匹配到院校</span></div>' : pr.map(p => `
    <div class="province-block"><div class="province-header ${p.inPreferredProvince?'pref-province':''}" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'"><div class="ph-left"><span class="ph-icon">${p.inPreferredProvince?'📍':'🌍'}</span><span class="ph-name">${p.provinceName}</span>${p.inPreferredProvince?'<span class="ph-badge">意向省</span>':''}</div><div class="ph-right"><span class="ph-count">${p.schoolCount}所</span><span>▼</span></div></div>
    <div class="province-schools" style="display:${p.inPreferredProvince?'block':'none'}">
      ${['rush','steady','safe','bottom'].map(cat => p[cat].length > 0 ? `
        <div class="cat-section"><div class="cat-header"><span class="cat-name">${cat==='rush'?'🚀 冲刺':cat==='steady'?'🎯 稳妥':cat==='safe'?'✅ 保底':'📌 垫底'}</span></div>
        ${p[cat].map(s => `<div class="school-card-el ${cat==='rush'?'reach-style':''}" onclick="this.classList.toggle('expanded')">
          <div class="card-top flex-between"><span class="school-name">${s.schoolName}</span><span class="school-location">${s.inPreferredProvince?'📍 意向省':s.location}</span></div>
          <div class="score-row"><span class="score-item">投档线 ${s.majors[0].minScore}分</span><span class="score-item">对口专业 ${s.majors.length}个</span></div>
          <div class="majors-expand"><div class="divider"></div>${s.majors.map(m => `<div class="major-row ${m.scoreDiff>=-10&&m.scoreDiff<=10?'major-match':''}"><span class="mr-name">${m.majorName}</span><span class="mr-diff ${m.scoreDiff>=0?'safe':'reach'}">${m.scoreDiff>=0?'超'+m.scoreDiff+'分':'需提'+-m.scoreDiff+'分'}</span></div>`).join('')}</div>
          <div class="expand-hint"><span>点击展开 ${s.majors.length} 个专业</span></div>
        </div>`).join('')}
        </div>` : '').join('')}
    </div></div>`).join('');
}

function renderGapAnalysis() { document.getElementById('gap-content').innerHTML = '<div class="card card-elevated"><span class="desc-text">请从院校匹配页选择冲刺院校查看详细分差分析。</span></div>'; }

function renderReport() {
  const h = S.get('holland_result'), m = S.get('mbti_result'), sm = S.get('school_match_result'), sc = S.get('selected_career');
  if (!h || !m) { navigateTo('landing'); return; }
  const hd = HOLLAND_DESCRIPTIONS[h.maxDimension], careers = matchCareers(h,m);
  document.getElementById('report-content').innerHTML = `
    <div class="card card-elevated block"><div class="block-title"><span class="block-num">01</span>个人性格解析</div>
      <div class="dual-card"><div class="dcard dcard-personality"><span class="dc-label">校园性格类型</span><span class="dc-big">${m.typeCode}</span><span class="dc-name">${m.typeName}</span></div><div class="dcard dcard-holland"><span class="dc-label">霍兰德代码</span><span class="dc-big">${h.hollandCode}</span><span class="dc-name">${hd.name}</span></div></div>
      <span class="info-text mt-12">优势：${m.strengths.join('、')}</span><span class="info-text mt-8">学习特点：${m.learningStyle}</span></div>
    <div class="card card-elevated block"><div class="block-title"><span class="block-num">02</span>职业适配说明</div>${careers.slice(0,3).map(c => `<div class="career-block"><span class="cb-name">${c.name} · 匹配 ${c.matchScore}%</span><span class="cb-desc">${c.description}</span></div>`).join('')}</div>
    <div class="card card-elevated block"><div class="block-title"><span class="block-num">03</span>院校规划</div>${sm ? `<span class="sub-title">稳妥保底</span>${(sm.safeSchools||[]).slice(0,4).map(s => `<div class="school-row">${s.schoolName} · ${(s.majors||[{majorName:'-'}])[0].majorName}（投档${s.majors?.[0]?.minScore||'-'}分）</div>`).join('')}<span class="sub-title mt-16">冲刺院校</span>${(sm.reachSchools||[]).slice(0,3).map(s => `<div class="school-row reach">${s.schoolName}（目标${s.majors?.[0]?.minScore||'-'}分）</div>`).join('')}` : '<span class="desc-text">请先完成院校匹配</span>'}</div>
    <div class="card card-elevated block"><div class="block-title"><span class="block-num">04</span>学习建议总结</div><span class="info-text">📖 合理规划学习时间，重点突破薄弱学科。</span><span class="info-text mt-8">🎯 关注目标院校招生政策变化，及时调整备考策略。</span><span class="info-text mt-8">💪 保持良好心态，持续努力！</span></div>
    <div class="card card-elevated block qr-block"><div class="block-title"><span class="block-num">05</span>专属升学规划</div><img class="qr-image" src="assets/images/qrcode-teacher.png" alt="微信" style="display:block;width:200px;height:200px;margin:10px auto;border-radius:12px;"><span style="display:block;text-align:center;font-size:16px;font-weight:600;">扫码添加升学规划导师</span><span style="display:block;text-align:center;font-size:13px;color:#9CA3AF;">获取1对1志愿填报指导与提分方案</span></div>`;
}

function renderArchive() {
  const h = S.get('holland_result'), m = S.get('mbti_result'), sc = S.get('selected_career'), si = S.get('score_input');
  document.getElementById('archive-content').innerHTML = (!h && !m && !sc) ? '<div class="empty-state"><span class="empty-icon">📭</span><span class="empty-text">暂无档案数据</span><span class="empty-desc">完成测评后数据自动汇入</span><button class="btn-confirm mt-32" onclick="navigateTo(\'landing\')">开始首次测评 →</button></div>' : `
    <div class="update-time">数据更新时间 ${new Date().toLocaleString()}</div>
    ${h ? `<div class="card card-elevated block"><div class="block-title"><span>01 霍兰德代码</span></div><span class="ar-value highlight">${h.hollandCode}</span></div>`:''}
    ${m ? `<div class="card card-elevated block"><div class="block-title"><span>02 校园性格</span></div><span class="ar-value highlight">${m.typeCode} ${m.typeName}</span></div>`:''}
    ${sc ? `<div class="card card-elevated block"><div class="block-title"><span>03 目标职业</span></div><span class="ar-value highlight">${sc.careerName}</span></div>`:''}
    ${si ? `<div class="card card-elevated block"><div class="block-title"><span>04 模考成绩</span></div><span class="ar-value highlight">${si.totalScore} / 750</span></div>`:''}
    <button class="btn-confirm btn-block mt-24" onclick="navigateTo('landing')">🔄 重新测评</button>`;
}

// ===== Init =====
navigateTo('landing');
