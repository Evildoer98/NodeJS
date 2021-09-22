/**
 * @Description:
 * @author Shicheng Xu
 * @date 2021/9/12
 */

// 引入 http 模块
const http = require('http')
// 定义主机号
const hostname = '127.0.0.1'
// 定义端口号
const port = 3000
// 使用http.createServer() 方法会创建新的 http 服务器并返回它
// 服务器被设置为监听指定的端口和主机号。当服务器就绪后，回调函数就会被调用
// 每当接收到新到请求时，request 事件会被调用，并提供两个对象：一个请求 http.IncomingMessage 对象 和一个响应 http.ServerResponse 对象
// 第一个对象提供了请求到详细信息
// 第二个对象用于返回数据给调用方
const server = http.createServer((req, res) => {
  // 设置 statusCode 属性为 200，以表明响应成功
  res.statusCode = 200
  // 设置 Content-Type 响应头
  res.setHeader('Content-Type', 'text/plain')
  // 关闭响应，添加内容作为 end() 到参数
  res.end('hello Evildoer')
})
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`);
})