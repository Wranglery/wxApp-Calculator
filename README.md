# wxApp-Calculator
一个简易的微信小程序版本计算器，功能完善。解决了js中计算器浮点运算不准确的问题，可以进行准确的小数运算。

逻辑比较简单，注释也很详细，适合微信小程序初学的人，用来做第一个项目练手很合适，可以帮助理解事件的处理，以及对项目目录结构的理解。

**下面的代码封装了加减乘除四个方法，解决js中浮点运算不准确的问题，将这些代码封装成js文件，在wxjs文件中调用就行了。也就是项目目录中的cal.js文件**

```
module.exports = {
  add: function(arg1, arg2) {
    var r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  },

  sub: function(arg1, arg2) {
    var r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m - arg2 * m) / m
  },

  mul: function(arg1, arg2) {
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length
    } catch (e) {}
    try {
      m += s2.split(".")[1].length
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  },

  div: function(arg1, arg2) {
    var t1 = 0,
      t2 = 0,
      r1, r2;
    try {
      t1 = arg1.toString().split(".")[1].length
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length
    } catch (e) {}

    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1);

  }

}
```

![计算器界面图1](https://github.com/Wranglery/wxApp-Calculator/blob/Calculator/photo1.jpg =300*400)

