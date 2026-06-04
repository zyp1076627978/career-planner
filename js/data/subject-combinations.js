// 新高考选科组合数据库
// 基于霍兰德类型 + MBTI 推荐选科组合

const SUBJECT_COMBINATIONS = [
  {
    id: 'SC01',
    name: '物理 + 化学 + 生物',
    shortName: '物化生',
    group: 'wuli',
    description: '传统理科组合，专业覆盖面最广，适合想学医、理工科的同学',
    hollandMatch: ['R', 'I', 'C'],
    mbtiPreferences: ['T'],
    coverageRate: '96%', // 专业覆盖率
    suitableCareers: ['C001', 'C002', 'C005', 'C011', 'C020'],
    suitableMajors: ['M001', 'M010', 'M090', 'M140', 'M150'],
    learningCharacteristics: '需要较强的逻辑思维和实验操作能力，适合理性思考、动手能力强的学生',
    studyTips: '物理注重公式理解和模型建立，化学注重方程式记忆和实验原理，生物注重知识体系构建',
  },
  {
    id: 'SC02',
    name: '物理 + 化学 + 地理',
    shortName: '物化地',
    group: 'wuli',
    description: '理科中的地理派，兼顾工科和地理相关专业，适合环境类方向',
    hollandMatch: ['R', 'I', 'S'],
    mbtiPreferences: ['T', 'S'],
    coverageRate: '85%',
    suitableCareers: ['C001', 'C006', 'C014', 'C018'],
    suitableMajors: ['M001', 'M040', 'M110', 'M140'],
    learningCharacteristics: '物理化学需要逻辑，地理偏记忆和理解，文理搭配较均衡',
    studyTips: '地理结合地图记忆效果好，物理化学多做高考真题找规律',
  },
  {
    id: 'SC03',
    name: '物理 + 生物 + 地理',
    shortName: '物生地',
    group: 'wuli',
    description: '避开化学的理科组合，适合化学弱但对生物地理有兴趣的同学',
    hollandMatch: ['I', 'S', 'R'],
    mbtiPreferences: ['S', 'F'],
    coverageRate: '76%',
    suitableCareers: ['C004', 'C009', 'C014', 'C016'],
    suitableMajors: ['M070', 'M110', 'M130', 'M030'],
    learningCharacteristics: '避开纯化学的难度，生物和地理记忆理解并重',
    studyTips: '生物注重知识框架梳理，地理关注时事热点和区域分析',
  },
  {
    id: 'SC04',
    name: '物理 + 化学 + 政治',
    shortName: '物化政',
    group: 'wuli',
    description: '可报军警类院校的特殊组合，专业面仅次于物化生',
    hollandMatch: ['E', 'I', 'R'],
    mbtiPreferences: ['T', 'J'],
    coverageRate: '90%',
    suitableCareers: ['C007', 'C013', 'C018', 'C011'],
    suitableMajors: ['M050', 'M090', 'M100', 'M140'],
    learningCharacteristics: '物理化学理科思维 + 政治时政思维，需要两种思维切换',
    studyTips: '政治关注时事，结合新闻和政策文件记忆；理科多做真题训练思维',
  },
  {
    id: 'SC05',
    name: '历史 + 政治 + 地理',
    shortName: '历政地',
    group: 'lishi',
    description: '传统文科组合，适合想学法、新闻、教育等方向的文科生',
    hollandMatch: ['A', 'S', 'E'],
    mbtiPreferences: ['F', 'N'],
    coverageRate: '48%',
    suitableCareers: ['C003', 'C004', 'C007', 'C017', 'C019'],
    suitableMajors: ['M030', 'M050', 'M080', 'M100'],
    learningCharacteristics: '需要大量阅读和记忆，需要较强的文字表达和政治敏感度',
    studyTips: '历史注重时空观念和因果分析，政治关注热点，地理图文结合',
  },
  {
    id: 'SC06',
    name: '历史 + 政治 + 生物',
    shortName: '历政生',
    group: 'lishi',
    description: '文科为主+生物，适合想学护理、心理学等需要生物基础的专业',
    hollandMatch: ['S', 'A', 'I'],
    mbtiPreferences: ['F', 'S'],
    coverageRate: '52%',
    suitableCareers: ['C004', 'C009', 'C016', 'C013'],
    suitableMajors: ['M070', 'M130', 'M030', 'M100'],
    learningCharacteristics: '文科记忆为主，生物偏理科思维但记忆量大，可互补',
    studyTips: '生物内容可与历史政治交叉记忆复习，制作知识卡片效果明显',
  },
  {
    id: 'SC07',
    name: '历史 + 地理 + 化学',
    shortName: '历地化',
    group: 'lishi',
    description: '偏文科中带一门理科，适合想学地理信息、环境等交叉学科',
    hollandMatch: ['I', 'A', 'S'],
    mbtiPreferences: ['N', 'F'],
    coverageRate: '50%',
    suitableCareers: ['C003', 'C006', 'C010', 'C014'],
    suitableMajors: ['M040', 'M041', 'M080', 'M110'],
    learningCharacteristics: '文理跨界组合，化学实验能力 + 文科记忆表达',
    studyTips: '化学注重实验原理和方程，历史地理利用碎片时间多看多记',
  },
  {
    id: 'SC08',
    name: '历史 + 生物 + 化学',
    shortName: '历生化',
    group: 'lishi',
    description: '文科历史打底+两门理科，可报部分医药类专业',
    hollandMatch: ['I', 'S', 'C'],
    mbtiPreferences: ['T', 'S'],
    coverageRate: '55%',
    suitableCareers: ['C016', 'C009', 'C014', 'C002'],
    suitableMajors: ['M130', 'M070', 'M110'],
    learningCharacteristics: '需要记忆+计算的结合，适合能力较全面的学生',
    studyTips: '理科学科要多刷题保持手感，文科历史注意论述题训练',
  },
];

