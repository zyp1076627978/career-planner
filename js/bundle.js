// === holland-questions.js
// 霍兰德职业兴趣测试题目（精简版，36题：6维度 × 6题）
var OPTIONS_LIKERT_5 = [
  { label: '非常符合', score: 5 },
  { label: '比较符合', score: 4 },
  { label: '一般', score: 3 },
  { label: '不太符合', score: 2 },
  { label: '非常不符合', score: 1 },
];

var HOLLAND_QUESTIONS = [
  // ===== R 维度：现实型（Realistic）- 6题 =====
  { id: 'H01', dimension: 'R', question: '动手修理或组装物品让我感到很有成就感' },
  { id: 'H02', dimension: 'R', question: '我对机械、工具或电子设备的操作很感兴趣' },
  { id: 'H03', dimension: 'R', question: '比起室内脑力活动，我更享受户外体力活动' },
  { id: 'H04', dimension: 'R', question: '我喜欢亲自动手建造或制作具体的东西' },
  { id: 'H05', dimension: 'R', question: '对电器、电路或机械原理有天然的好奇心' },
  { id: 'H06', dimension: 'R', question: '我喜欢需要身体协调和动手能力的任务' },

  // ===== I 维度：研究型（Investigative）- 6题 =====
  { id: 'H07', dimension: 'I', question: '我喜欢独自思考和深入研究问题' },
  { id: 'H08', dimension: 'I', question: '对科学实验、数据分析或理论研究有浓厚兴趣' },
  { id: 'H09', dimension: 'I', question: '我经常好奇事物背后的原理和规律' },
  { id: 'H10', dimension: 'I', question: '我享受通过逻辑推理和数据来得出结论' },
  { id: 'H11', dimension: 'I', question: '阅读科普文章或学术书籍让我感到充实' },
  { id: 'H12', dimension: 'I', question: '我倾向于独立思考，不盲目接受他人观点' },

  // ===== A 维度：艺术型（Artistic）- 6题 =====
  { id: 'H13', dimension: 'A', question: '音乐、绘画、写作等创作活动让我沉浸其中' },
  { id: 'H14', dimension: 'A', question: '我对色彩、造型、节奏和美感非常敏感' },
  { id: 'H15', dimension: 'A', question: '我喜欢用创新的方式表达自己的想法和情感' },
  { id: 'H16', dimension: 'A', question: '对戏剧、电影、文学或设计有特别的兴趣' },
  { id: 'H17', dimension: 'A', question: '我更看重想象力和创造力，而非条条框框' },
  { id: 'H18', dimension: 'A', question: '我喜欢自由、不拘一格的学习和工作环境' },

  // ===== S 维度：社会型（Social）- 6题 =====
  { id: 'H19', dimension: 'S', question: '帮助他人解决问题让我感到满足和有意义' },
  { id: 'H20', dimension: 'S', question: '我在团队合作中感到特别充实和有动力' },
  { id: 'H21', dimension: 'S', question: '我善于倾听他人的烦恼并给予支持' },
  { id: 'H22', dimension: 'S', question: '对教育、培训或辅导他人有浓厚兴趣' },
  { id: 'H23', dimension: 'S', question: '我乐于参与志愿服务或社会公益活动' },
  { id: 'H24', dimension: 'S', question: '与人打交道比与数据打交道更让我有热情' },

  // ===== E 维度：企业型（Enterprising）- 6题 =====
  { id: 'H25', dimension: 'E', question: '我喜欢组织和带领团队完成目标' },
  { id: 'H26', dimension: 'E', question: '对商业运作、创业或管理有浓厚兴趣' },
  { id: 'H27', dimension: 'E', question: '我善于说服和影响他人接受自己的观点' },
  { id: 'H28', dimension: 'E', question: '我喜欢有竞争和挑战的环境' },
  { id: 'H29', dimension: 'E', question: '我对管理和决策有浓厚的兴趣' },
  { id: 'H30', dimension: 'E', question: '我经常主动争取有挑战性的任务和机会' },

  // ===== C 维度：常规型（Conventional）- 6题 =====
  { id: 'H31', dimension: 'C', question: '我喜欢按规则和既定流程办事' },
  { id: 'H32', dimension: 'C', question: '处理数据、文件和记录让我感到舒适' },
  { id: 'H33', dimension: 'C', question: '我注重细节和准确性，不喜欢马虎潦草' },
  { id: 'H34', dimension: 'C', question: '我喜欢稳定、可预测的学习和工作节奏' },
  { id: 'H35', dimension: 'C', question: '我善于整理、归类和规划信息' },
  { id: 'H36', dimension: 'C', question: '对会计、统计或行政管理类工作有兴趣' },
];

// 为所有题目添加 options
HOLLAND_QUESTIONS.forEach((q) => {
  q.options = OPTIONS_LIKERT_5;
});

{ HOLLAND_QUESTIONS };


// === holland-descriptions.js
// 霍兰德6种类型解读描述
var HOLLAND_DESCRIPTIONS = {
  R: {
    name: '现实型（Realistic）',
    icon: '🔧',
    avatar: '👷',
    summary: '动手操作、务实稳健的行动派',
    traits: ['动手能力强', '务实稳重', '喜欢户外', '操作熟练', '脚踏实地'],
    suitable: '适合需要动手操作、技术实践的工作环境，如工程技术、机械操作、农业等',
    learningStyle: '通过实际操作和实践来学习效果最佳，喜欢看得见摸得着的成果',
    avoid: '不适合纯理论、抽象或需要大量人际社交的工作',
  },
  I: {
    name: '研究型（Investigative）',
    icon: '🔬',
    avatar: '👩‍🔬',
    summary: '善于思考、热爱探索的思考者',
    traits: ['善于分析', '好奇心强', '独立思考', '逻辑严谨', '喜欢研究'],
    suitable: '适合需要深度思考和分析的工作，如科研、技术研发、数据分析等',
    learningStyle: '通过阅读、研究和独立思考学习，喜欢从原理出发理解事物',
    avoid: '不适合重复性高、缺乏智力挑战或需要频繁社交的工作',
  },
  A: {
    name: '艺术型（Artistic）',
    icon: '🎨',
    avatar: '👩‍🎨',
    summary: '富有创意、自由表达的创造者',
    traits: ['创造力强', '情感丰富', '审美敏锐', '自由不羁', '善于表达'],
    suitable: '适合需要创意和审美的工作，如设计、写作、音乐、影视、广告等',
    learningStyle: '通过创作、体验和感受来学习，不喜欢死板的条条框框',
    avoid: '不适合高度结构化、规则严格或重复单调的工作',
  },
  S: {
    name: '社会型（Social）',
    icon: '🤝',
    avatar: '👩‍🏫',
    summary: '乐于助人、善于沟通的助人者',
    traits: ['乐于助人', '善于沟通', '有同理心', '团队协作', '有耐心'],
    suitable: '适合与人打交道的工作，如教育、医疗、心理咨询、社会服务等',
    learningStyle: '通过讨论、合作和教授他人来学习，喜欢互动式的学习环境',
    avoid: '不适合长期独自工作、缺乏人际交流的技术型工作',
  },
  E: {
    name: '企业型（Enterprising）',
    icon: '💼',
    avatar: '👨‍💼',
    summary: '目标明确、善于领导的推动者',
    traits: ['领导力强', '善于说服', '目标明确', '勇于冒险', '自信果断'],
    suitable: '适合需要领导力和决策力的工作，如管理、销售、创业、金融等',
    learningStyle: '通过实践项目、竞赛和挑战来学习，喜欢有目标导向的学习',
    avoid: '不适合过于按部就班、缺乏自主权和上升空间的工作',
  },
  C: {
    name: '常规型（Conventional）',
    icon: '📊',
    avatar: '👩‍💻',
    summary: '条理分明、细致可靠的组织者',
    traits: ['条理清晰', '细心负责', '遵守规范', '稳定可靠', '注重效率'],
    suitable: '适合需要条理和规范的工作，如会计、行政、数据管理、档案等',
    learningStyle: '通过系统化、有结构的方式学习，喜欢清晰的步骤和标准',
    avoid: '不适合方向不明确、缺乏规则或频繁变动的工作',
  },
};

{ HOLLAND_DESCRIPTIONS };


// === mbti-questions.js
// MBTI 性格测试题目（校园轻量化版，28题：4维度 × 7题）
var MBTI_QUESTIONS = [
  // ===== EI 维度（外向/内向）- 7题 =====
  { id: 'M01', dimension: 'EI', question: '在聚会或集体活动中，你通常：', options: [
    { label: '主动与很多人交谈，感到精力充沛', orientation: 'E' },
    { label: '更愿意与少数熟人深入交流', orientation: 'I' }
  ]},
  { id: 'M02', dimension: 'EI', question: '课余空闲时间，你更喜欢：', options: [
    { label: '约同学一起出去玩或运动', orientation: 'E' },
    { label: '独自看书、追剧或做自己的事', orientation: 'I' }
  ]},
  { id: 'M03', dimension: 'EI', question: '遇到难题时你倾向于：', options: [
    { label: '马上找同学或老师讨论', orientation: 'E' },
    { label: '先自己思考清楚再请教别人', orientation: 'I' }
  ]},
  { id: 'M04', dimension: 'EI', question: '在新班级或新环境中，你通常：', options: [
    { label: '主动结交新朋友，快速融入', orientation: 'E' },
    { label: '先观察适应，等别人主动接近', orientation: 'I' }
  ]},
  { id: 'M05', dimension: 'EI', question: '以下哪句更符合你：', options: [
    { label: '与人交往让我获得能量和动力', orientation: 'E' },
    { label: '独处时光让我恢复精力和专注', orientation: 'I' }
  ]},
  { id: 'M06', dimension: 'EI', question: '课堂讨论或小组发言时，你：', options: [
    { label: '积极举手表达观点，乐于发言', orientation: 'E' },
    { label: '倾向于听完他人意见，再谨慎表达', orientation: 'I' }
  ]},
  { id: 'M07', dimension: 'EI', question: '周末你更可能选择：', options: [
    { label: '参加集体活动或约朋友聚会', orientation: 'E' },
    { label: '安静在家做自己喜欢的事情', orientation: 'I' }
  ]},

  // ===== SN 维度（感觉/直觉）- 7题 =====
  { id: 'M08', dimension: 'SN', question: '你更关注：', options: [
    { label: '眼前具体的事实、细节和经验', orientation: 'S' },
    { label: '事物背后的模式、可能性和整体', orientation: 'N' }
  ]},
  { id: 'M09', dimension: 'SN', question: '学习新知识时你更喜欢：', options: [
    { label: '按步骤循序渐进，打好基础再往前', orientation: 'S' },
    { label: '先了解整体框架和大概念，再补充细节', orientation: 'N' }
  ]},
  { id: 'M10', dimension: 'SN', question: '你更信任：', options: [
    { label: '亲身经验和已验证的成熟方法', orientation: 'S' },
    { label: '直觉、灵感和新的可能性', orientation: 'N' }
  ]},
  { id: 'M11', dimension: 'SN', question: '写作文或做展示时，你：', options: [
    { label: '用具体事例和数据支撑观点', orientation: 'S' },
    { label: '喜欢提出新颖的概念和独特视角', orientation: 'N' }
  ]},
  { id: 'M12', dimension: 'SN', question: '你更欣赏哪种人：', options: [
    { label: '脚踏实地、务实可靠的人', orientation: 'S' },
    { label: '富有想象力、远见卓识的人', orientation: 'N' }
  ]},
  { id: 'M13', dimension: 'SN', question: '阅读一篇文章时你：', options: [
    { label: '仔细阅读每个段落，关注具体信息', orientation: 'S' },
    { label: '快速浏览抓取核心观点和整体脉络', orientation: 'N' }
  ]},
  { id: 'M14', dimension: 'SN', question: '做一件事时，你：', options: [
    { label: '喜欢用已知有效的方法去做', orientation: 'S' },
    { label: '喜欢尝试新的不同方法', orientation: 'N' }
  ]},

  // ===== TF 维度（思考/情感）- 7题 =====
  { id: 'M15', dimension: 'TF', question: '做重要决定时你更依赖：', options: [
    { label: '理性分析和客观逻辑推理', orientation: 'T' },
    { label: '个人价值观和对他人的影响', orientation: 'F' }
  ]},
  { id: 'M16', dimension: 'TF', question: '同学向你倾诉烦恼时，你首先：', options: [
    { label: '分析问题帮他找到解决思路', orientation: 'T' },
    { label: '共情安慰给他情感上的支持', orientation: 'F' }
  ]},
  { id: 'M17', dimension: 'TF', question: '你认为更重要的品质是：', options: [
    { label: '公平公正，原则分明', orientation: 'T' },
    { label: '包容理解，和谐共处', orientation: 'F' }
  ]},
  { id: 'M18', dimension: 'TF', question: '在学习中你更擅长：', options: [
    { label: '客观题、计算题和逻辑推理', orientation: 'T' },
    { label: '作文、论述题和主观表达', orientation: 'F' }
  ]},
  { id: 'M19', dimension: 'TF', question: '评价同学的作业或作品时，你：', options: [
    { label: '直接指出问题和可改进之处', orientation: 'T' },
    { label: '先肯定优点再委婉表达建议', orientation: 'F' }
  ]},
  { id: 'M20', dimension: 'TF', question: '你更看重自己：', options: [
    { label: '思维清晰、逻辑严谨', orientation: 'T' },
    { label: '善解人意、温暖体贴', orientation: 'F' }
  ]},
  { id: 'M21', dimension: 'TF', question: '小组合作完成项目时，你更关注：', options: [
    { label: '任务是否高效、高质量完成', orientation: 'T' },
    { label: '组员之间是否相处融洽愉快', orientation: 'F' }
  ]},

  // ===== JP 维度（判断/感知）- 7题 =====
  { id: 'M22', dimension: 'JP', question: '你更喜欢：', options: [
    { label: '有计划、有安排、有条理的生活', orientation: 'J' },
    { label: '随遇而安、灵活自由的节奏', orientation: 'P' }
  ]},
  { id: 'M23', dimension: 'JP', question: '面对作业或任务的截止日期，你：', options: [
    { label: '提前规划分阶段逐步完成', orientation: 'J' },
    { label: '临近截止时集中冲刺完成', orientation: 'P' }
  ]},
  { id: 'M24', dimension: 'JP', question: '你的书桌或房间通常是：', options: [
    { label: '整洁有序，东西归位摆放', orientation: 'J' },
    { label: '略显凌乱，但自己找得到东西', orientation: 'P' }
  ]},
  { id: 'M25', dimension: 'JP', question: '旅行或出游时你更倾向于：', options: [
    { label: '提前做好详细攻略和行程安排', orientation: 'J' },
    { label: '到了再说，随心情自由探索', orientation: 'P' }
  ]},
  { id: 'M26', dimension: 'JP', question: '面对多项任务时你：', options: [
    { label: '规划好顺序，一件一件按计划完成', orientation: 'J' },
    { label: '多任务并行，灵活切换', orientation: 'P' }
  ]},
  { id: 'M27', dimension: 'JP', question: '对于选择和决定，你认为：', options: [
    { label: '做完决定心里踏实，不喜欢悬而未决', orientation: 'J' },
    { label: '保持开放选项更舒服，随时可以调整', orientation: 'P' }
  ]},
  { id: 'M28', dimension: 'JP', question: '你更倾向于：', options: [
    { label: '遵守既定规则和计划', orientation: 'J' },
    { label: '根据实际情况灵活应变', orientation: 'P' }
  ]},
];

