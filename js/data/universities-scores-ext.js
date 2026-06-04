// 跨省数据扩展（v3.0精简版，仅用于跨省查询兜底）
const EXTRA_SCORES = {};
function getExtraScores(uid) { return EXTRA_SCORES[uid] || null; }
export { EXTRA_SCORES, getExtraScores };
