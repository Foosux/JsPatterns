/**
 * add模块
 */
(function(){
  $('#add').on('click', function(){
    // 发布 addMsg 动作
    Observer.fire('addMsg', {
      msg: $('textarea').val(),
      num: 1
    })
  })
})()
