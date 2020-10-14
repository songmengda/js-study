/*
 * @Author: S.M.D
 * @Date: 2020-10-13 09:57:14
 * @LastEditors: S.M.D
 * @LastEditTime: 2020-10-13 10:44:24
 * @Description: file content
 */
let http = require('http');
let url = require('url');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': "text/html;charset='utf-8'" });
    res.write('http+url');
    res.end();
    if (req.url != '/favicon.ico') {
      const query = url.parse(req.url, true);
      console.log('type=', query.query.type);
      console.log('name=', query.query.name);
      console.log('uuid=', query.query.uuid); //add
    }
  })
  .listen(8881);
