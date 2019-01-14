// 单例模式： 实例化一次的对象类。 规划一个命名空间，来管理对象上的属性和方法。

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
