/**
 * @Description:
 * @author Shicheng Xu
 * @date 2021/9/12
 */

/**
 * 当使用以下命令调用 Node.js 应用程序时，可以传入任意数量的参数：
 * node app.js
 * 参数可以是独立的，也可以具有键和值
 */

// eg_1：node app.js joe
// eg_2: node app.js name = job
/**
 * 这会改变在 Node.js 代码中获取参数值的方式
 * 获取参数值的方法是使用 Node.js 中内置的 process 对象
 * 它公开了 argv 属性，该属性是一个包含所有命令行调用参数的数组
 * 第一个参数是 node 命令的完整路径
 * 第二个参数是正在执行的文件的完整路径
 * 所有其他的参数从第三个位置开始
 */

// 可以使用循环迭代所有参数（包括 node 路径和 文件 路径）
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
})

// 也可以通过创建一个排除了前两个参数的新数组来仅获取其他的参数
const args = process.argv.slice(2)

// 如果参数没有索引名称，eg：
// node app.js joe
// 则可以这样访问
const args = process.argv.slice(2)
args[0]

// 如果是这种情况的话：
// node app.js name = joe
// 则 args[0] 是 name = joe，需要对其进行解析。最好的方法是使用 minimist 库，该库有助于处理参数
const args = require('minimist')(process.argv.slice(2))
args['name'] // joe

// 但是需要在每个参数名称之前使用双破折号
// node app.js --name=joe

