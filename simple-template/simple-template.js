// 命名空间 单体对象
var Mine = Mine || {};

// 字符串模板引擎
Mine.formateString = function(str, data) {
  return str.replace(/\{\{(\w+).(\w+)\}\}/g, function(match, front, key) {
    return typeof data[key] === undefined ? '' : data[key]
  })
}

module.exports = Mine