{ MBTI_QUESTIONS };


// === mbti-profiles.js
// MBTI 16种人格类型详细描述
var MBTI_PROFILES = {
  'ISTJ': {
    typeName: '检查者',
    category: '守护者',
    summary: '严谨务实、认真负责、遵守承诺',
    strengths: ['责任心强', '做事有条理', '专注细节', '值得信赖', '遵守纪律'],
    weaknesses: ['可能过于严格', '不太适应变化', '有时固执', '不善表达情感'],
    learningStyle: '喜欢有结构、循序渐进的学习方式，需要明确的目标和标准',
    suitableEnv: '稳定有序、规则清晰的学习和工作环境',
    famousExamples: '适合：会计、审计、公务员、工程师、医生等需要严谨和责任的职业',
  },
  'ISFJ': {
    typeName: '守护者',
    category: '守护者',
    summary: '温暖细心、默默付出、忠诚守护',
    strengths: ['细心体贴', '忠诚可靠', '有耐心', '注重实际', '默默奉献'],
    weaknesses: ['过于谦让', '不善拒绝', '回避冲突', '容易过度劳累'],
    learningStyle: '通过反复练习和实际应用学习，喜欢有指导和反馈',
    suitableEnv: '和谐合作、有归属感的环境',
    famousExamples: '适合：护理、教育、社工、行政、客户服务等需要关怀与耐心的职业',
  },
  'INFJ': {
    typeName: '提倡者',
    category: '理想主义者',
    summary: '有洞察力、理想主义、温和坚定',
    strengths: ['深度洞察', '有远见', '富有同理心', '坚定信念', '创造力强'],
    weaknesses: ['过于追求完美', '容易忽视现实', '不善表达自己', '对批评敏感'],
    learningStyle: '通过深入理解和赋予意义来学习，喜欢独处思考',
    suitableEnv: '有使命感、能发挥影响力的环境',
    famousExamples: '适合：心理咨询、教育研究、写作创作、非营利组织、人力资源等',
  },
  'INTJ': {
    typeName: '建筑师',
    category: '理性主义者',
    summary: '战略思维、独立自主、追求卓越',
    strengths: ['战略规划', '独立自信', '逻辑清晰', '高标准', '有远见'],
    weaknesses: ['可能显得傲慢', '不善社交', '过于完美主义', '情感表达少'],
    learningStyle: '通过自主研究和系统性思考学习，喜欢独立项目',
    suitableEnv: '有挑战性、自主权高、能发挥策略思维的环境',
    famousExamples: '适合：科研、软件工程、金融分析、战略咨询、管理等',
  },
  'ISTP': {
    typeName: '鉴赏家',
    category: '探索者',
    summary: '冷静务实、动手能力强、善于分析',
    strengths: ['动手能力强', '冷静沉着', '善于分析', '实用主义', '适应力好'],
    weaknesses: ['不善沟通', '可能显得冷漠', '缺乏长远规划', '容易无聊'],
    learningStyle: '通过动手实践和经验积累学习，喜欢解决具体问题',
    suitableEnv: '灵活、实用、有实操机会的环境',
    famousExamples: '适合：工程技术、机械维修、数据分析、户外工作、警察等',
  },
  'ISFP': {
    typeName: '探险家',
    category: '探索者',
    summary: '温和敏感、艺术天赋、活在当下',
    strengths: ['艺术感强', '待人友善', '灵活适应', '审美敏锐', '温暖真诚'],
    weaknesses: ['不善表达', '回避冲突', '缺乏长期规划', '过于敏感'],
    learningStyle: '通过亲身体验和感官感受学习，喜欢自由探索',
    suitableEnv: '宽松自由、尊重个性的环境',
    famousExamples: '适合：艺术设计、摄影、音乐、护理、宠物行业等',
  },
  'INFP': {
    typeName: '调停者',
    category: '理想主义者',
    summary: '理想主义、富有同情心、追求意义',
    strengths: ['富有同理心', '创造力强', '忠于价值观', '善于倾听', '理想主义'],
    weaknesses: ['过于理想化', '不善务实', '容易受伤', '决策犹豫'],
    learningStyle: '通过与个人价值观连接的意义学习，喜欢创造性表达',
    suitableEnv: '有使命感、尊重个性、能创造性表达的环境',
    famousExamples: '适合：写作、艺术创作、心理咨询、教育、非营利组织等',
  },
  'INTP': {
    typeName: '逻辑学家',
    category: '理性主义者',
    summary: '善于分析、独立思考、追求真理',
    strengths: ['逻辑分析', '创造力强', '独立思考', '好奇心强', '善于解决问题'],
    weaknesses: ['社交困难', '可能过于抽象', '执行力弱', '忽略情感'],
    learningStyle: '通过概念理解和理论探索学习，喜欢自主研究',
    suitableEnv: '自由探索、注重智力的环境',
    famousExamples: '适合：科研、编程、数学、哲学、系统工程等',
  },
  'ESTP': {
    typeName: '企业家',
    category: '探索者',
    summary: '精力充沛、善于应变、务实高效',
    strengths: ['应变能力强', '务实果断', '善于社交', '精力充沛', '有说服力'],
    weaknesses: ['不够耐心', '可能冲动', '忽视规则', '长远规划弱'],
    learningStyle: '通过实战演练和竞争学习，喜欢即时反馈',
    suitableEnv: '充满活力、有挑战和竞争的环境',
    famousExamples: '适合：销售、市场营销、运动员、应急管理、创业等',
  },
  'ESFP': {
    typeName: '表演者',
    category: '探索者',
    summary: '热情开朗、乐于分享、享受生活',
    strengths: ['热情友好', '善于交际', '适应力强', '乐观向上', '乐于助人'],
    weaknesses: ['容易分心', '不善规划', '可能冲动', '回避严肃问题'],
    learningStyle: '通过互动和体验学习，喜欢轻松有趣的学习氛围',
    suitableEnv: '活跃、友好、有团队感的环境',
    famousExamples: '适合：表演艺术、导游、销售、幼教、活动策划等',
  },
  'ENFP': {
    typeName: '竞选者',
    category: '理想主义者',
    summary: '热情创意、善于激励、追求可能性',
    strengths: ['热情洋溢', '创造力强', '善于沟通', '富有感染力', '想象力丰富'],
    weaknesses: ['容易分心', '不够专注', '过度情感化', '执行力不足'],
    learningStyle: '通过探索新可能和与他人交流学习，喜欢多元化的学习方式',
    suitableEnv: '充满可能、鼓励创新、人际丰富的环境',
    famousExamples: '适合：教育、传媒、广告、心理咨询、创业、公关等',
  },
  'ENTP': {
    typeName: '辩论家',
    category: '理性主义者',
    summary: '思维敏捷、善于辩论、热衷创新',
    strengths: ['思维敏捷', '创新力强', '善于分析', '口才好', '适应变化'],
    weaknesses: ['不够专注', '可能好辩论', '执行力弱', '容易厌倦'],
    learningStyle: '通过辩论和探索概念边界学习，喜欢智力挑战',
    suitableEnv: '有智力刺激、鼓励创新的环境',
    famousExamples: '适合：律师、产品经理、咨询顾问、创业、科研等',
  },
  'ESTJ': {
    typeName: '总经理',
    category: '守护者',
    summary: '高效务实、组织力强、果断决策',
    strengths: ['组织力强', '果断高效', '负责可靠', '善于管理', '执行力强'],
    weaknesses: ['可能过于强势', '不够灵活', '忽视情感', '不善于倾听'],
    learningStyle: '通过结构化课程和目标导向学习，喜欢有成果可见',
    suitableEnv: '有明确结构、奖惩分明的环境',
    famousExamples: '适合：管理、军警、工程管理、财务、教育培训等',
  },
  'ESFJ': {
    typeName: '执政官',
    category: '守护者',
    summary: '热心周到、善于合作、关注他人',
    strengths: ['热心负责', '善于合作', '关注他人', '组织能力强', '忠诚可靠'],
    weaknesses: ['需要被认可', '过于在意评价', '不善拒绝', '回避冲突'],
    learningStyle: '通过合作和互动学习，喜欢和谐有序的学习环境',
    suitableEnv: '和谐友好、有明确期望的环境',
    famousExamples: '适合：教育、护理、客户服务、人力资源、社区工作等',
  },
  'ENFJ': {
    typeName: '主人公',
    category: '理想主义者',
    summary: '魅力领导、善于激励、关怀他人',
    strengths: ['领导魅力', '善解人意', '善于沟通', '富有远见', '有感染力'],
    weaknesses: ['过于理想化', '不善处理批评', '可能过度介入', '容易疲惫'],
    learningStyle: '通过与他人互动和赋予社会意义学习，喜欢引领和分享',
    suitableEnv: '有使命感、能帮助和影响他人的环境',
    famousExamples: '适合：教育领导、咨询培训、政治外交、公益事业、人力资源等',
  },
  'ENTJ': {
    typeName: '指挥官',
    category: '理性主义者',
    summary: '果断领导、战略远见、追求效率',
    strengths: ['领导力强', '战略思维', '果断高效', '自信坚定', '目标明确'],
    weaknesses: ['可能过于强势', '耐心不足', '忽视情感', '不善于妥协'],
    learningStyle: '通过挑战和大目标导向学习，喜欢能出成果的项目',
    suitableEnv: '有挑战、能发挥领导力和战略谋划的环境',
    famousExamples: '适合：企业高管、金融投资、管理咨询、创业、律师等',
  },
};

// 兼容：提供名称映射
var MBTI_TYPE_NAMES = {};
Object.entries(MBTI_PROFILES).forEach(([code, profile]) => {
  MBTI_TYPE_NAMES[code] = profile.typeName;
});

{ MBTI_PROFILES, MBTI_TYPE_NAMES };


