/**
 * 消息展示模块
 */
(function(){
  var addInfo = function(e) {
    // console.log('this:', this)
    var _html = $('<li>'
      + '<span>'+e.args.msg+'</span>'
      + '<button class="del">删除</button>'
      + '</li>')
    $('#msg').append(_html)
  }
  var alertInfo = function(e) {
    alert('新增的信息是：'+e.args.msg)
  }
  // 订阅增加动作，执行动作1--addInfo
  Observer.registry('addMsg', addInfo)
  // 订阅增加动作，执行动作2--alertInfo
  Observer.registry('addMsg', alertInfo)
  // 注销 第二个动作
  Observer.remove('addMsg', alertInfo)

  // 删除操作
  $('ul').on('click', '.del', function(){
    $(this).parents('li').remove()
    Observer.fire('delMsg', {
      num: -1
    })
  })
})()
