
// 引入js文件
const calc = require('../../util/cal.js')

Page({

  data: {
    num: "0",
    op: ""
  },

  // 结果
  result: null,

  // 判断当前清空状态
  isClear: false,

  // 数字处理函数
  numBtn: function(e) {
    var getNum = e.target.dataset.val;
    // 如果当前输入框是0或者已输入运算符状态，则将新的数字直接填入输入框
    if (this.data.num == '0' || this.isClear) {
      this.setData({
        num: getNum
      })
      this.isClear = false;
    } else {
      // 否则将接收到的值接在输入框中数字的后面
      this.setData({
        num: this.data.num + getNum
      })
    }
  },

  // 运算符事件处理函数
  opBtn: function(e) {
    // 接收到上一次的运算符
    var op = this.data.op;
    // 接收到当前的数字
    var num = Number(this.data.num);

    // 获得并显示新的运算符符号
    this.setData({
      op: e.target.dataset.val
    })

    // 用于在多次按计算按钮时避免重复计算的问题
    if (this.isClear) {
      return;
    }
    this.isClear = true;

    if (this.result === null) {
      this.result = num;
      return;
    }

    if (op === '+') {
      this.result = calc.add(this.result,num);
    } else if (op === '-') {
      this.result = calc.sub(this.result, num);
    } else if (op === '*') {
      this.result = calc.mul(this.result, num);
    } else if (op === '/') {
      this.result = calc.div(this.result, num);
    } else if (op === '%') {
      this.result = this.result % num
    } else if (op === '=') {
    }
    this.setData({
      num: this.result
    })


  },

  // 小数点事件处理函数
  dotBtn: function(e) {
    if (this.isClear) {
      this.setData({
        num: "0."
      })
      this.isClear = false;
      return;
    }
    // 如果已经存在小数点了，不进行重复输入
    if (this.data.num.indexOf('.') >= 0) {
      return;
    }
    this.setData({
      num: this.data.num + "."
    })
  },

  // 删除事件处理函数
  delBtn: function(e) {
    var newNum = this.data.num.substr(0, this.data.num.length - 1);
    this.setData({
      num: this.data.num === '' ? '0' : newNum
    })
  },

  // 重置事件处理函数
  resetBtn: function(e) {
    this.result = null;
    this.isClear = false;
    this.setData({
      num: '0',
      op: ""
    })
  }



})