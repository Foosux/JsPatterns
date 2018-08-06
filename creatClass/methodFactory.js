// 工厂方法模式：创建多类产品的实例
// 对创建过程进行抽象，只需一处维护

var MethodFactory = function (type, msg) {
  if(this instanceof MethodFactory) {
    // new实质是对this的一系列复制，同时关联类的原型
    return new this[type](msg)
  } else {

  }
}
MethodFactory.prototype = {
  // constructor: MethodFactory,
  JS: function (msg) {
    return {
      show: () => {
        alert("JS:" + msg)
      }
    }
  },
  PHP: function (msg) {
    return {
      show: () => {
        alert("PHP:" + msg)
      }
    }
  }
}
