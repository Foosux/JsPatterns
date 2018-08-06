// 建造者模式：复杂对象 构建层与表现层相分离（关注过程）

var Human = function (params) {
  this.skill = params && params.skill || '保密'
  this.hb = params && params.hb || '保密'
}

var Named = function (name) {
  this.wholeName = name
  if (~name.indexOf(' ')) {
    this.firstName = name.split(' ')[0]
    this.secondName = name.split(' ')[1]
  }
}
Named.prototype.getName = function () {
  return this.wholeName
}
Named.prototype.setName = function (newName) {
  this.wholeName = newName
}

var Work = function (work) {
  switch (work) {
    case 'UI':
      this.work = '设计师'
      break
    case 'UE':
      this.work = '交互设计师'
      break
  }
}

// 创建
var Person = function (name, work, skill) {
  var _person = new Human({skill})
  _person.name = new Named(name)
  _person.work = new Work(work)
  return _person
}
