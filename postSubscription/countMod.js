// 记数模块，发布 countEve 事件

let countEve = new Event("countEve")

Observer.addEventListener("countEve", function(e){
  let countEle = document.getElementById('count')
  countEle.innerText = +count.innerText + e.target.opts.num
})
