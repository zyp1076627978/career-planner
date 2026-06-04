// 霍兰德职业兴趣测试题目（精简版，36题：6维度 × 6题）
const OPTIONS_LIKERT_5 = [
  { label: '非常符合', score: 5 },
  { label: '比较符合', score: 4 },
  { label: '一般', score: 3 },
  { label: '不太符合', score: 2 },
  { label: '非常不符合', score: 1 },
];

const HOLLAND_QUESTIONS = [
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

export { HOLLAND_QUESTIONS };
