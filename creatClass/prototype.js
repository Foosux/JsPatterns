// 原型模式：共享类的属性和方法 && 将复杂耗时操作共享而非重新创建

var PicSilder = function (imgArr, container) {
  this.imgArr = imgArr
  this.container = container
}
PicSilder.prototype.creatImg = function () {}
PicSilder.prototype.changeImg = function () {}
