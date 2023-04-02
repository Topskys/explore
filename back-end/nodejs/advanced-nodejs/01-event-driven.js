/*
 * @Author: Topskys
 * @Date: 2023-03-24 10:50:03
 * @LastEditTime: 2023-03-25 19:05:06
 */
const Events = require('events');

const event = new Events();

event.on('事件1', () => console.log('事件1执行了1')) // 订阅事件
event.on('事件1', () => console.log('事件1执行了2')) // 订阅事件


event.emit('事件1') // 触发事件