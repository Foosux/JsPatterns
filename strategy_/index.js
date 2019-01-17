/*
 * 策略模式
 * 1: 建立 key-val 关系对象，来节约变量和代码
 *
 * 应用场景:
 * 1: switch 的场景
 */

var countFn = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  }
}

var count = function (level, salary) {
   return countFn[level](salary)
 }

count('S', 10000)  // 40000
count('A', 10000)  // 30000
count('B', 10000)  // 20000
