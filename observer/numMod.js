/**
 * 信息模块
 */
(function(){
  var numChange = function(e){
    var count = +$('#num').text() + e.args.num
    $('#num').text(count)
  }
  // 订阅addMsg动作，更新计数
  Observer.registry('addMsg', numChange)
  // 订阅delMsg动作，更新计数
  Observer.registry('delMsg', numChange)
})()
