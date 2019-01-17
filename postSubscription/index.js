/*
 * 发布订阅模式
 * 1: 基于事件解耦代码
 *
 * 注意事项：
 * 1: 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 (比如 XMLHttpRequest)
 *
 * 应用场景:
 * 1: 需要模块化开发的场景
 */

// 1、创建自定义事件，类似 EventBus
let Observer = new XMLHttpRequest()
