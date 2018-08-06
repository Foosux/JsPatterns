// 简单工厂：主要用来创建同一类对象
// 没有抽象，每次增加内容要修改2处

var LoginAlert = function (msg) {
  this.msg = msg
}
LoginAlert.prototype.show = function () {
  alert(this.msg)
}
var LoginConfirm = function (msg) {
  this.msg = msg
}
LoginConfirm.prototype.show = function () {
  alert("conffirm："+ this.msg)
}
// 工厂
function LoginFactory (type, msg) {
  switch(type) {
    case 'Alert':
      return new LoginAlert(msg)
      break
    case 'confirm':
      return new LoginConfirm(msg)
      break
  }
}

// 第二种写法

function LoginFactory(type, msg) {
  var o = {}
  o.msg = msg
  if (type === 'Alert') {
    o.show = function () {
      alert(this.msg)
    }
  }
  if (type === 'confirm') {
    o.show = function () {
      alert("conffirm："+ this.msg)
    }
  }
  return o
}
