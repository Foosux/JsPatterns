// 抽象工厂模式：用于创建产品簇，而非实例。可用来定义产品结构

// var Person = function () {}
// Person.prototype = {
//   constructor: Person,
//   getPrice: function () {
//     return new Error("抽象方法不能调用")
//   }
// }

// var subPerson = function () {
//   this.getPrice = function() {
//     return '实例方法'
//   }
// }

// 减少全局变量，挂在 Fun 下
var abFactory = function (subType, superType) {
  if(typeof abFactory[superType] === 'function') {
    var F = function() {}
    F.prototype = new abFactory[superType]()
    subType.constructor = subType
    subType.prototype = new F()
  } else {
    throw new Error("未知类")
  }
}
abFactory.Car = function () {
}
abFactory.Car.prototype = {
  getPrice: function () {
    throw new Error("抽象方法不能调用")
  }
}

var BMB = function (price) {
  this.price = price
}
abFactory(BMB, 'Car')
BMB.prototype.getPrice = function () {
  return this.price
}
