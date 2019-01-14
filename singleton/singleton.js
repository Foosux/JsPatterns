/*
 * 单例模式
 * 特点：
 * 1: 每个类只有一个实例，这个实例必须通过一个广为人知的接口，来被客户访问。（若实例已存在，则简单返回该对象的引用）
 * 2: 子类如果要扩展这个唯一的实例，客户可以不用修改代码就能使用这个扩展后的实例。
 * 3: 可以延迟实例化 (场景：初始化时需要一些额外的信息，而这些信息在声明时无法得知)
 *
 * 应用场景：当一个对象需要和另外的对象进行跨系统协作的时 / SDK 等
 */

// 例一： 简单惰性单例
const LazySingle = (function() {
  let _instance              // 单例的实例引用

  function Single() {        // 单例构造函数
    const desc = '单例'          // 私有属性和方法
    return {                    // 暴露出来的对象
      publicMethod: function() {console.log(desc)},
      publickProperty: '1.0'
    }
  }

  return function() {
    return _instance || (_instance = Single())
  }
})()

console.log(LazySingle()===LazySingle())        // true 使用同一片内存
console.log(LazySingle().publickProperty)       // 1.0

// 例二：改造成 new 的形式
const LazySingleClass = (function() {
  let _instance
  function Single(desc, version) {
    if (_instance) return _instance
    this.publicMethod = function() {console.log(desc)}
    this.publickProperty = version
    _instance = this
  }

  return Single
})()

console.log(new LazySingleClass('单例', '1.0') === new LazySingleClass('尝试再次创建', '2.0')) // true

// 例三：静态实例。规划一个命名空间，来管理对象上的属性和方法。
// 区分类的静态实例和单例模式很重要：
// 尽管单例模式可以被实现成一个静态实例，但是单例可以懒构造，在真正用到之前，单例模式不需要分配资源或者内存。

(function() {
  window.$ = window.jquery = {
    getId: function (id) {
      return document.getElementById(id)
    },
    css: function (id, key, value) {
      this.getId(id).style[key] = value
    }
  }
})()