// === careers.js
// 职业库数据（20+ 条）
var CAREERS = [
  {
    id: 'C001',
    name: '软件工程师',
    category: '技术/研发',
    hollandCodes: ['I', 'R', 'C'],
    mbtiPreferences: ['T'],
    relatedMajors: ['M001', 'M002', 'M005'],
    industryOutlook: {
      rating: 5,
      summary: '人工智能、大数据和数字化转型持续推动人才需求高速增长',
      avgSalary: '15-40万/年',
      growthRate: '15%',
    },
    description: '设计、开发、测试和维护软件系统，运用编程语言和技术框架解决实际问题。可在互联网公司、金融科技、智能制造等领域就业。',
    dailyWork: '编写代码、系统设计、调试程序、技术评审、版本迭代',
    tags: ['高薪', '技术驱动', '弹性工作', '成长快'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C002',
    name: '临床医生',
    category: '医疗健康',
    hollandCodes: ['I', 'S', 'R'],
    mbtiPreferences: ['T', 'J'],
    relatedMajors: ['M010', 'M011'],
    industryOutlook: {
      rating: 5,
      summary: '人口老龄化和健康意识提升带来稳定刚需，优质医生长期稀缺',
      avgSalary: '10-30万/年',
      growthRate: '8%',
    },
    description: '诊断和治疗疾病，承担救死扶伤的使命。可在各级医院、社区卫生中心、科研机构工作。',
    dailyWork: '门诊看诊、病例分析、治疗方案制定、手术操作、医学研究',
    tags: ['稳定', '社会尊重', '终身学习', '成就感强'],
    educationRequired: '硕士及以上',
  },
  {
    id: 'C003',
    name: '市场营销策划',
    category: '商业/营销',
    hollandCodes: ['E', 'A', 'S'],
    mbtiPreferences: ['E', 'N'],
    relatedMajors: ['M020', 'M021'],
    industryOutlook: {
      rating: 4,
      summary: '电商和新媒体崛起推动数字营销人才紧缺',
      avgSalary: '8-25万/年',
      growthRate: '12%',
    },
    description: '制定品牌推广策略，策划营销活动，分析消费者行为。可在快消品牌、互联网公司、广告公司等工作。',
    dailyWork: '市场调研、活动策划、内容创作、数据分析、品牌管理',
    tags: ['创意', '沟通', '发展空间大', '跨行业'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C004',
    name: '中学教师',
    category: '教育/培训',
    hollandCodes: ['S', 'A', 'E'],
    mbtiPreferences: ['F', 'J'],
    relatedMajors: ['M030', 'M031', 'M032'],
    industryOutlook: {
      rating: 4,
      summary: '教育改革和素质教育推动高质量教师需求持续增加',
      avgSalary: '8-15万/年',
      growthRate: '5%',
    },
    description: '传授学科知识，引导学生全面成长，参与教研活动和班级管理。可在公立学校、民办学校、培训机构工作。',
    dailyWork: '备课授课、批改作业、班级管理、教研讨论、家校沟通',
    tags: ['稳定', '有寒暑假', '社会价值', '职业尊严'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C005',
    name: '数据分析师',
    category: '技术/研发',
    hollandCodes: ['I', 'C', 'R'],
    mbtiPreferences: ['T'],
    relatedMajors: ['M001', 'M003', 'M004'],
    industryOutlook: {
      rating: 5,
      summary: '全行业数字化转型核心岗位，数据驱动决策成为企业标配',
      avgSalary: '12-35万/年',
      growthRate: '20%',
    },
    description: '通过数据挖掘、统计分析和可视化为企业决策提供支持。可在互联网、金融、零售、医疗等多行业就业。',
    dailyWork: '数据采集清洗、指标分析、报表制作、数据建模、业务建议',
    tags: ['高薪', '需求大', '跨行业', '逻辑思维'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C006',
    name: '建筑设计师',
    category: '设计/工程',
    hollandCodes: ['A', 'R', 'I'],
    mbtiPreferences: ['N', 'T'],
    relatedMajors: ['M040', 'M041'],
    industryOutlook: {
      rating: 3,
      summary: '城市化进程放缓但绿色建筑和城市更新带来新机遇',
      avgSalary: '10-25万/年',
      growthRate: '4%',
    },
    description: '设计建筑方案，平衡美学、功能和工程技术。可在建筑设计院、房地产公司、规划设计机构工作。',
    dailyWork: '方案设计、图纸绘制、模型制作、现场勘察、客户沟通',
    tags: ['创意', '成就感', '技术含量高', '项目制'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C007',
    name: '律师',
    category: '法律/公共事务',
    hollandCodes: ['E', 'I', 'S'],
    mbtiPreferences: ['T', 'J'],
    relatedMajors: ['M050'],
    industryOutlook: {
      rating: 4,
      summary: '法治建设和经济纠纷增加推动法律服务需求稳步增长',
      avgSalary: '10-40万/年',
      growthRate: '10%',
    },
    description: '为客户提供法律咨询和代理服务，维护合法权益。可在律所、企业法务部门、政府法制机构工作。',
    dailyWork: '案情分析、法律文书撰写、庭审辩论、客户咨询、法规研究',
    tags: ['高薪', '社会地位', '逻辑挑战', '竞争激烈'],
    educationRequired: '硕士及以上',
  },
  {
    id: 'C008',
    name: '金融分析师',
    category: '金融/投资',
    hollandCodes: ['C', 'I', 'E'],
    mbtiPreferences: ['T', 'J'],
    relatedMajors: ['M060', 'M061'],
    industryOutlook: {
      rating: 4,
      summary: '资本市场深化改革和财富管理需求带来人才升级需求',
      avgSalary: '15-50万/年',
      growthRate: '8%',
    },
    description: '分析金融市场数据，为投资决策提供研究报告。可在银行、证券公司、基金公司、保险机构工作。',
    dailyWork: '财务建模、行业研究、投资报告、风险分析、行情监控',
    tags: ['高薪', '高压', '精英化', '城市就业'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C009',
    name: '心理咨询师',
    category: '健康/服务',
    hollandCodes: ['S', 'A', 'I'],
    mbtiPreferences: ['F', 'N'],
    relatedMajors: ['M070'],
    industryOutlook: {
      rating: 5,
      summary: '青少年心理健康关注度飙升，心理咨询师成为新兴紧缺职业',
      avgSalary: '8-20万/年',
      growthRate: '18%',
    },
    description: '运用心理学理论和方法帮助来访者解决心理困扰。可在医院心理科、学校心理咨询中心、私人咨询机构工作。',
    dailyWork: '心理咨询面谈、心理评估、咨询方案制定、案例整理、专业学习',
    tags: ['助人', '自由职业可能', '成长型行业', '意义感强'],
    educationRequired: '硕士及以上',
  },
  {
    id: 'C010',
    name: '新媒体运营',
    category: '传媒/内容',
    hollandCodes: ['A', 'E', 'S'],
    mbtiPreferences: ['E', 'N'],
    relatedMajors: ['M080', 'M081', 'M021'],
    industryOutlook: {
      rating: 4,
      summary: '短视频、直播电商持续爆发式增长，内容运营人才需求巨大',
      avgSalary: '8-20万/年',
      growthRate: '15%',
    },
    description: '策划制作短视频/图文内容，运营社交媒体账号，提升品牌影响力。可在MCN机构、品牌方、媒体平台工作。',
    dailyWork: '内容策划、文案撰写、视频剪辑、数据分析、粉丝互动',
    tags: ['创意', '灵活', '入门快', '热度高'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C011',
    name: '电气工程师',
    category: '工程制造',
    hollandCodes: ['R', 'I', 'C'],
    mbtiPreferences: ['T'],
    relatedMajors: ['M090', 'M091'],
    industryOutlook: {
      rating: 4,
      summary: '新能源和智能制造推动电气工程人才持续需求',
      avgSalary: '12-28万/年',
      growthRate: '7%',
    },
    description: '设计、开发、测试和维护电气系统和设备。可在电力公司、新能源企业、制造业、轨道交通等领域工作。',
    dailyWork: '电路设计、设备调试、系统测试、项目施工、技术方案',
    tags: ['稳定', '技术硬核', '新能源风口', '动手'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C012',
    name: '会计/审计',
    category: '财务/金融',
    hollandCodes: ['C', 'I', 'E'],
    mbtiPreferences: ['T', 'J'],
    relatedMajors: ['M062', 'M063'],
    industryOutlook: {
      rating: 3,
      summary: '传统会计需求稳定但面临数字化冲击，高端财务人才仍紧缺',
      avgSalary: '7-20万/年',
      growthRate: '3%',
    },
    description: '负责企业财务核算、税务处理和审计工作。可在会计师事务所、企业财务部门、税务机构工作。',
    dailyWork: '记账报税、报表编制、财务分析、审计查账、成本管控',
    tags: ['稳定', '越老越吃香', '证书重要', '各行业通用'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C013',
    name: '人力资源管理',
    category: '管理/服务',
    hollandCodes: ['S', 'E', 'C'],
    mbtiPreferences: ['F', 'J'],
    relatedMajors: ['M100', 'M021'],
    industryOutlook: {
      rating: 4,
      summary: '企业重视人才管理，HR三支柱转型带来专业人才需求',
      avgSalary: '8-22万/年',
      growthRate: '6%',
    },
    description: '负责招聘、培训、绩效管理和员工关系。可在各类企业的HR部门或猎头公司工作。',
    dailyWork: '招聘面试、培训组织、绩效评估、薪酬设计、员工沟通',
    tags: ['沟通', '管理方向', '各行业通用', '发展路径清晰'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C014',
    name: '环境工程师',
    category: '工程/环保',
    hollandCodes: ['I', 'R', 'S'],
    mbtiPreferences: ['T', 'N'],
    relatedMajors: ['M110', 'M112'],
    industryOutlook: {
      rating: 5,
      summary: '碳中和目标和环保政策推动环境工程师成为未来热门职业',
      avgSalary: '10-25万/年',
      growthRate: '12%',
    },
    description: '运用工程和环境科学知识保护环境、治理污染。可在环保部门、环评机构、新能源公司工作。',
    dailyWork: '环境监测、污染治理方案、环评报告、项目设计、政策研究',
    tags: ['未来趋势', '政策支持', '社会价值', '技术含量'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C015',
    name: '产品经理',
    category: '互联网/科技',
    hollandCodes: ['E', 'A', 'I'],
    mbtiPreferences: ['N', 'T'],
    relatedMajors: ['M001', 'M020', 'M120'],
    industryOutlook: {
      rating: 5,
      summary: '互联网和AI产品持续迭代，优秀产品经理是公司核心资产',
      avgSalary: '15-45万/年',
      growthRate: '18%',
    },
    description: '定义产品方向、设计产品功能、协调开发资源、推动产品上线。是连接用户需求和技术实现的核心角色。',
    dailyWork: '需求调研、产品设计、项目推进、数据分析、竞品研究',
    tags: ['高薪', '影响力大', '综合能力', '成长快'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C016',
    name: '药剂师',
    category: '医疗健康',
    hollandCodes: ['I', 'C', 'R'],
    mbtiPreferences: ['T', 'J'],
    relatedMajors: ['M130'],
    industryOutlook: {
      rating: 4,
      summary: '医药分离改革和社区药房发展带来药剂师新机遇',
      avgSalary: '8-18万/年',
      growthRate: '6%',
    },
    description: '审核处方、调配药品、提供用药指导。可在医院药房、药店连锁、药企研发部门工作。',
    dailyWork: '处方审核、药品管理、用药咨询、药学监护、库存管理',
    tags: ['稳定', '专业性强', '医患接触', '就业面广'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C017',
    name: '新闻记者',
    category: '传媒/文化',
    hollandCodes: ['A', 'S', 'E'],
    mbtiPreferences: ['N', 'F'],
    relatedMajors: ['M080', 'M081'],
    industryOutlook: {
      rating: 2,
      summary: '传统媒体转型压力大，但深度报道和新媒体融合带来新空间',
      avgSalary: '6-15万/年',
      growthRate: '-5%',
    },
    description: '采访新闻事件、撰写报道、追踪社会热点。可在报社、电视台、新媒体平台、门户网站工作。',
    dailyWork: '选题策划、采访采写、稿件编辑、事实核查、选题研究',
    tags: ['写作', '好奇心', '社会影响', '不坐班'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C018',
    name: '机械工程师',
    category: '工程制造',
    hollandCodes: ['R', 'I', 'C'],
    mbtiPreferences: ['T'],
    relatedMajors: ['M140', 'M141'],
    industryOutlook: {
      rating: 3,
      summary: '制造业升级和智能制造转型带来新型机械工程人才需求',
      avgSalary: '10-22万/年',
      growthRate: '5%',
    },
    description: '设计、分析、制造和维护机械系统及设备。可在汽车、航空航天、机器人、家电等行业工作。',
    dailyWork: '机械设计、零件建模、仿真分析、样机测试、工艺编制',
    tags: ['动手', '传统工科', '就业稳定', '对口率高'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C019',
    name: '汉语言文学相关（编辑/文案）',
    category: '文化/教育',
    hollandCodes: ['A', 'S', 'C'],
    mbtiPreferences: ['F', 'N'],
    relatedMajors: ['M030', 'M080'],
    industryOutlook: {
      rating: 3,
      summary: '内容产业持续发展，优质文字工作者在出版/新媒体/教育领域均有需求',
      avgSalary: '7-18万/年',
      growthRate: '4%',
    },
    description: '从事编辑、文案、出版、文化传播等工作。可在出版社、媒体、广告公司、教育机构工作。',
    dailyWork: '文章编辑、文案创作、选题审核、内容策划、校对润色',
    tags: ['文字', '审美', '知识型', '文化氛围'],
    educationRequired: '本科及以上',
  },
  {
    id: 'C020',
    name: '生物工程师',
    category: '科研/医疗',
    hollandCodes: ['I', 'R', 'A'],
    mbtiPreferences: ['T', 'N'],
    relatedMajors: ['M150', 'M151'],
    industryOutlook: {
      rating: 5,
      summary: '生物医药、基因编辑蓬勃发展，被称为21世纪的黄金赛道',
      avgSalary: '12-35万/年',
      growthRate: '20%',
    },
    description: '运用生物技术进行药物研发、基因工程、生物材料等前沿工作。可在药企、生物技术公司、科研院所工作。',
    dailyWork: '实验设计、细胞培养、数据分析、药品研发、技术文献研读',
    tags: ['前沿', '高成长', '科研', '资本关注'],
    educationRequired: '硕士及以上',
  },
];

{ CAREERS };


// === universities.js
// 大学投档线数据库 v3.0 - 7省县域高中生源数据
// 山东、河北、河南、安徽、浙江、江西、贵州
// 数据来源：各省教育考试院2025年本科批投档线
var UNIVERSITIES = [
// ======== 211/双一流 ========
{id:'U101',name:'中国石油大学(华东)',tier:'211/双一流',tierLevel:1,location:'山东青岛',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:582,minRanking:25000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:578,minRanking:5000}]},
{id:'U102',name:'合肥工业大学(宣城)',tier:'211/双一流',tierLevel:1,location:'安徽宣城',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:568,minRanking:38000}]},
{id:'U103',name:'郑州大学',tier:'211/双一流',tierLevel:1,location:'河南郑州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:588,minRanking:22000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:582,minRanking:4000}]},
{id:'U104',name:'安徽大学',tier:'211/双一流',tierLevel:1,location:'安徽合肥',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:575,minRanking:28000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:568,minRanking:7000}]},
{id:'U105',name:'宁波大学',tier:'双一流',tierLevel:1,location:'浙江宁波',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:578,minRanking:30000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:575,minRanking:8000}]},
{id:'U106',name:'南昌大学',tier:'211/双一流',tierLevel:1,location:'江西南昌',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:568,minRanking:20000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:562,minRanking:5000}]},
{id:'U107',name:'贵州大学',tier:'211/双一流',tierLevel:1,location:'贵州贵阳',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:518,minRanking:35000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:538,minRanking:12000}]},
{id:'U108',name:'河南大学',tier:'双一流',tierLevel:1,location:'河南开封',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:568,minRanking:35000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:572,minRanking:6000}]},

// ======== 山东省 ========
{id:'U201',name:'山东师范大学',tier:'省属重点',tierLevel:2,location:'山东济南',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:565,minRanking:43000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:572,minRanking:6000}]},
{id:'U202',name:'青岛大学',tier:'省属重点',tierLevel:2,location:'山东青岛',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:558,minRanking:48000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:562,minRanking:7500}]},
{id:'U203',name:'山东科技大学',tier:'省属重点',tierLevel:2,location:'山东青岛',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:548,minRanking:58000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:540,minRanking:11000}]},
{id:'U204',name:'济南大学',tier:'省属重点',tierLevel:2,location:'山东济南',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:535,minRanking:68000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:545,minRanking:9500}]},
{id:'U205',name:'山东农业大学',tier:'省属重点',tierLevel:2,location:'山东泰安',type:'农林类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:510,minRanking:90000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:522,minRanking:15000}]},
{id:'U206',name:'青岛科技大学',tier:'省属重点',tierLevel:2,location:'山东青岛',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:543,minRanking:62000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:535,minRanking:12000}]},
{id:'U207',name:'曲阜师范大学',tier:'省属重点',tierLevel:2,location:'山东曲阜',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:520,minRanking:80000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:536,minRanking:11000}]},
{id:'U208',name:'山东理工大学',tier:'省属重点',tierLevel:2,location:'山东淄博',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:508,minRanking:93000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:515,minRanking:17000}]},
{id:'U209',name:'烟台大学',tier:'省属重点',tierLevel:2,location:'山东烟台',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:502,minRanking:100000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:518,minRanking:16000}]},
{id:'U210',name:'鲁东大学',tier:'省属重点',tierLevel:2,location:'山东烟台',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:495,minRanking:108000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:508,minRanking:20000}]},
{id:'U211',name:'聊城大学',tier:'省属重点',tierLevel:2,location:'山东聊城',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:488,minRanking:118000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:502,minRanking:22000}]},
{id:'U212',name:'山东建筑大学',tier:'省属重点',tierLevel:2,location:'山东济南',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:492,minRanking:112000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:498,minRanking:24000}]},
{id:'U213',name:'临沂大学',tier:'公办本科',tierLevel:3,location:'山东临沂',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:485,minRanking:122000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:498,minRanking:24000}]},
{id:'U214',name:'潍坊学院',tier:'公办本科',tierLevel:3,location:'山东潍坊',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:478,minRanking:135000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:488,minRanking:28000}]},
{id:'U215',name:'山东交通学院',tier:'公办本科',tierLevel:3,location:'山东济南',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:482,minRanking:128000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:486,minRanking:29000}]},
{id:'U216',name:'德州学院',tier:'公办本科',tierLevel:3,location:'山东德州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:472,minRanking:145000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:480,minRanking:32000}]},
{id:'U217',name:'泰山学院',tier:'公办本科',tierLevel:3,location:'山东泰安',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'shandong',subjectGroup:'wuli',year:2025,minScore:468,minRanking:152000},{province:'shandong',subjectGroup:'lishi',year:2025,minScore:478,minRanking:33000}]},
// ======== 河北省 ========
{id:'U301',name:'河北师范大学',tier:'省属重点',tierLevel:2,location:'河北石家庄',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:548,minRanking:45000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:558,minRanking:8000}]},
{id:'U302',name:'河北医科大学',tier:'省属重点',tierLevel:2,location:'河北石家庄',type:'医药类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:562,minRanking:35000}]},
{id:'U303',name:'燕山大学',tier:'省属重点',tierLevel:2,location:'河北秦皇岛',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:557,minRanking:38000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:542,minRanking:10000}]},
{id:'U304',name:'河北大学',tier:'省属重点',tierLevel:2,location:'河北保定',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:536,minRanking:55000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:548,minRanking:9000}]},
{id:'U305',name:'石家庄铁道大学',tier:'省属重点',tierLevel:2,location:'河北石家庄',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:535,minRanking:56000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:520,minRanking:15000}]},
{id:'U306',name:'河北科技大学',tier:'省属重点',tierLevel:2,location:'河北石家庄',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:518,minRanking:70000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:528,minRanking:13000}]},
{id:'U307',name:'河北农业大学',tier:'省属重点',tierLevel:2,location:'河北保定',type:'农林类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:498,minRanking:85000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:515,minRanking:17000}]},
{id:'U308',name:'华北理工大学',tier:'省属重点',tierLevel:2,location:'河北唐山',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:512,minRanking:75000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:505,minRanking:20000}]},
{id:'U309',name:'河北地质大学',tier:'公办本科',tierLevel:3,location:'河北石家庄',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:505,minRanking:80000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:518,minRanking:16000}]},
{id:'U310',name:'河北工程大学',tier:'省属重点',tierLevel:2,location:'河北邯郸',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:500,minRanking:83000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:508,minRanking:19000}]},
{id:'U311',name:'河北科技师范学院',tier:'公办本科',tierLevel:3,location:'河北秦皇岛',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:482,minRanking:105000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:498,minRanking:23000}]},
{id:'U312',name:'唐山师范学院',tier:'公办本科',tierLevel:3,location:'河北唐山',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:475,minRanking:112000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:492,minRanking:25000}]},
{id:'U313',name:'廊坊师范学院',tier:'公办本科',tierLevel:3,location:'河北廊坊',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:470,minRanking:118000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:488,minRanking:27000}]},
{id:'U314',name:'保定学院',tier:'公办本科',tierLevel:3,location:'河北保定',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:462,minRanking:128000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:478,minRanking:32000}]},
{id:'U315',name:'河北北方学院',tier:'公办本科',tierLevel:3,location:'河北张家口',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'hebei',subjectGroup:'wuli',year:2025,minScore:456,minRanking:138000},{province:'hebei',subjectGroup:'lishi',year:2025,minScore:468,minRanking:37000}]},
// ======== 河南省 ========
{id:'U401',name:'河南师范大学',tier:'省属重点',tierLevel:2,location:'河南新乡',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:542,minRanking:60000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:550,minRanking:9000}]},
{id:'U402',name:'河南科技大学',tier:'省属重点',tierLevel:2,location:'河南洛阳',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:538,minRanking:65000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:528,minRanking:13000}]},
{id:'U403',name:'河南理工大学',tier:'省属重点',tierLevel:2,location:'河南焦作',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:530,minRanking:72000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:518,minRanking:16000}]},
{id:'U404',name:'河南农业大学',tier:'省属重点',tierLevel:2,location:'河南郑州',type:'农林类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:522,minRanking:78000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:532,minRanking:12000}]},
{id:'U405',name:'河南工业大学',tier:'省属重点',tierLevel:2,location:'河南郑州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:525,minRanking:75000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:538,minRanking:11000}]},
{id:'U406',name:'郑州轻工业大学',tier:'省属重点',tierLevel:2,location:'河南郑州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:518,minRanking:82000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:528,minRanking:13000}]},
{id:'U407',name:'中原工学院',tier:'公办本科',tierLevel:3,location:'河南郑州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:505,minRanking:90000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:515,minRanking:17000}]},
{id:'U408',name:'信阳师范大学',tier:'省属重点',tierLevel:2,location:'河南信阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:498,minRanking:98000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:515,minRanking:17000}]},
{id:'U409',name:'河南财经政法大学',tier:'省属重点',tierLevel:2,location:'河南郑州',type:'财经类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:512,minRanking:85000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:535,minRanking:11000}]},
{id:'U410',name:'南阳师范学院',tier:'公办本科',tierLevel:3,location:'河南南阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:488,minRanking:108000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:502,minRanking:22000}]},
{id:'U411',name:'洛阳师范学院',tier:'公办本科',tierLevel:3,location:'河南洛阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:485,minRanking:112000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:500,minRanking:23000}]},
{id:'U412',name:'安阳师范学院',tier:'公办本科',tierLevel:3,location:'河南安阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:478,minRanking:120000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:495,minRanking:25000}]},
{id:'U413',name:'河南城建学院',tier:'公办本科',tierLevel:3,location:'河南平顶山',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:472,minRanking:128000}]},
{id:'U414',name:'许昌学院',tier:'公办本科',tierLevel:3,location:'河南许昌',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'henan',subjectGroup:'wuli',year:2025,minScore:468,minRanking:135000},{province:'henan',subjectGroup:'lishi',year:2025,minScore:485,minRanking:28000}]},
// ======== 安徽省 ========
{id:'U501',name:'安徽师范大学',tier:'省属重点',tierLevel:2,location:'安徽芜湖',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:538,minRanking:55000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:548,minRanking:9000}]},
{id:'U502',name:'安徽医科大学',tier:'省属重点',tierLevel:2,location:'安徽合肥',type:'医药类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:555,minRanking:45000}]},
{id:'U503',name:'安徽理工大学',tier:'省属重点',tierLevel:2,location:'安徽淮南',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:522,minRanking:70000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:505,minRanking:20000}]},
{id:'U504',name:'安徽农业大学',tier:'省属重点',tierLevel:2,location:'安徽合肥',type:'农林类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:515,minRanking:78000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:528,minRanking:13000}]},
{id:'U505',name:'安徽工业大学',tier:'省属重点',tierLevel:2,location:'安徽马鞍山',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:520,minRanking:72000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:512,minRanking:18000}]},
{id:'U506',name:'安徽财经大学',tier:'省属重点',tierLevel:2,location:'安徽蚌埠',type:'财经类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:508,minRanking:88000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:532,minRanking:12000}]},
{id:'U507',name:'安徽建筑大学',tier:'省属重点',tierLevel:2,location:'安徽合肥',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:502,minRanking:92000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:508,minRanking:20000}]},
{id:'U508',name:'安徽工程大学',tier:'省属重点',tierLevel:2,location:'安徽芜湖',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:505,minRanking:90000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:515,minRanking:17000}]},
{id:'U509',name:'淮北师范大学',tier:'省属重点',tierLevel:2,location:'安徽淮北',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:488,minRanking:108000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:508,minRanking:20000}]},
{id:'U510',name:'安庆师范大学',tier:'省属重点',tierLevel:2,location:'安徽安庆',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:482,minRanking:115000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:498,minRanking:23000}]},
{id:'U511',name:'阜阳师范大学',tier:'省属重点',tierLevel:2,location:'安徽阜阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:478,minRanking:120000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:492,minRanking:25000}]},
{id:'U512',name:'合肥大学',tier:'公办本科',tierLevel:3,location:'安徽合肥',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:495,minRanking:102000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:508,minRanking:20000}]},
{id:'U513',name:'皖西学院',tier:'公办本科',tierLevel:3,location:'安徽六安',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:468,minRanking:135000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:480,minRanking:30000}]},
{id:'U514',name:'滁州学院',tier:'公办本科',tierLevel:3,location:'安徽滁州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:462,minRanking:142000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:475,minRanking:32000}]},
{id:'U515',name:'宿州学院',tier:'公办本科',tierLevel:3,location:'安徽宿州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'anhui',subjectGroup:'wuli',year:2025,minScore:458,minRanking:148000},{province:'anhui',subjectGroup:'lishi',year:2025,minScore:470,minRanking:34000}]},
// ======== 浙江省 ========
{id:'U601',name:'浙江工业大学',tier:'省属重点',tierLevel:2,location:'浙江杭州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:585,minRanking:25000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:578,minRanking:7000}]},
{id:'U602',name:'浙江师范大学',tier:'省属重点',tierLevel:2,location:'浙江金华',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:575,minRanking:30000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:582,minRanking:6000}]},
{id:'U603',name:'杭州电子科技大学',tier:'省属重点',tierLevel:2,location:'浙江杭州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:582,minRanking:28000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:568,minRanking:8000}]},
{id:'U604',name:'浙江工商大学',tier:'省属重点',tierLevel:2,location:'浙江杭州',type:'财经类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:568,minRanking:35000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:575,minRanking:8000}]},
{id:'U605',name:'浙江理工大学',tier:'省属重点',tierLevel:2,location:'浙江杭州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:572,minRanking:32000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:565,minRanking:9000}]},
{id:'U606',name:'温州医科大学',tier:'省属重点',tierLevel:2,location:'浙江温州',type:'医药类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:588,minRanking:22000}]},
{id:'U607',name:'浙江财经大学',tier:'省属重点',tierLevel:2,location:'浙江杭州',type:'财经类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:565,minRanking:38000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:572,minRanking:8000}]},
{id:'U608',name:'中国计量大学',tier:'省属重点',tierLevel:2,location:'浙江杭州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:562,minRanking:40000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:558,minRanking:10000}]},
{id:'U609',name:'浙江海洋大学',tier:'省属重点',tierLevel:2,location:'浙江舟山',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:555,minRanking:45000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:548,minRanking:12000}]},
{id:'U610',name:'温州大学',tier:'省属重点',tierLevel:2,location:'浙江温州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:548,minRanking:50000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:555,minRanking:11000}]},
{id:'U611',name:'嘉兴大学',tier:'公办本科',tierLevel:3,location:'浙江嘉兴',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:542,minRanking:55000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:538,minRanking:15000}]},
{id:'U612',name:'绍兴文理学院',tier:'公办本科',tierLevel:3,location:'浙江绍兴',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:528,minRanking:65000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:532,minRanking:17000}]},
{id:'U613',name:'湖州师范学院',tier:'公办本科',tierLevel:3,location:'浙江湖州',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:515,minRanking:78000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:522,minRanking:20000}]},
{id:'U614',name:'台州学院',tier:'公办本科',tierLevel:3,location:'浙江台州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:508,minRanking:85000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:518,minRanking:22000}]},
{id:'U615',name:'浙江万里学院',tier:'公办本科',tierLevel:3,location:'浙江宁波',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:495,minRanking:100000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:502,minRanking:25000}]},
{id:'U616',name:'衢州学院',tier:'公办本科',tierLevel:3,location:'浙江衢州',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'zhejiang',subjectGroup:'wuli',year:2025,minScore:488,minRanking:108000},{province:'zhejiang',subjectGroup:'lishi',year:2025,minScore:492,minRanking:28000}]},
// ======== 江西省 ========
{id:'U701',name:'江西师范大学',tier:'省属重点',tierLevel:2,location:'江西南昌',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:538,minRanking:42000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:545,minRanking:8000}]},
{id:'U702',name:'江西财经大学',tier:'省属重点',tierLevel:2,location:'江西南昌',type:'财经类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:542,minRanking:40000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:548,minRanking:7500}]},
{id:'U703',name:'江西理工大学',tier:'省属重点',tierLevel:2,location:'江西赣州',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:525,minRanking:55000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:508,minRanking:18000}]},
{id:'U704',name:'东华理工大学',tier:'省属重点',tierLevel:2,location:'江西南昌',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:518,minRanking:62000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:510,minRanking:18000}]},
{id:'U705',name:'江西农业大学',tier:'省属重点',tierLevel:2,location:'江西南昌',type:'农林类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:515,minRanking:65000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:522,minRanking:15000}]},
{id:'U706',name:'南昌航空大学',tier:'省属重点',tierLevel:2,location:'江西南昌',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:530,minRanking:50000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:515,minRanking:16000}]},
{id:'U707',name:'井冈山大学',tier:'省属重点',tierLevel:2,location:'江西吉安',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:505,minRanking:72000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:518,minRanking:16000}]},
{id:'U708',name:'赣南师范大学',tier:'省属重点',tierLevel:2,location:'江西赣州',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:498,minRanking:80000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:515,minRanking:16000}]},
{id:'U709',name:'江西科技师范大学',tier:'省属重点',tierLevel:2,location:'江西南昌',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:492,minRanking:85000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:505,minRanking:20000}]},
{id:'U710',name:'景德镇陶瓷大学',tier:'省属重点',tierLevel:2,location:'江西景德镇',type:'艺术类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:485,minRanking:95000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:492,minRanking:24000}]},
{id:'U711',name:'九江学院',tier:'公办本科',tierLevel:3,location:'江西九江',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:478,minRanking:102000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:488,minRanking:26000}]},
{id:'U712',name:'宜春学院',tier:'公办本科',tierLevel:3,location:'江西宜春',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:470,minRanking:110000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:482,minRanking:28000}]},
{id:'U713',name:'上饶师范学院',tier:'公办本科',tierLevel:3,location:'江西上饶',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:465,minRanking:115000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:478,minRanking:30000}]},
{id:'U714',name:'南昌工程学院',tier:'公办本科',tierLevel:3,location:'江西南昌',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:472,minRanking:108000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:468,minRanking:32000}]},
{id:'U715',name:'新余学院',tier:'公办本科',tierLevel:3,location:'江西新余',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'jiangxi',subjectGroup:'wuli',year:2025,minScore:458,minRanking:125000},{province:'jiangxi',subjectGroup:'lishi',year:2025,minScore:472,minRanking:32000}]},
// ======== 贵州省 ========
{id:'U801',name:'贵州师范大学',tier:'省属重点',tierLevel:2,location:'贵州贵阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:478,minRanking:70000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:490,minRanking:20000}]},
{id:'U802',name:'贵州医科大学',tier:'省属重点',tierLevel:2,location:'贵州贵阳',type:'医药类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:495,minRanking:58000}]},
{id:'U803',name:'贵州财经大学',tier:'省属重点',tierLevel:2,location:'贵州贵阳',type:'财经类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:462,minRanking:85000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:482,minRanking:24000}]},
{id:'U804',name:'贵州民族大学',tier:'省属重点',tierLevel:2,location:'贵州贵阳',type:'民族类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:455,minRanking:92000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:478,minRanking:26000}]},
{id:'U805',name:'贵州理工学院',tier:'省属重点',tierLevel:2,location:'贵州贵阳',type:'理工类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:468,minRanking:78000}]},
{id:'U806',name:'贵阳学院',tier:'公办本科',tierLevel:3,location:'贵州贵阳',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:452,minRanking:95000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:468,minRanking:30000}]},
{id:'U807',name:'遵义师范学院',tier:'公办本科',tierLevel:3,location:'贵州遵义',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:458,minRanking:90000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:475,minRanking:28000}]},
{id:'U808',name:'黔南民族师范学院',tier:'公办本科',tierLevel:3,location:'贵州都匀',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:445,minRanking:102000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:460,minRanking:32000}]},
{id:'U809',name:'凯里学院',tier:'公办本科',tierLevel:3,location:'贵州凯里',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:442,minRanking:105000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:455,minRanking:34000}]},
{id:'U810',name:'安顺学院',tier:'公办本科',tierLevel:3,location:'贵州安顺',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:438,minRanking:110000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:450,minRanking:36000}]},
{id:'U811',name:'铜仁学院',tier:'公办本科',tierLevel:3,location:'贵州铜仁',type:'综合类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:435,minRanking:115000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:448,minRanking:37000}]},
{id:'U812',name:'贵州师范学院',tier:'公办本科',tierLevel:3,location:'贵州贵阳',type:'师范类', majors:[],
 overallAdmissionScores:[{province:'guizhou',subjectGroup:'wuli',year:2025,minScore:465,minRanking:82000},{province:'guizhou',subjectGroup:'lishi',year:2025,minScore:478,minRanking:26000}]},
];
{ UNIVERSITIES };


