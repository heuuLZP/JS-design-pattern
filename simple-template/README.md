## 简单模板模式



#### 目录结构

```
.
├── README.md                 ## 说明文档
├── simple-template.js        ## 字符串模板引擎
└── test.js				     ## 测试用例
```



#### 知识点说明

1. String.prototype.replace()

   - 指定一个函数作为第二个参数，当匹配执行后，该函数就会执行。函数的返回值作为替换字符串。

   - 如果第一个参数是正则表达式，并且为全局匹配模式，那么这个函数将被多次调用(每次匹配都会调用)

   - 回调函数(即：第二个参数)的参数

     | 变量名   | 代表的值                                     |
     | ----- | ---------------------------------------- |
     | match | 匹配的字符串                                   |
     | p1,p2 | 如果replace函数的第一个参数是正则表达式，p1,p2代表第n个括号匹配的字符串 |

     ​

2. 正则表达式

   | 字符   | 含义                                       |
   | ---- | ---------------------------------------- |
   | \w   | 匹配一个单字字符(字母、数字或者下划线)        等价于[A-Za-z0-9_] |


   `/\{\{(\w+).(\w+)\}\}/g`表示全局匹配`{{xxx.yyy}}`

   | 参数             | 含义          |
   | -------------- | ----------- |
   | match          | {{xxx.yyy}} |
   | front (其实就是p1) | xxx         |
   | key (其实就是p2)   | yyy         |

3. 对象导出与导入

   - es5

     ```
     // 导出一个模块对象
     module.exports = {}
     // 也可以先定义对象，再导出
     var A = {}
     module.exports = A;

     // 作为对象接收
     var A = require(path)
     ```

     ​


#### 参考

[String.prototype.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

[es5和es6对象导出与导入](http://www.cnblogs.com/hqyyy/p/6599078.html)
