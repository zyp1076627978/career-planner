// 各科分层学习策略推荐
const LEARNING_STRATEGIES = {
  '语文': {
    subject: '语文',
    levels: [
      {
        maxScore: 90,
        label: '基础薄弱',
        scoreRange: '90分以下',
        strategy: '夯实课本基础 + 古诗文背诵 + 阅读理解入门',
        tips: [
          '每天背诵1-2首经典古诗文，积累文言实词',
          '阅读理解从记叙文入手，掌握"人物+情节+主题"框架',
          '作文从记叙文开始，每周写1篇500字短文',
          '关注课内生字词，建立错字本',
        ],
        priority: 'high',
      },
      {
        maxScore: 105,
        label: '有待提升',
        scoreRange: '90-105分',
        strategy: '加强阅读理解训练 + 议论文框架搭建',
        tips: [
          '阅读理解转向议论文/说明文，学习论证方法',
          '作文每周1篇，建立"总-分-总"框架',
          '积累时事素材，准备10个万能素材',
          '语言文字运用专项练习，重点攻语病和修辞',
        ],
        priority: 'medium',
      },
      {
        maxScore: 120,
        label: '中等偏上',
        scoreRange: '105-120分',
        strategy: '突破文言文翻译 + 作文升格 + 主观题答题规范',
        tips: [
          '文言文做逐字翻译练习，掌握虚词用法',
          '作文尝试不同文体（议论文+散文），追求立意深度',
          '现代文阅读训练答题模板（环境描写作用、人物形象分析等）',
          '限时模拟，控制各部分时间分配',
        ],
        priority: 'medium',
      },
      {
        maxScore: 150,
        label: '冲刺高分',
        scoreRange: '120分以上',
        strategy: '精准备考 + 查漏补缺 + 保持稳定',
        tips: [
          '每周1套完整真题限时训练',
          '作文准备3种以上开头/结尾模板',
          '针对个人弱项进行精准小题训练',
          '保持阅读量，提升语感和知识面',
        ],
        priority: 'low',
      },
    ],
  },
  '数学': {
    subject: '数学',
    levels: [
      {
        maxScore: 60,
        label: '基础薄弱',
        scoreRange: '60分以下',
        strategy: '回归课本概念 + 基础公式记忆 + 简单题型熟练',
        tips: [
          '从课本例题开始，每天弄懂3道基础题',
          '建立公式卡片（三角函数、向量、导数公式等）',
          '优先攻克集合、复数、向量等易得分章节',
          '不要碰难题，专注中低档题的正确率',
        ],
        priority: 'high',
      },
      {
        maxScore: 90,
        label: '有待提升',
        scoreRange: '60-90分',
        strategy: '突破中档题型 + 错题本系统 + 限时训练',
        tips: [
          '准备错题本，按照"函数/几何/概率"分类整理',
          '每天限时完成10道基础题+5道中档题',
          '重点突破：数列、三角函数、立体几何基础',
          '每周复习一次错题本，标记反复出错的题型',
        ],
        priority: 'medium',
      },
      {
        maxScore: 120,
        label: '中等偏上',
        scoreRange: '90-120分',
        strategy: '攻克导数/圆锥曲线 + 综合题训练 + 提高速度',
        tips: [
          '导数大题分步得分（求导→单调性→极值→证明），不跳步',
          '圆锥曲线掌握"设而不求"和韦达定理套路',
          '概率统计大题规范答题步骤',
          '每周一套完整真题限时120分钟',
        ],
        priority: 'medium',
      },
      {
        maxScore: 150,
        label: '冲刺高分',
        scoreRange: '120分以上',
        strategy: '压轴题专项 + 竞赛思维 + 考前模拟',
        tips: [
          '导数压轴题专项训练，掌握分类讨论思想',
          '圆锥曲线难题突破（定点定值、最值问题）',
          '选做题稳拿满分（极坐标参数方程/不等式）',
          '仿真考试环境训练心态和时间把控',
        ],
        priority: 'low',
      },
    ],
  },
  '英语': {
    subject: '英语',
    levels: [
      {
        maxScore: 80,
        label: '严重薄弱',
        scoreRange: '80分以下（150满分）',
        strategy: '⚠️ 建议评估是否切换小语种 + 基础词汇突击',
        tips: [
          '🎯 强烈建议考虑日语/俄语等小语种高考',
          '小语种高考难度低于英语，平均提分20-40分',
          '如果坚持英语：从初中词汇开始重新积累',
          '每天背诵20个基础单词，阅读从短文开始',
        ],
        priority: 'high',
        triggerLanguage: true, // 触发小语种推荐
      },
      {
        maxScore: 105,
        label: '有待提升',
        scoreRange: '80-105分',
        strategy: '高考核心词汇 + 语法系统梳理 + 阅读提速',
        tips: [
          '每天背诵30个高考核心词，用APP辅助记忆',
          '系统梳理语法（时态、从句、非谓语动词）',
          '每天做2篇阅读理解，限时8分钟/篇',
          '准备作文模板（书信、议论文各2套）',
        ],
        priority: 'medium',
      },
      {
        maxScore: 125,
        label: '中等偏上',
        scoreRange: '105-125分',
        strategy: '完形填空突破 + 写作升格 + 听力满分',
        tips: [
          '完形填空练习上下文推理，积累固定搭配',
          '作文升级：替换高级词汇和复杂句型',
          '听力争取满分，每天15分钟听力训练',
          '阅读理解分类训练（说明文/议论文/应用文）',
        ],
        priority: 'medium',
      },
      {
        maxScore: 150,
        label: '冲刺高分',
        scoreRange: '125分以上',
        strategy: '保持状态 + 查漏补缺 + 时间优化',
        tips: [
          '每周1套完整真题保持手感',
          '写作尝试25分以上的高分写法',
          '重点检查自己易错题型对应的语法点',
          '考前15天半套真题+作文+听力每天训练',
        ],
        priority: 'low',
      },
    ],
  },
  '物理': {
    subject: '物理',
    levels: [
      { maxScore: 40, label: '基础薄弱', scoreRange: '40分以下（100满分）',
        strategy: '理解基本概念+力学入门+简单计算', tips: ['从牛顿定律和运动学入手', '画受力分析图是基础', '不做难题，注重基本公式套用'], priority: 'high' },
      { maxScore: 65, label: '有待提升', scoreRange: '40-65分',
        strategy: '电磁学突破+实验题训练+综合应用', tips: ['电磁学公式卡片每天复习', '实验题掌握数据分析和误差处理', '力学与电学综合题分步求解'], priority: 'medium' },
      { maxScore: 85, label: '中等偏上', scoreRange: '65-85分',
        strategy: '压轴题专项+模型化思维', tips: ['掌握20种常见物理模型', '主攻动量能量综合、电磁感应综合', '选择题限时训练提速'], priority: 'medium' },
      { maxScore: 100, label: '冲刺高分', scoreRange: '85分以上', strategy: '全面查漏+思维深度', tips: ['竞赛基础题拓展物理思维', '仿真限时训练', '重点突破个人弱项板块'], priority: 'low' },
    ],
  },
  '化学': {
    subject: '化学',
    levels: [
      { maxScore: 40, label: '基础薄弱', scoreRange: '40分以下',
        strategy: '化学方程式+元素周期律+基础实验', tips: ['每天默写10个化学方程式', '元素周期表分区记忆', '不要怕化学计算，从最基础的开始'], priority: 'high' },
      { maxScore: 65, label: '有待提升', scoreRange: '40-65分',
        strategy: '有机化学+化学平衡+工业流程', tips: ['有机推断专项突破', '化学平衡三段式解题法', '工业流程题注意"原料→产品"思路'], priority: 'medium' },
      { maxScore: 85, label: '中等偏上', scoreRange: '65-85分',
        strategy: '综合实验题+计算专项+高频考点', tips: ['实验探究题答题模板', '化学计算四大类型专项', '选择题限时练速度'], priority: 'medium' },
      { maxScore: 100, label: '冲刺高分', scoreRange: '85分以上', strategy: '知识网络+全真模拟', tips: ['建立化学知识网络图', '模拟考试查漏补缺', '保持手感和速度'], priority: 'low' },
    ],
  },
  '生物': {
    subject: '生物',
    levels: [
      { maxScore: 40, label: '基础薄弱', scoreRange: '40分以下',
        strategy: '课本基础知识+核心概念记忆', tips: ['从必修一开始梳理核心概念', '制作知识卡片每天翻阅', '选择题练到基本不丢分'], priority: 'high' },
      { maxScore: 65, label: '有待提升', scoreRange: '40-65分',
        strategy: '遗传学攻克+实验设计+知识串联', tips: ['遗传题画系谱图和遗传图解', '实验设计掌握"对照+单一变量"原则', '光合呼吸综合计算专项突破'], priority: 'medium' },
      { maxScore: 85, label: '中等偏上', scoreRange: '65-85分',
        strategy: '长句表达训练+综合题+限时', tips: ['大题长句表达规范化训练', '图文信息提取能力提升', '限时训练提升速度'], priority: 'medium' },
      { maxScore: 100, label: '冲刺高分', scoreRange: '85分以上', strategy: '回归课本+考前冲刺', tips: ['回归课本查细节', '错题二刷', '保持题感即可'], priority: 'low' },
    ],
  },
  '历史': {
    subject: '历史',
    levels: [
      { maxScore: 40, label: '基础薄弱', scoreRange: '40分以下',
        strategy: '时间轴梳理+重大事件记忆', tips: ['画出中外历史时间轴对照图', '每天记3个重大事件（背景+经过+影响）', '选择题先保基础'], priority: 'high' },
      { maxScore: 65, label: '有待提升', scoreRange: '40-65分',
        strategy: '材料题训练+专题史梳理+小论文', tips: ['材料题学会"读→找→析→答"四步法', '政治/经济/文化专题分类梳理', '小论文每周练1篇'], priority: 'medium' },
      { maxScore: 85, label: '中等偏上', scoreRange: '65-85分',
        strategy: '纵横比较+高阶论述+时间优化', tips: ['中外历史同阶段对比分析', '论述题逻辑链训练', '限时模拟提速'], priority: 'medium' },
      { maxScore: 100, label: '冲刺高分', scoreRange: '85分以上', strategy: '热点专题+模拟冲刺', tips: ['关注学术热点和改革方向', '全套真题限时训练', '保持稳定输出'], priority: 'low' },
    ],
  },
  '地理': {
    subject: '地理',
    levels: [
      { maxScore: 40, label: '基础薄弱', scoreRange: '40分以下',
        strategy: '地图记忆+自然地理基础概念', tips: ['每天看地图10分钟记位置和地形', '自然地理核心概念（气候/地形/水文）梳理', '选修内容选简单板块'], priority: 'high' },
      { maxScore: 65, label: '有待提升', scoreRange: '40-65分',
        strategy: '人文地理+区域分析+图表解读', tips: ['人口/城市/农业/工业四大专题', '区域分析掌握"自然环境→人文→发展"框架', '等值线图/统计图解法训练'], priority: 'medium' },
      { maxScore: 85, label: '中等偏上', scoreRange: '65-85分',
        strategy: '综合题突破+答题模板+时事关注', tips: ['综合题答题模板训练', '关注热点（一带一路/双碳等地理相关）', '自然地理计算专题突破'], priority: 'medium' },
      { maxScore: 100, label: '冲刺高分', scoreRange: '85分以上', strategy: '查漏补缺+仿真模拟', tips: ['错题本查漏', '限时真题模拟', '保持题感和知识面'], priority: 'low' },
    ],
  },
  '政治': {
    subject: '政治',
    levels: [
      { maxScore: 40, label: '基础薄弱', scoreRange: '40分以下',
        strategy: '教材核心概念+框架搭建', tips: ['四本教材画出知识框架图', '每天背10个核心概念', '选择题从易到难训练'], priority: 'high' },
      { maxScore: 65, label: '有待提升', scoreRange: '40-65分',
        strategy: '热点专题+主观题训练+时政积累', tips: ['经济/政治/文化/哲学四大板块专题', '主观题学会"原理+材料+结论"三段式', '关注时政热点（两会/二十大等）'], priority: 'medium' },
      { maxScore: 85, label: '中等偏上', scoreRange: '65-85分',
        strategy: '综合论述+高分模板+限时', tips: ['高分论述题答题模板强化', '跨板块综合题专项', '限时模拟提升书写速度'], priority: 'medium' },
      { maxScore: 100, label: '冲刺高分', scoreRange: '85分以上', strategy: '融会贯通+全真模拟', tips: ['时政热词专题整理', '全套真题限时', '保持书写规范和时间把控'], priority: 'low' },
    ],
  },
};

// 根据科目和成绩获取学习策略
function getStrategy(subject, score) {
  const strategies = LEARNING_STRATEGIES[subject];
  if (!strategies) return null;

  for (const level of strategies.levels) {
    if (score <= level.maxScore) {
      return {
        subject,
        currentScore: score,
        ...level,
      };
    }
  }
  // 超出最高档，返回最后一档
  return {
    subject,
    currentScore: score,
    ...strategies.levels[strategies.levels.length - 1],
  };
}

export { LEARNING_STRATEGIES, getStrategy };