// === universities-scores-ext.js
// 跨省数据扩展（v3.0精简版，仅用于跨省查询兜底）
var EXTRA_SCORES = {};
function getExtraScores(uid) { return EXTRA_SCORES[uid] || null; }
{ EXTRA_SCORES, getExtraScores };


// === regions.js
var REGIONS = [
  {value:'shandong',label:'山东',cities:[{value:'sd_jinan',label:'济南'},{value:'sd_qingdao',label:'青岛'},{value:'sd_yanai',label:'烟台'},{value:'sd_weifang',label:'潍坊'},{value:'sd_linyi',label:'临沂'},{value:'sd_jining',label:'济宁'}]},
  {value:'hebei',label:'河北',cities:[{value:'hb_shijiazhuang',label:'石家庄'},{value:'hb_tangshan',label:'唐山'},{value:'hb_baoding',label:'保定'},{value:'hb_handan',label:'邯郸'}]},
  {value:'henan',label:'河南',cities:[{value:'hn_zhengzhou',label:'郑州'},{value:'hn_luoyang',label:'洛阳'},{value:'hn_kaifeng',label:'开封'}]},
  {value:'anhui',label:'安徽',cities:[{value:'ah_hefei',label:'合肥'},{value:'ah_wuhu',label:'芜湖'}]},
  {value:'zhejiang',label:'浙江',cities:[{value:'zj_hangzhou',label:'杭州'},{value:'zj_ningbo',label:'宁波'}]},
  {value:'jiangxi',label:'江西',cities:[{value:'jx_nanchang',label:'南昌'},{value:'jx_ganzhou',label:'赣州'}]},
  {value:'guizhou',label:'贵州',cities:[{value:'gz_guiyang',label:'贵阳'},{value:'gz_zunyi',label:'遵义'}]},
  {value:'beijing',label:'北京',cities:[{value:'bj_hd',label:'海淀区'}]},
  {value:'shanghai',label:'上海',cities:[{value:'sh_pd',label:'浦东新区'}]},
  {value:'tianjin',label:'天津',cities:[{value:'tj_nk',label:'南开区'}]},
  {value:'chongqing',label:'重庆',cities:[{value:'cq_yz',label:'渝中区'}]},
  {value:'jiangsu',label:'江苏',cities:[{value:'js_nanjing',label:'南京'}]},
  {value:'hubei',label:'湖北',cities:[{value:'hb_wuhan',label:'武汉'}]},
  {value:'hunan',label:'湖南',cities:[{value:'hn_changsha',label:'长沙'}]},
  {value:'guangdong',label:'广东',cities:[{value:'gd_guangzhou',label:'广州'}]},
  {value:'sichuan',label:'四川',cities:[{value:'sc_chengdu',label:'成都'}]},
  {value:'fujian',label:'福建',cities:[{value:'fj_fuzhou',label:'福州'}]},
  {value:'liaoning',label:'辽宁',cities:[{value:'ln_shenyang',label:'沈阳'}]},
];
var PROVINCE_MAP = {};
REGIONS.forEach(r => PROVINCE_MAP[r.value] = r.label);
function getCitiesByProvince(pv) { var p = REGIONS.find(r => r.value === pv); return p ? p.cities : []; }
{ REGIONS, PROVINCE_MAP, getCitiesByProvince };


