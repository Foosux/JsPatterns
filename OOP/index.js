/**
 * 理解封装
 * 1.私有 => 外部不能访问
 * 2.公有 => 实例可访问
 * 3.共有 => 在prototype上，所有实例共用，可访问
 * 4.静态公有 => 自身可访问
 */
var Book = function (bookKind) {
  // 私有属性
  var pageNum = 1
  // 私有方法
  function sayPageNum () {}
  // 公有属性/实例属性
  this.bookKind = bookKind
  // 公有方法/实例方法/特权方法
  this.sayBookKind = function () {
    console.log(this.bookKind)
  }
}
// 共有属性/原型属性
Book.prototype.arr = [1, 2, 3]
// 共有方法/原型方法
Book.prototype.answer = function (question) {
  alert('I can answer this question:'+question)
}
// 静态公有属性
Book.page = 1000
// 静态公有方法
Book.sayPage = function(){console.log(this.page)}

/**
 * 理解继承
 */
// 1、类继承
// 缺点1.实例不能给父类传参
// 缺点2.改写了原型链，需要重新指定 constructor
// 缺点3.不同实例中引用属性共用内存的问题
var SubBook = function() {
  this.isSubBook = true
}
SubBook.prototype = new Book('CSSBook') // 核心代码
SubBook.prototype.priveMethod = function () {console.log('这是sub类私有方法')}
// SubBook.prototype.constructor = SubBook // 重新指定constructor
var bookA = new SubBook()
console.log('1.类继承输出：')
console.log('Book在原型链上?', bookA instanceof Book)        // true
console.log('SubBook在原型链上?', bookA instanceof SubBook)  // true
console.log('构造函数是?', bookA.__proto__.constructor.name) // Book
console.log('是否继承超类的原型方法?', bookA.answer)           // fn

// 2、构造函数继承
// 优点：解决了传参问题
// 缺点：没有公用的方法和属性，不继承 prototype
var SubBook2 = function(bookKind) {
  this.isSubBook = true
  Book.call(this, bookKind)             // 核心代码
}
var bookB = new SubBook2('JSBook')      // 传递参数
SubBook2.prototype.priveMethod = function () {console.log('这是sub类私有方法')}
console.log('2.借用构造函数继承输出：')
console.log(bookB instanceof Book)            // false
console.log(bookB instanceof SubBook2)        // true
console.log(bookB.__proto__.constructor.name) // SubBook2
console.log(bookB.answer)                     // undefined

// 3、组合继承（构造函数+类继承）
// 缺点：调用了两次父类的构造函数，子类原型上有一份多余的父类实例属性，浪费内存
var SubBook3 = function (bookKind) {
  this.isSubBook = true
  Book.call(this, bookKind)             // 核心代码，调用super
}
SubBook3.prototype = new Book()         // 核心代码，调用super
SubBook3.prototype.priveMethod = function () {console.log('这是sub类私有方法')}
var bookC = new SubBook3('HTMLBook')
console.log('3.组合继承输出：')
console.log(bookC instanceof Book)            // true
console.log(bookC instanceof SubBook3)        // true
console.log(bookC.__proto__.constructor.name) // Book
console.log(bookC.answer)                     // fn

// 4、原型继承：把一个对象做为另一个对象的原型 => creatObject
// 优点：生成一个纯净的对象，继承放在其原型链上
// 缺点：只能基于对象进行继承
function beget (obj) {
  function F () {}
  F.prototype = obj
  return new F()
}
var bookD = beget(Book.prototype)       // 核心代码
console.log('4.原型继承输出：')
console.log(bookD instanceof Book)      // true
console.log(bookD.answer)               // fn

// 5.寄生继承: 创建一个仅用于封装继承过程的函数 并 增强类功能
// 缺点：只能继承原型上的方法
function inherit(superType, subType) {
  // 基于原型继承创建新对象
  var O = beget(superType.prototype)
  // 对新对象进行增强
  O.constructor = subType
  O.addSomeThing = function(){
    alert('我是额外增加的功能')
  }
  // 返回增强的对象
  return O
}
var SubBook5 = function () {
  this.isSubBook = true
}
SubBook5.prototype = inherit(Book, SubBook5)
var bookE = new SubBook5()
console.log('6.寄生组合继承输出：')
console.log(bookE instanceof Book)      // true
console.log(bookE instanceof SubBook5)  // true
console.log(bookE.__proto__.constructor.name) // SubBook5
console.log(bookE.answer)               // fn

// 6.寄生组合继承 (借用构造函数+寄生继承)
// 比较 bookC 和 bookF, 节约了内存
var SubBook6 = function (bookKind) {
  this.isSubBook = true
  Book.call(this, bookKind)                   // 核心代码，借用构造函数
}
SubBook6.prototype = inherit(Book, SubBook6)  // 核心代码，寄生继承
var bookF = new SubBook6('mathBook')
console.log('6.寄生组合继承输出：')
console.log(bookF instanceof Book)      // true
console.log(bookF instanceof SubBook6)  // true
console.log(bookF.__proto__.constructor.name) // SubBook6
console.log(bookF.answer)               // fn

// 为何不能直接 用prototype赋值?
// 原因：子类修改prototype不能影响父类的prototype
var SubBook7 = function (bookKind) {
  this.isSubBook = true
  Book.call(this, bookKind)
}
SubBook7.prototype = Book.prototype   // 此处直接赋值
SubBook7.constructor = SubBook7
var bookG = new SubBook7('myBook')
SubBook7.prototype.addMethod = function () {}   // 增加方法
console.log('7.直接赋值污染父类prototype：')
console.log(bookF.addMethod)        // fn  => 污染了父类的prototype

/**
 * 理解多态
 * 1. 伪多态（JS是弱类型的语言）
 * 2. 根据arguments长度来模拟
 */
