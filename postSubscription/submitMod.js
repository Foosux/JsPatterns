// 提交模块， 订阅/触发 countEve/addInfoEve 事件

let btnEle = document.getElementById('btn')

btnEle.addEventListener('click', function () {
  let val = document.getElementById('ta').value
  let opts = {
    val,
    num: 1
  }
  Observer.opts = opts
  Observer.dispatchEvent(countEve)
  Observer.dispatchEvent(addInfoEve)
})
