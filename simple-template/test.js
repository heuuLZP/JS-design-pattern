// 引入Mine对象
var Mine = require("./simple-template.js")

// 测试用例

var tpl = [
    '<p>',
    '<h1>{{data.name}}</h1>',
    '<span>{{data.age}}</span>',
    '<span>{{data.id}}</span>',
    '</p>'
  ].join(''),
  data = {
    name: "梧桐",
    age: 20,
    id: 0001
  };

console.log(Mine.formateString(tpl, data));
