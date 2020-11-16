
/*
 * @Author: S.M.D
 * @CreatDate: 2020-10-15  16:39:12
 * @LastEditors: S.M.D
 * @Description: npm
 */

/**
 * 使用第三方依赖包 silly-datetime
 *
 * 1.安装  npm i silly-datetime
 * 2.引入 require('silly-datetime')
 * 3.使用  sd.format(new Date(),'YYYY-MM-DD')
 *
 *
 *
 *
 *
 * 一个标准的CommonJs规范包包含
 * 完全符合 CommonJs 规范的包目录一般包含如下这些文件。
     • package.json :包描述文件。
     • bin :用于存放可执行二进制文件的目录。
     • lib :用于存放 JavaScript 代码的目录。
     • doc :用于存放文档的目录。
 *
 * */


/***
 * 以后我们安装依赖  应该将下载的依赖写入package.json中
 *
 * 使用 npm init 生成
 *
 * npm install md5-node --save    或者   npm install md5-node --save-dev
 *
 * 区别：
 * npm install md5-node --save       写入到package.json 里面的  dependencies  配置当前程序所依赖的其他包。
 * npm install md5-node --save-dev   写入到package.json 里面的  devDependencies 配置当前程序所依赖的其他包，只会下载模块，而不下载这些模块的测试 和文档框架
 *
 "dependencies": {

    "ejs": "^2.3.4",

    "express": "^4.13.3",

    "formidable": "^1.0.17"

  }



 ^表示第一位版本号不变，后面两位取最新的
 ~表示前两位不变，最后一个取最新
 *表示全部取最新

    https://npm.taobao.org/
 * 淘宝 NPM 镜像 是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频 率目前为 10 分钟 一次以保证尽量与官方服务同步。
 * npm install -g cnpm --registry=https://registry.npm.taobao.org
 *
 *
 *
 *
 *
 *
 *
 *
 * */


let sd = require('silly-datetime')
let http = require('http');

http.createServer(function (req,res){
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    let d = sd.format(new Date(),'YYYY-MM-DD');
    res.write('node-'+d);
    res.end();
}).listen(8881);

