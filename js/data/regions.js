const REGIONS = [
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
const PROVINCE_MAP = {};
REGIONS.forEach(r => PROVINCE_MAP[r.value] = r.label);
function getCitiesByProvince(pv) { const p = REGIONS.find(r => r.value === pv); return p ? p.cities : []; }
export { REGIONS, PROVINCE_MAP, getCitiesByProvince };
