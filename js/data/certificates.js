// 职业 → 大学期间推荐考取证书
const CAREER_CERTIFICATES = {
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

export { CAREER_CERTIFICATES, getCertificatesByCareer };
