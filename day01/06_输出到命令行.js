// 1. 使用控制台模块的基础输出
/**
 * Node.js 提供了 console 模块，该模块提供了大量非常有用的与命令行交互的方法
 * 基本上与浏览器中 console 对象相同
 * 最基础、最常用的方法是 console.log() 该方法会打印传入到控制台的字符串
 */

// 如果传入对象，则它会呈现为字符串，可以传入多个变量到 console.log
// const x = 'x'
// const y = 'y'
// console.log(x, y);

// Node.js 会全部打印出来，也可以通过传入变量和格式说明符来格式化用语
console.log('我的%s已经%d岁', '猫', 2);
console.log('%o', Number);
/**
 * %s 会格式化变量的字符串
 * %d 会格式化变量为数字
 * %i 会格式化变量为其整数部分
 * %o 会格式化变量为对象
 */

// 2、清空控制台
console.clear(); // 会清除控制台

// 3、元素计数
console.count();

const x = 1
const y = 2
const z = 3
console.count('x 的值为' + x + '且已经检查了几次？');
console.count('y 的值为' + y + '且已经检查了几次？');
console.count('z 的值为' + z + '且已经检查了几次？');
// count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数
// 数苹果和橙子
const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.log(fruit);
})
apples.forEach(fruit => {
  console.log(fruit);
})

// 4、打印堆栈踪迹
// 在某些情况下，打印函数的调用堆栈踪迹很有用，可以回答以下问题：如何到达代码的一部分？
// 可以使用 console.trace() 实现
const function1 = () => console.trace()
const function2 = () => function1()
function2()

// 5、计算耗时
// 可以使用 time() 和 timeEnd() 轻松地计算函数运行所需地时间：
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()');
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

// 6、stdout 和 stderr
/**
 * console.log 非常适合在控制台中打印消息。这就是所谓的标准输出（或称为 stdout）
 * console.error 会打印到 stderr 流
 * 它不会出现在控制台中，但是会出现在错误日志中
 */

// 7、为输出着色
// 可以使用转义序列在控制台中为文本到输出着色。转义序列是一组标识颜色到字符
// eg：
console.log('\x1b[33m%s\x1b[0m', 'hello');




