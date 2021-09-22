/**
 * @Description:
 * @author Shicheng Xu
 * @date 2021/9/22
 */

/**
 *  node.js 提供了 readline 模块来执行一下操作：每次一行地从从可读流获取输入
 *  eg：process.stdin 流，在 Node.js 程序执行期间该流就是终端输入
 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readline.question(`what,s your name？`, name => {
  console.log(`I,m ${name}`);
  readline.close()
})

/**
 * 询问用户名，当用户输入了文本并且按下回车，则会发送问候语
 * question() 方法会显示第一个参数（即问题），并等待用户的输入。当按下回车键时，则它会调用回调函数
 * 在此回调函数中，关闭了 readline 接口
 */

/**
 * 如果需要密码，这最好不要回显密码，而是显示 * 符号
 * 最简单当方式是使用 readline-sync 包
 * Inquirer.js 包则提供了更完整、抽象的解决方案
 */

// npm install inquirer
const inquirer = require('inquirer')
var questions = [
  {
    type: 'input',
    name: 'name',
    message: 'what,s your name?'
  }
]
inquirer.prompt(questions).then(answers => {
  console.log(`hello ${answers['name']}`);
})

// inquirer.js 可以执行很多操作，诸如：多项选择、展示单选按钮、确认等