// === subject-combinations.js
// 新高考选科组合数据库
// 基于霍兰德类型 + MBTI 推荐选科组合

var SUBJECT_COMBINATIONS = [
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
var INDIVIDUAL_SUBJECTS = {
  '物理': { icon: '⚛️', desc: '理工科敲门砖，选择面最广', requiredFor: ['计算机', '机械', '电气', '土木', '航空航天等90%+工科专业'] },
  '化学': { icon: '🧪', desc: '医学和化工类必选', requiredFor: ['临床医学', '药学', '化学工程', '材料科学'] },
  '生物': { icon: '🧬', desc: '生命科学类专业基础', requiredFor: ['生物工程', '医学', '农林', '心理学'] },
  '历史': { icon: '📜', desc: '文科和社科专业核心', requiredFor: ['法学', '新闻', '教育学', '历史学', '汉语言文学'] },
  '地理': { icon: '🌍', desc: '文理交叉学科', requiredFor: ['地理科学', '城乡规划', '环境科学', '测绘'] },
  '政治': { icon: '⚖️', desc: '法学和军警院校必备', requiredFor: ['法学', '政治学', '公安', '军事院校'] },
};

// 根据霍兰德+MBTI匹配选科
function recommendSubjects(hollandResult, mbtiResult) {
  var { hollandCode } = hollandResult;
  var { typeCode } = mbtiResult;

  var scored = SUBJECT_COMBINATIONS.map((combo) => {
    var score = 0;

    // 霍兰德匹配
    combo.hollandMatch.forEach((code, idx) => {
      var pos = hollandCode.indexOf(code);
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

{ SUBJECT_COMBINATIONS, INDIVIDUAL_SUBJECTS, recommendSubjects };


// === major-career-map.js
// 专业-职业映射表 v2.0 - 含精确选科要求
var MAJOR_CAREER_MAP = {
  M001: {
    majorName: '计算机科学与技术', degreeType: '工学',
    careerIds: ['C001', 'C005', 'C015'],
    description: '研究计算机系统与软件的理论、设计与应用',
    coreCurriculum: ['数据结构', '操作系统', '计算机网络', '算法设计'],
    // 选科要求（精确）
    subjectRequirements: {
      required: ['物理'],              // 必须选的科目
      optional: [],                    // 可选但不强制
      recommended: ['化学'],           // 强烈推荐但非强制
      warnings: [],                    // 避坑提示
      expandOptions: '物理必选，剩余两科可自由组合（化学/生物/地理/政治均可）',
      bindingRule: '物理是唯一必选科目，不限选科组合可覆盖95%+院校的计算机专业',
    },
  },
  M002: {
    majorName: '软件工程', degreeType: '工学',
    careerIds: ['C001', 'C005', 'C015'],
    description: '系统学习软件开发的工程化方法',
    coreCurriculum: ['软件设计', '软件测试', '项目管理', '数据库'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: ['部分院校软件工程要求必选物理+化学，报考前需确认具体院校'],
      expandOptions: '物理必选，剩余两科自由组合',
      bindingRule: '物+X+X 即可报考绝大部分开设软件工程的院校',
    },
  },
  M003: {
    majorName: '数据科学与大数据技术', degreeType: '工学',
    careerIds: ['C005', 'C001'],
    description: '研究大规模数据的采集、存储、分析和应用',
    coreCurriculum: ['数据挖掘', '机器学习', '分布式计算', '统计学'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学', '生物'],
      warnings: [],
      expandOptions: '物理必选，建议搭配化学或生物',
      bindingRule: '物+X+X',
    },
  },
  M004: {
    majorName: '统计学', degreeType: '理学',
    careerIds: ['C005', 'C008'],
    description: '研究数据的收集、分析和解释方法',
    coreCurriculum: ['概率论', '数理统计', '回归分析', '抽样调查'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: ['统计学属于理学门类，部分院校要求物化双选'],
      expandOptions: '物理必选，部分院校接受历史组考生（需额外考数学）',
      bindingRule: '物+X+X 或 历+数理较好的考生也可考虑',
    },
  },
  M005: {
    majorName: '人工智能', degreeType: '工学',
    careerIds: ['C001', 'C005'],
    description: '研究智能系统的理论、算法和应用',
    coreCurriculum: ['机器学习', '深度学习', '自然语言处理', '计算机视觉'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学', '生物'],
      warnings: ['顶尖AI专业多要求物化双选'],
      expandOptions: '物理必选，顶尖院校建议搭配化学',
      bindingRule: '物+X+X，顶尖院校建议物+化+X',
    },
  },

  M010: {
    majorName: '临床医学', degreeType: '医学',
    careerIds: ['C002'],
    description: '培养具备诊断、治疗和临床科研能力的医学人才',
    coreCurriculum: ['内科学', '外科学', '妇产科学', '儿科学'],
    subjectRequirements: {
      required: ['物理', '化学'],
      optional: [],
      recommended: ['生物'],
      warnings: [
        '⚠️ 不选化学无法报考任何医学院的临床医学专业！',
        '⚠️ 大部分医学院要求物化双选',
        '⚠️ 少数医学院要求物化生三选（如协和、北大医学部）',
      ],
      expandOptions: '物化必选，第三科建议选生物（约30%院校要求生物），其余院校第三科任意',
      bindingRule: '物+化【必选】+ 生（推荐，部分院校强制）',
    },
  },
  M011: {
    majorName: '口腔医学', degreeType: '医学',
    careerIds: ['C002'],
    description: '研究口腔疾病的预防、诊断和治疗',
    coreCurriculum: ['牙体牙髓病学', '口腔颌面外科学', '口腔修复学'],
    subjectRequirements: {
      required: ['物理', '化学'],
      optional: [],
      recommended: ['生物'],
      warnings: ['不选化学无法报考口腔医学！', '部分院校要求物化生三选'],
      expandOptions: '物化必选，第三科可选生物/地理/政治等',
      bindingRule: '物+化【必选】+ 任意一科',
    },
  },

  M020: {
    majorName: '工商管理', degreeType: '管理学',
    careerIds: ['C003', 'C013', 'C015'],
    description: '学习企业管理和运营的全面知识',
    coreCurriculum: ['管理学', '市场营销', '财务管理', '战略管理'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: ['不限选科，文理兼收'],
      expandOptions: '任何选科组合均可报考，是专业选择面最广的专业之一',
      bindingRule: '不限选科',
    },
  },
  M021: {
    majorName: '市场营销', degreeType: '管理学',
    careerIds: ['C003', 'C010', 'C013'],
    description: '研究消费者行为、品牌管理和营销策划',
    coreCurriculum: ['消费者行为学', '品牌管理', '广告学', '市场调研'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科，文理兼收',
      bindingRule: '不限选科',
    },
  },

  M030: {
    majorName: '汉语言文学', degreeType: '文学',
    careerIds: ['C004', 'C019'],
    description: '研究中国语言和文学的学问',
    coreCurriculum: ['古代文学', '现代文学', '语言学', '写作'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: ['历史'],
      warnings: ['部分师范类院校要求历史必选'],
      expandOptions: '多数院校不限选科，师范方向建议选历史',
      bindingRule: '不限选科（师范方向建议历+X+X）',
    },
  },
  M031: {
    majorName: '英语', degreeType: '文学',
    careerIds: ['C004'],
    description: '系统学习英语语言及英美文学文化',
    coreCurriculum: ['英语精读', '英语写作', '英美文学', '翻译'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科',
      bindingRule: '不限选科',
    },
  },
  M032: {
    majorName: '数学与应用数学', degreeType: '理学',
    careerIds: ['C004', 'C005'],
    description: '研究数学理论与应用',
    coreCurriculum: ['高等代数', '数学分析', '概率论', '计算方法'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: [],
      expandOptions: '物理必选（理学门类要求）',
      bindingRule: '物+X+X',
    },
  },

  M040: {
    majorName: '建筑学', degreeType: '建筑学',
    careerIds: ['C006'],
    description: '培养建筑设计、城市规划和理论研究的复合型人才',
    coreCurriculum: ['建筑设计', '建筑构造', '建筑史', '城市规划'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['地理'],
      warnings: ['部分顶尖建筑学院（如清华）要求物化双选'],
      expandOptions: '物理必选，建议搭配地理（空间思维训练）',
      bindingRule: '物+X+X（建议+地理）',
    },
  },
  M041: {
    majorName: '城乡规划', degreeType: '工学',
    careerIds: ['C006'],
    description: '研究城乡空间发展和规划管理',
    coreCurriculum: ['城市规划原理', '道路与交通规划', '景观设计'],
    subjectRequirements: {
      required: ['物理'],
      optional: ['地理'],
      recommended: ['地理'],
      warnings: [],
      expandOptions: '物理必选或地理必选（不同院校要求不同），物+地是最优组合',
      bindingRule: '物+X+X 或 历+地+X',
    },
  },

  M050: {
    majorName: '法学', degreeType: '法学',
    careerIds: ['C007'],
    description: '系统学习法律理论和实务',
    coreCurriculum: ['民法', '刑法', '行政法', '诉讼法'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: ['政治'],
      warnings: [
        '⚠️ 军警类院校的法学专业要求政治必选！',
        '⚠️ 部分政法类院校要求历政双选',
      ],
      expandOptions: '多数院校不限选科，但政治/历史可扩大选择面',
      bindingRule: '不限选科（政法类院校建议历+政+X）',
    },
  },

  M060: {
    majorName: '金融学', degreeType: '经济学',
    careerIds: ['C008'],
    description: '研究金融市场、投资和风险管理',
    coreCurriculum: ['投资学', '公司金融', '风险管理', '金融市场学'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: ['物理'],
      warnings: ['顶尖金融学院（清北人复）偏好物理组考生'],
      expandOptions: '多数院校不限选科，顶尖院校偏好物理组',
      bindingRule: '不限选科（顶尖院校建议物+X+X）',
    },
  },
  M061: {
    majorName: '经济学', degreeType: '经济学',
    careerIds: ['C008'],
    description: '研究资源配置、市场运行和经济政策',
    coreCurriculum: ['微观经济学', '宏观经济学', '计量经济学', '产业经济学'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科，文理兼收',
      bindingRule: '不限选科',
    },
  },
  M062: {
    majorName: '会计学', degreeType: '管理学',
    careerIds: ['C012'],
    description: '学习财务核算、审计和税务',
    coreCurriculum: ['中级财务会计', '审计学', '税法', '成本会计'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科',
      bindingRule: '不限选科',
    },
  },
  M063: {
    majorName: '财务管理', degreeType: '管理学',
    careerIds: ['C012'],
    description: '研究企业资金运作和价值管理',
    coreCurriculum: ['财务管理', '投资学', '财务报表分析', '资产评估'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科',
      bindingRule: '不限选科',
    },
  },

  M070: {
    majorName: '心理学', degreeType: '理学',
    careerIds: ['C009'],
    description: '研究人类心理活动和行为规律',
    coreCurriculum: ['普通心理学', '发展心理学', '心理咨询', '心理测量'],
    subjectRequirements: {
      required: ['物理'],
      optional: ['生物'],
      recommended: ['生物'],
      warnings: [
        '⚠️ 心理学属于理学门类，多数院校要求物理必选！',
        '⚠️ 部分师范院校的心理学接受历史组考生',
      ],
      expandOptions: '多数院校要求物理必选，部分接受物/历任选+生物',
      bindingRule: '物+X+X（部分院校接受历+生+X）',
    },
  },

  M080: {
    majorName: '新闻学', degreeType: '文学',
    careerIds: ['C010', 'C017', 'C019'],
    description: '研究新闻传播规律和报道实务',
    coreCurriculum: ['新闻采访', '新闻写作', '新闻编辑', '传播学'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: ['政治'],
      warnings: [],
      expandOptions: '不限选科，文理兼收',
      bindingRule: '不限选科',
    },
  },
  M081: {
    majorName: '网络与新媒体', degreeType: '文学',
    careerIds: ['C010', 'C017'],
    description: '研究数字媒体和网络传播',
    coreCurriculum: ['新媒体概论', '数字媒体技术', '网络舆情分析', '融媒体实践'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科',
      bindingRule: '不限选科',
    },
  },

  M090: {
    majorName: '电气工程及其自动化', degreeType: '工学',
    careerIds: ['C011'],
    description: '研究电力系统、电机和自动控制',
    coreCurriculum: ['电路原理', '电力系统', '电机学', '自动控制'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: [],
      expandOptions: '物理必选，建议搭配化学',
      bindingRule: '物+X+X',
    },
  },
  M091: {
    majorName: '自动化', degreeType: '工学',
    careerIds: ['C011'],
    description: '研究控制理论、自动化和智能系统',
    coreCurriculum: ['自动控制原理', '传感器技术', 'PID控制', '工业机器人'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: [],
      expandOptions: '物理必选，建议搭配化学',
      bindingRule: '物+X+X',
    },
  },

  M100: {
    majorName: '人力资源管理', degreeType: '管理学',
    careerIds: ['C013'],
    description: '研究人才选拔、培养和激励管理',
    coreCurriculum: ['组织行为学', '劳动经济学', '薪酬管理', '绩效管理'],
    subjectRequirements: {
      required: [],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '不限选科，文理兼收',
      bindingRule: '不限选科',
    },
  },

  M110: {
    majorName: '环境工程', degreeType: '工学',
    careerIds: ['C014'],
    description: '研究环境污染治理和环境质量管理',
    coreCurriculum: ['水污染控制', '大气污染控制', '固体废物处理', '环境监测'],
    subjectRequirements: {
      required: ['物理', '化学'],
      optional: [],
      recommended: ['生物'],
      warnings: ['多数院校要求物化双选'],
      expandOptions: '物化双选，第三科建议生物或地理',
      bindingRule: '物+化【必选】+ 任意一科',
    },
  },
  M112: {
    majorName: '环境科学', degreeType: '理学',
    careerIds: ['C014'],
    description: '研究环境变化规律和环境保护',
    coreCurriculum: ['环境化学', '环境生物学', '环境影响评价', '生态学'],
    subjectRequirements: {
      required: ['物理'],
      optional: ['化学', '生物'],
      recommended: ['化学', '生物'],
      warnings: [],
      expandOptions: '物理必选，建议化学+生物中选至少一门',
      bindingRule: '物+X+X（建议物化或物生）',
    },
  },

  M120: {
    majorName: '工业设计', degreeType: '工学',
    careerIds: ['C015'],
    description: '研究产品外观、交互和使用体验设计',
    coreCurriculum: ['设计素描', '人机工程学', '设计心理学', '原型设计'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: [],
      warnings: [],
      expandOptions: '物理必选（工科要求）',
      bindingRule: '物+X+X',
    },
  },

  M130: {
    majorName: '药学', degreeType: '医学',
    careerIds: ['C016'],
    description: '研究药物制备、作用机制和合理用药',
    coreCurriculum: ['药理学', '药剂学', '药物化学', '药物分析'],
    subjectRequirements: {
      required: ['化学'],
      optional: [],
      recommended: ['物理', '生物'],
      warnings: [
        '⚠️ 化学是药学必选科目！不选化学无法报考药学专业',
        '⚠️ 部分院校要求物化双选',
      ],
      expandOptions: '化学必选，建议搭配物理（约60%院校要求）',
      bindingRule: '化+X+X（建议化+物+X）',
    },
  },

  M140: {
    majorName: '机械工程', degreeType: '工学',
    careerIds: ['C018'],
    description: '研究机械设计、制造和自动化',
    coreCurriculum: ['机械设计', '机械原理', '机械制图', '材料力学'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: [],
      expandOptions: '物理必选，建议搭配化学',
      bindingRule: '物+X+X',
    },
  },
  M141: {
    majorName: '车辆工程', degreeType: '工学',
    careerIds: ['C018'],
    description: '研究汽车和轨道交通车辆设计与制造',
    coreCurriculum: ['汽车构造', '发动机原理', '汽车设计', '车辆动力学'],
    subjectRequirements: {
      required: ['物理'],
      optional: [],
      recommended: ['化学'],
      warnings: [],
      expandOptions: '物理必选',
      bindingRule: '物+X+X',
    },
  },

  M150: {
    majorName: '生物工程', degreeType: '工学',
    careerIds: ['C020'],
    description: '运用生物学和工程学原理开发生物产品',
    coreCurriculum: ['生物化学', '微生物学', '基因工程', '发酵工程'],
    subjectRequirements: {
      required: ['物理', '化学'],
      optional: [],
      recommended: ['生物'],
      warnings: [
        '⚠️ 生物工程属于工科，大部分院校要求物化双选！',
        '⚠️ 不选化学无法报考绝大多数生物工程专业',
      ],
      expandOptions: '物化必选，第三科建议选生物（部分院校要求）',
      bindingRule: '物+化【必选】+ 生（推荐）',
    },
  },
  M151: {
    majorName: '生物医学工程', degreeType: '工学',
    careerIds: ['C020'],
    description: '将工程技术与医学结合，研发医疗器械和生物材料',
    coreCurriculum: ['生物材料', '医学影像', '医疗器械原理', '信号处理'],
    subjectRequirements: {
      required: ['物理', '化学'],
      optional: [],
      recommended: ['生物'],
      warnings: ['物化双选是基本门槛'],
      expandOptions: '物化必选，建议+生物',
      bindingRule: '物+化【必选】+ 任意一科',
    },
  },
};

// 新增：反向查询——根据选科组合返回可覆盖的专业
function getMajorsBySubjects(selectedSubjects) {
  var results = [];
  Object.entries(MAJOR_CAREER_MAP).forEach(([id, major]) => {
    var req = major.subjectRequirements;
    if (!req) return;
    // 检查必选科目是否都在用户选择的科目中
    var missingRequired = (req.required || []).filter((s) => !selectedSubjects.includes(s));
    var canApply = missingRequired.length === 0;
    results.push({ majorId: id, ...major, canApply, missingRequired, hasWarnings: (req.warnings || []).length > 0 });
  });
  return results;
}

function getMajorsByCareer(careerId) {
  var majorIds = [];
  Object.entries(MAJOR_CAREER_MAP).forEach(([id, major]) => {
    if (major.careerIds.includes(careerId)) {
      majorIds.push({ majorId: id, ...major });
    }
  });
  return majorIds;
}

function getMajorById(majorId) {
  return MAJOR_CAREER_MAP[majorId] || null;
}

{ MAJOR_CAREER_MAP, getMajorsByCareer, getMajorById, getMajorsBySubjects };


// === certificates.js
// 职业 → 大学期间推荐考取证书
var CAREER_CERTIFICATES = {
  C001: { // 软件工程师
    careerName: '软件工程师',
    certificates: [
      { name: '计算机等级考试（二级/三级）', level: '基础', period: '大一可考', desc: '计算机基础能力证明' },
      { name: '软件设计师（中级）', level: '进阶', period: '大三可考', desc: '国家软考中级，国企/事业单位认可度高' },
      { name: 'Oracle/MySQL认证', level: '专业', period: '大二-大三', desc: '数据库方向必备' },
      { name: 'AWS/阿里云认证', level: '专业', period: '大三-大四', desc: '云计算方向热门证书' },
    ],
  },
  C002: { // 临床医生
    careerName: '临床医生',
    certificates: [
      { name: '英语四六级（CET-4/6）', level: '基础', period: '大一大二', desc: '阅读国外医学文献的基础' },
      { name: '执业医师资格证', level: '必备', period: '毕业后1年', desc: '行医必备证书，必须通过' },
      { name: '住院医师规范化培训合格证', level: '必备', period: '毕业后3年', desc: '三甲医院就业必需' },
      { name: 'BLS/ACLS急救证书', level: '加分', period: '大四-规培', desc: '临床急救能力证明' },
    ],
  },
  C003: { // 市场营销策划
    careerName: '市场营销策划',
    certificates: [
      { name: '新媒体运营师', level: '入门', period: '大二可考', desc: '抖音/小红书等平台运营技能认证' },
      { name: 'Adobe Photoshop认证', level: '技能', period: '大二', desc: '营销素材设计能力' },
      { name: 'Google Analytics认证', level: '专业', period: '大三大四', desc: '数据分析能力国际认证' },
    ],
  },
  C004: { // 中学教师
    careerName: '中学教师',
    certificates: [
      { name: '普通话等级证书', level: '基础', period: '大一/大二', desc: '教师必备，语文老师需二甲以上' },
      { name: '中小学教师资格证', level: '必备', period: '大三可考', desc: '考编/进学校必备' },
      { name: '英语四六级（CET-4/6）', level: '基础', period: '大二', desc: '应聘加分项' },
    ],
  },
  C005: { // 数据分析师
    careerName: '数据分析师',
    certificates: [
      { name: 'CDA数据分析师认证', level: '专业', period: '大三可考', desc: '国内最主流的数据分析认证' },
      { name: 'Tableau/Power BI认证', level: '技能', period: '大二-大三', desc: '可视化工具技能证明' },
      { name: '计算机二级（Python）', level: '基础', period: '大一', desc: '编程基础能力' },
    ],
  },
  C007: { // 律师
    careerName: '律师',
    certificates: [
      { name: '英语四六级（CET-4/6）', level: '基础', period: '大一大二', desc: '涉外律所必需' },
      { name: '法律职业资格证（法考）', level: '必备', period: '大四/毕业后', desc: '律师执业前提，必须通过' },
      { name: '专利代理人资格证', level: '加分', period: '研究生阶段', desc: '知识产权方向利器' },
    ],
  },
  C008: { // 金融分析师
    careerName: '金融分析师',
    certificates: [
      { name: '证券从业资格证', level: '入门', period: '大二可考', desc: '进入证券/基金行业门槛' },
      { name: '基金从业资格证', level: '入门', period: '大二可考', desc: '基金公司就业必备' },
      { name: 'CFA特许金融分析师', level: '高级', period: '大四/研究生', desc: '金融圈含金量最高证书之一' },
      { name: 'FRM金融风险管理师', level: '高级', period: '研究生', desc: '风控方向核心认证' },
    ],
  },
  C011: { // 电气工程师
    careerName: '电气工程师',
    certificates: [
      { name: '注册电气工程师', level: '必备', period: '工作后', desc: '电气行业核心执业资格' },
      { name: '电工证（低压/高压）', level: '基础', period: '大二可考', desc: '实操上岗必备' },
      { name: 'PLC编程认证', level: '技能', period: '大三-大四', desc: '自动化方向核心技能' },
    ],
  },
  C015: { // 产品经理
    careerName: '产品经理',
    certificates: [
      { name: 'NPDP产品经理认证', level: '专业', period: '大三可考', desc: '国际产品管理认证' },
      { name: 'PMP项目管理认证', level: '高级', period: '大四/工作后', desc: '项目管理全球通用证书' },
    ],
  },
};

// 根据职业ID获取推荐证书
function getCertificatesByCareer(careerId) {
  return CAREER_CERTIFICATES[careerId] || null;
}

{ CAREER_CERTIFICATES, getCertificatesByCareer };


// === learning-strategies.js
// 各科分层学习策略推荐
var LEARNING_STRATEGIES = {
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
  var strategies = LEARNING_STRATEGIES[subject];
  if (!strategies) return null;

  for (var level of strategies.levels) {
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

{ LEARNING_STRATEGIES, getStrategy };


// === app.js ===
// 生涯规划助手 Web版 - 核心应用













// ========== Storage ==========
var S = {
  get(k) { try { var v = localStorage.getItem('cp_' + k); return v ? JSON.parse(v) : null; } catch(e) { return null; } },
  set(k, v) { localStorage.setItem('cp_' + k, JSON.stringify(v)); },
  remove(k) { localStorage.removeItem('cp_' + k); },
  clear() { Object.keys(localStorage).filter(k => k.startsWith('cp_')).forEach(k => localStorage.removeItem(k)); }
};

// ========== Toast/Modal ==========
function toast(msg, icon = 'none') {
  var el = document.getElementById('toast');
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
  var overlay = document.getElementById('loading-overlay');
  if (overlay) { overlay.style.display = 'none'; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  var el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
  var nav = document.getElementById('bottom-nav');
  var navPages = ['home','landing','archive'];
  var showNav = navPages.indexOf(page) >= 0;
  if (showNav) { nav.style.display = 'flex'; document.body.className = 'body-has-nav'; }
  else { nav.style.display = 'none'; document.body.className = ''; }
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
  for (var r of REGIONS) { if (loc.startsWith(r.label)) return r.value; }
  return loc.substring(0, 2);
}
function getExtraScores(uid) { return EXTRA_SCORES[uid] || null; }

// ========== Career Matcher ==========
function matchCareers(hRes, mRes) {
  var gender = S.get('user_gender') || '';
  var GA = {
    male:{C001:5,C002:-2,C003:3,C004:-5,C005:5,C006:5,C007:5,C008:3,C009:-5,C010:3,C011:5,C012:-2,C013:-3,C014:2,C015:5,C016:-3,C017:5,C018:5,C019:3,C020:2},
    female:{C001:-3,C002:3,C003:-2,C004:5,C005:-2,C006:-3,C007:1,C008:-2,C009:5,C010:3,C011:-5,C012:3,C013:5,C014:-2,C015:-2,C016:3,C017:1,C018:-5,C019:5,C020:3}
  };
  var adj = GA[gender] || {};
  return CAREERS.map(c => {
    var hs = calcHolland(hRes.hollandCode, c.hollandCodes);
    var ms = calcMBTI(mRes.typeCode, c.mbtiPreferences);
    var total = Math.round(hs * 0.6 + ms * 0.4) + (adj[c.id] || 0);
    return {...c, matchScore: Math.min(100, Math.max(0, total)), hollandMatch: Math.round(hs), mbtiMatch: Math.round(ms)};
  }).sort((a,b) => b.matchScore - a.matchScore).slice(0, 5);
}
function calcHolland(uCode, cCodes) {
  var parts = uCode.split(''); var w = 0;
  cCodes.forEach(code => { var p = parts.indexOf(code); if (p >= 0) w += Math.max(0.1, 1 - p * 0.3); });
  return Math.round((w / Math.max(1, cCodes.length)) * 100);
}
function calcMBTI(uType, prefs) {
  if (!prefs || !prefs.length) return 50;
  var m = 0; prefs.forEach(p => { if (uType.includes(p)) m++; });
  return Math.round((m / prefs.length) * 100);
}

// ========== Holland Scorer ==========
function calcHollandResult(answers) {
  var scores = {R:0,I:0,A:0,S:0,E:0,C:0};
  answers.forEach(a => { var q = HOLLAND_QUESTIONS.find(x => x.id === a.questionId); if (q) scores[q.dimension] += a.selectedScore; });
  var sorted = Object.entries(scores).sort((a,b) => b[1] - a[1]);
  var hollandCode = sorted.slice(0,3).map(e => e[0]).join('');
  var ns = {}; Object.entries(scores).forEach(([k,v]) => ns[k] = Math.round(v / 30 * 100));
  return { scores, hollandCode, normalizedScores: ns, maxDimension: sorted[0][0], completedAt: Date.now() };
}

// ========== MBTI Scorer ==========
function calcMBTIResult(answers) {
  var dc = {EI:{E:0,I:0},SN:{S:0,N:0},TF:{T:0,F:0},JP:{J:0,P:0}};
  answers.forEach(a => { var q = MBTI_QUESTIONS.find(x => x.id === a.questionId); if (q) dc[q.dimension][a.selectedOrientation]++; });
  var parts = []; var traits = {};
  Object.entries(dc).forEach(([dim, counts]) => {
    var [a,b] = dim.split(''); var t = counts[a] + counts[b];
    parts.push(counts[a] >= counts[b] ? a : b);
    traits[a] = t ? Math.round(counts[a]/t*100) : 50; traits[b] = 100 - traits[a];
  });
  var tc = parts.join(''); var p = MBTI_PROFILES[tc] || {};
  return { typeCode: tc, typeName: p.typeName || tc, strengths: p.strengths||[], weaknesses: p.weaknesses||[], learningStyle: p.learningStyle||'', suitableEnv: p.suitableEnv||'', traits, completedAt: Date.now() };
}

// ========== School Filter ==========
function filterSchools(input, targetMajorIds) {
  var { province, subjectGroup, totalScore, ranking, preferredProvinces } = input;
  var effRank = ranking || Math.max(0, (750 - totalScore) * 200);
  var raw = [];
  UNIVERSITIES.forEach(uni => {
    targetMajorIds.forEach(mid => {
      var e = tryMatch(uni, mid, province, subjectGroup, totalScore, effRank);
      if (e) { e.inPref = preferredProvinces && preferredProvinces.some(p => { var pn = PROVINCE_MAP[p]||p; return uni.location.includes(pn)||uni.location.includes(p); }); raw.push(e); }
    });
  });
  var sm = {}; raw.forEach(m => {
    if (!sm[m.schoolId]) sm[m.schoolId] = {schoolId:m.schoolId, schoolName:m.schoolName, tier:m.tier, tierLevel:m.tierLevel, location:m.location, type:m.type, isEstimated:m.isEstimated, inPreferredProvince:m.inPref, majors:[], closestDiff:999};
    sm[m.schoolId].majors.push({majorName:m.majorName, majorId:m.majorId, minScore:m.minScore, avgScore:m.avgScore, scoreDiff:m.scoreDiff, confidence:m.confidence});
    if (Math.abs(m.scoreDiff) < Math.abs(sm[m.schoolId].closestDiff)) sm[m.schoolId].closestDiff = m.scoreDiff;
    if (m.inPref) sm[m.schoolId].inPreferredProvince = true;
  });
  var all = Object.values(sm); if (!all.length) return {provinceResults:[]};
  all.sort((a,b) => { if (a.inPreferredProvince&&!b.inPreferredProvince) return -1; if (!a.inPreferredProvince&&b.inPreferredProvince) return 1; return Math.abs(a.closestDiff)-Math.abs(b.closestDiff); });

  var pm = {};
  all.forEach(s => {
    var d = s.closestDiff; s.majors.sort((a,b) => a.scoreDiff - b.scoreDiff);
    var cat = null;
    if (d < -30 && d >= -120) cat = 'rush'; else if (d < -5 && d >= -30) cat = 'steady'; else if (d >= -5 && d <= 20) cat = 'safe'; else if (d > 20 && d <= 50) cat = 'bottom';
    if (!cat) { if (d < -120) cat = 'rush'; else if (d > 50) cat = 'bottom'; }
    if (!cat) return;
    var pv = extractProvince(s.location);
    if (!pm[pv]) pm[pv] = {provinceName: PROVINCE_MAP[pv]||pv, provinceValue:pv, inPreferredProvince:s.inPreferredProvince, rush:[], steady:[], safe:[], bottom:[]};
    pm[pv][cat].push(s); if (s.inPreferredProvince) pm[pv].inPreferredProvince = true;
  });
  // 兜底：一个学校都没分类→强制把最接近的推进去
  var totalClassified = 0;
  Object.values(pm).forEach(p => { ['rush','steady','safe','bottom'].forEach(c => totalClassified += p[c].length); });
  if (totalClassified === 0 && all.length > 0) {
    all.slice(0, 10).forEach(s => {
      var pv = extractProvince(s.location);
      if (!pm[pv]) pm[pv] = {provinceName: PROVINCE_MAP[pv]||pv, provinceValue:pv, inPreferredProvince:s.inPreferredProvince, rush:[], steady:[], safe:[], bottom:[]};
      pm[pv].rush.push(s);
    });
  }
  var pr = Object.values(pm);
  pr.forEach(p => { ['rush','steady','safe','bottom'].forEach(c => { p[c].sort((a,b)=>Math.abs(a.closestDiff)-Math.abs(b.closestDiff)); p[c]=p[c].slice(0,8); }); p.schoolCount = p.rush.length+p.steady.length+p.safe.length+p.bottom.length; });
  pr.sort((a,b) => { if (a.inPreferredProvince&&!b.inPreferredProvince) return -1; if (!a.inPreferredProvince&&b.inPreferredProvince) return 1; return 0; });
  return {provinceResults:pr};
}
function tryMatch(uni, mid, province, sg, totalScore, effRank) {
  var mn = MAJOR_CAREER_MAP[mid] && MAJOR_CAREER_MAP[mid].majorName; if (!mn) return null;
  var major = uni.majors && uni.majors.length ? uni.majors.find(function(m){return m.majorId === mid;}) : null;
  var ad = null, est = false;
  if (major) ad = major.admissionScores.find(s => s.province === province && s.subjectGroup === sg);
  if (!ad) { ad = uni.overallAdmissionScores.find(s => s.province === province && s.subjectGroup === sg); if (ad) est = true; }
  if (!ad) { var ext = getExtraScores(uni.id); if (ext && ext[province] && ext[province][sg]) { ad = ext[province][sg]; est = true; } }
  if (!ad) { ad = uni.overallAdmissionScores.find(s => s.province === province); if (ad) est = true; }
  if (!ad && uni.overallAdmissionScores.length > 0) { ad = uni.overallAdmissionScores[0]; est = true; }
  if (!ad) return null;
  var sd = totalScore - ad.minScore, rd = ad.minRanking - effRank;
  var sc = Math.min(1,Math.max(0,sd/60+0.5)), rc = Math.min(1,Math.max(0,rd/15000+0.5));
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
    var el = document.querySelector(`.career-card-el[data-id="${career.id}"]`);
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
  onProvinceChange() { var pv = document.getElementById('si-province').value; var cities = REGIONS.find(r => r.value === pv)?.cities || []; var sel = document.getElementById('si-city'); sel.innerHTML = cities.map(c => `<option value="${c.value}">${c.label}</option>`).join(''); },
  onCityChange() {},
  toggleElective(subject, el) {
    if (this.siElectiveActive[subject]) { delete this.siElectiveActive[subject]; el.classList.remove('el-active'); }
    else { if (Object.keys(this.siElectiveActive).length >= 3) { toast('最多选3门选考科目'); return; } this.siElectiveActive[subject] = true; el.classList.add('el-active'); }
    document.getElementById('el-count-text').textContent = `已选 ${Object.keys(this.siElectiveActive).length} / 3 科`;
    this.rebuildSubjectGrid();
  },
  rebuildSubjectGrid() {
    var subs = ['语文','数学','英语', ...Object.keys(this.siElectiveActive)];
    var grid = document.getElementById('si-subject-grid');
    grid.innerHTML = subs.map(s => `<div class="subject-item"><span class="subject-name">${s}</span><input class="subject-input" type="number" placeholder="-" value="${this.siSubjectScores[s]||''}" oninput="App.onSubjectScoreInput('${s}',this.value)"></div>`).join('');
  },
  onSubjectScoreInput(sub, val) {
    this.siSubjectScores[sub] = val;
    var subs = ['语文','数学','英语', ...Object.keys(this.siElectiveActive)];
    var total = subs.reduce((sum, s) => sum + (parseInt(this.siSubjectScores[s]) || 0), 0);
    document.getElementById('si-total').textContent = total;
  },
  togglePrefProvince(pv, el) {
    if (this.preferredProvinces.includes(pv)) { this.preferredProvinces = this.preferredProvinces.filter(p => p !== pv); el.classList.remove('pp-active'); }
    else { this.preferredProvinces.push(pv); el.classList.add('pp-active'); }
    document.getElementById('pp-count-text').textContent = `已选 ${this.preferredProvinces.length} 个省份`;
    document.getElementById('pp-count-text').style.display = this.preferredProvinces.length ? 'block' : 'none';
  },
  startMatch() {
    var subs = ['语文','数学','英语', ...Object.keys(this.siElectiveActive)];
    if (subs.length < 6) { toast('请选择3门选考科目并填写成绩'); return; }
    var pv = document.getElementById('si-province').value;
    var input = { province: pv, subjectGroup: subs.includes('物理')?'wuli':'lishi', totalScore: subs.reduce((s,sub) => s+(parseInt(this.siSubjectScores[sub])||0),0), ranking: parseInt(document.getElementById('si-ranking').value)||0, subjectScores: this.siSubjectScores, subjects: subs, preferredProvinces: this.preferredProvinces };
    S.set('score_input', input);
    navigateTo('school-match');
  }
};

// ========== Page Renderers ==========
function renderTestResult() {
  var h = S.get('holland_result'), m = S.get('mbti_result'); if (!h || !m) { navigateTo('landing'); return; }
  var hd = HOLLAND_DESCRIPTIONS[h.maxDimension];
  document.getElementById('result-hero').innerHTML = `<span class="thc-page-title">你的测评结果</span><span class="thc-page-sub">霍兰德职业兴趣 + 校园性格分析</span><div class="thc-body"><div class="thc-avatar-wrap"><span class="thc-avatar">${hd.avatar}</span></div><div class="thc-info"><span class="thc-holland-code">${h.hollandCode}</span><span class="thc-type-name">${hd.name}</span><span class="thc-summary">${hd.summary}</span></div><div class="thc-mbti-badge"><span class="thc-mbti-code">${m.typeCode}</span><span class="thc-mbti-name">${m.typeName}</span></div></div>`;
  document.getElementById('res-holland-code').textContent = h.hollandCode;
  // Hex rings
  var dims = Object.entries(h.normalizedScores);
  document.getElementById('hex-rings').innerHTML = `<div class="hex-center"><span class="hex-avatar">${hd.avatar}</span><span class="hex-code">${h.hollandCode}</span></div><div class="hex-dims">${dims.map(([k,v]) => `<div class="hex-dim-item"><div class="hdi-ring"><div class="hdi-fill" style="height:${v}%"></div></div><span class="hdi-name">${k}</span><span class="hdi-score">${v}</span></div>`).join('')}</div>`;
  // Score bars
  document.getElementById('h-score-bars').innerHTML = dims.map(([k,v]) => `<div class="score-bar-item"><div class="score-bar-label"><span class="bar-name">${['R','I','A','S','E','C'].indexOf(k)>=0 ? ['现实型','研究型','艺术型','社会型','企业型','常规型'][['R','I','A','S','E','C'].indexOf(k)] : k}</span><span class="bar-score">${v}分</span></div><div class="score-bar-bg"><div class="score-bar-fill" style="width:${v}%"></div></div></div>`).join('');
  document.getElementById('h-type-desc').innerHTML = hd ? `<div class="tags">${hd.traits.map(t => `<span class="tag tag-blue">${t}</span>`).join('')}</div><span class="desc-text mt-16">${hd.suitable}</span><span class="desc-text">📖 学习方式：${hd.learningStyle}</span>` : '';
  document.getElementById('res-mbti-code').textContent = m.typeCode;
  document.getElementById('res-mbti-name').textContent = m.typeName;
  var EI=m.traits.E||50, SN=m.traits.S||50, TF=m.traits.T||50, JP=m.traits.J||50;
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
  var h = S.get('holland_result'), m = S.get('mbti_result'); if (!h || !m) { navigateTo('landing'); return; }
  var careers = matchCareers(h, m);
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
  var saved = S.get('score_input');
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
  var input = S.get('score_input'), career = S.get('selected_career'); if (!input || !career) { navigateTo('score-input'); return; }
  document.getElementById('sm-subtitle').textContent = `总分 ${input.totalScore} · ${career.careerName}`;
  var majors = getMajorsByCareer(career.careerId);
  var result = filterSchools(input, majors.map(m => m.majorId));
  var pr = result.provinceResults || [];
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
  var h = S.get('holland_result'), m = S.get('mbti_result'), sm = S.get('school_match_result'), sc = S.get('selected_career');
  if (!h || !m) { navigateTo('landing'); return; }
  var hd = HOLLAND_DESCRIPTIONS[h.maxDimension], careers = matchCareers(h,m);
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
  var h = S.get('holland_result'), m = S.get('mbti_result'), sc = S.get('selected_career'), si = S.get('score_input');
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
