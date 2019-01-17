// 内容模块, 发布 addInfoEve 事件

let addInfoEve = new Event("addInfoEve")

Observer.addEventListener("addInfoEve", function(e){
  let infoEle = document.getElementById('info')
  let ele = document.createElement('div')
  ele.innerText = e.target.opts.val
  infoEle.appendChild(ele)
})
