// 专业-职业映射表 v2.0 - 含精确选科要求
const MAJOR_CAREER_MAP = {
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
  const results = [];
  Object.entries(MAJOR_CAREER_MAP).forEach(([id, major]) => {
    const req = major.subjectRequirements;
    if (!req) return;
    // 检查必选科目是否都在用户选择的科目中
    const missingRequired = (req.required || []).filter((s) => !selectedSubjects.includes(s));
    const canApply = missingRequired.length === 0;
    results.push({ majorId: id, ...major, canApply, missingRequired, hasWarnings: (req.warnings || []).length > 0 });
  });
  return results;
}

function getMajorsByCareer(careerId) {
  const majorIds = [];
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

export { MAJOR_CAREER_MAP, getMajorsByCareer, getMajorById, getMajorsBySubjects };
