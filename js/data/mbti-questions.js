// MBTI 性格测试题目（校园轻量化版，28题：4维度 × 7题）
const MBTI_QUESTIONS = [
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

export { MBTI_QUESTIONS };
