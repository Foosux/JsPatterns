/**
 * 观察者
 */
var Observer = (function(){
  var __message = {}
  return {
    // 注册事件
    registry: function (type, fn) {
      if (typeof __message[type] === 'undefined') {
        __message[type] = [fn]
      } else {
        __message[type].push(fn)
      }
      console.log(__message)
    },
    // 执行任务队列
    fire: function (type, args) {
      if(!__message[type]) return
      var events = {
        type,
        args: args || {}
      }
      var length = __message[type].length
      for (var i=0; i<length; i++) {
        __message[type][i].call(this, events)
      }
    },
    // 注销
    remove: function (type, fn) {
      if(__message[type] instanceof Array) {
        var length = __message[type].length
        for (var i = 0; i < length; i++) {
          __message[type][i] === fn && __message[type].splice(i, 1)
        }
      }
    }
  }
})()