// 科目组合需要的单独学科
const INDIVIDUAL_SUBJECTS = {
  '物理': { icon: '⚛️', desc: '理工科敲门砖，选择面最广', requiredFor: ['计算机', '机械', '电气', '土木', '航空航天等90%+工科专业'] },
  '化学': { icon: '🧪', desc: '医学和化工类必选', requiredFor: ['临床医学', '药学', '化学工程', '材料科学'] },
  '生物': { icon: '🧬', desc: '生命科学类专业基础', requiredFor: ['生物工程', '医学', '农林', '心理学'] },
  '历史': { icon: '📜', desc: '文科和社科专业核心', requiredFor: ['法学', '新闻', '教育学', '历史学', '汉语言文学'] },
  '地理': { icon: '🌍', desc: '文理交叉学科', requiredFor: ['地理科学', '城乡规划', '环境科学', '测绘'] },
  '政治': { icon: '⚖️', desc: '法学和军警院校必备', requiredFor: ['法学', '政治学', '公安', '军事院校'] },
};

// 根据霍兰德+MBTI匹配选科
function recommendSubjects(hollandResult, mbtiResult) {
  const { hollandCode } = hollandResult;
  const { typeCode } = mbtiResult;

  const scored = SUBJECT_COMBINATIONS.map((combo) => {
    let score = 0;

    // 霍兰德匹配
    combo.hollandMatch.forEach((code, idx) => {
      const pos = hollandCode.indexOf(code);
      if (pos >= 0) score += (3 - pos) * 20;
    });

    // MBTI 匹配
    combo.mbtiPreferences.forEach((pref) => {
      if (typeCode.includes(pref)) score += 25;
    });

    return { ...combo, matchScore: Math.min(100, Math.round(score * 0.8)) };
  });

  return scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
}

export { SUBJECT_COMBINATIONS, INDIVIDUAL_SUBJECTS, recommendSubjects };
