/*
 * @Author: S.M.D
 * @Date: 2020-10-12 21:57:32
 * @LastEditors: S.M.D
 * @LastEditTime: 2020-10-12 22:24:24
 * @Description: file content
 */
// 1.引入http
let http = require('http');
// 2.通过.createServer方法启动一个服务
let server = http.createServer((req, res) => {
  // req参数表示请求   res表示响应
  // 发送 HTTP 头部
  // HTTP 状态值: 200 : OK
  //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf-8
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.write('nodejs-2');
  res.end('哈哈啊啊');
});

server.listen(8881);

//   3.vscode使用右键code Run插件运行  然后在浏览器中访问http://127.0.0.1:8881/ 看到输出信息
