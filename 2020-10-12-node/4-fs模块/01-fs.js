
/*
 * @Author: S.M.D
 * @CreatDate: 2020-10-15  20:52:58
 * @LastEditors: S.M.D
 * @Description: fs模块
 */

/**
 * 1.fs.stat  检测是文件还是目录
 *
 * 2.fs.mkdir 创建目录
 *
 * 3.fs.writeFile 创建写入文件
 *
 * 4.fs.appendFile 追加文件
 *
 * 5.fs.readFile 读取文件
 *
 * 6.fs.rename 重命名
 *
 * 7.fs.rmdir 删除目录
 *
 * 8.fs.unlink 删除文件
 *
 * 9.fs.createReadStream 从文件流中读取数据
 *
 * 10.fs.createWriteStream 写入文件
 *
 *
 * */


let fs = require('fs')

/***
 * 1.检测 demo是文件还是目录
 *
 *  通过fs.stat('目录、文件字符串',callback)
 *
 *  在node中回调函数的第一个参数是err
 *  第二个参数是stats
 *
 * stats.isFile() 判断是否是文件
 *
 * stats.isDirectory() 判断是否是目录
 *
 * */
// fs.stat('demo/index.html',(err, stats) => {
//     if (err) {
//         console.log('err', err)
//     } else {
//         console.log('stats', stats)
//         console.log('文件', stats.isFile())
//         console.log('目录', stats.isDirectory())
//     }
// })

/**
 * 2.创建目录
 *  通过fs.mkdir('目录名称',callback) 创建目录
 *
 *  callback第一个参数是 err 创建失败会有信息，成功时没提示
 *
 * */
// fs.mkdir('demo01',(err => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('创建成功');
//     }
// }))

/***
 * 3.写入文件
 * 通过fs.writeFile()
 *
 file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
 data <string> | <Buffer> | <TypedArray> | <DataView>
 options <Object> | <string>
 encoding <string> | <null> 默认值: 'utf8'。
 mode <integer> 默认值: 0o666。
 flag <string> 参见文件系统 flag 的支持。 默认值: 'w'。
 callback <Function>
 err <Error>
 当 file 是文件名时，则异步地写入数据到文件（如果文件已存在，则覆盖文件）。 data 可以是字符串或 buffer。
 当 file 是文件描述符时，则其行为类似于直接调用 fs.write()（建议使用）。
 *
 * 创建一个index.js 并往里边写var str = "NODE"
 * */
// fs.writeFile('demo01/index.js','var str = "NODE"',(err => {
//     if(err){
//         console.log(err)
//     }
// }))


/***
 * 4.追加文件
 * 通过fs.appendFile()
 *
 * */
// fs.appendFile('demo01/index.js','\nvar name = "二哈"',(err => {
//     if(err){
//         console.log(err);
//     } else {
//        console.log('写入成功')
//     }
// }))



/***
 * 5.读取文件
 * fs.readFile()
 * 读取出来的data是二进制流
 * <Buffer 76 61 72 20 73 74 72 20 3d 20 22 4e 4f 44 45 22 0a 20 76 61 72 20 6e 61 6d 65 20 3d 20 22 e4 ba 8c e5 93 88 22 0a 76 61 72 20 6e 61 6d 65 20 3d 20 22 ... >
 *
 * 加第二个参数'utf-8'  或者 使用data.toString()
 * */
// fs.readFile('demo01/index.js', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })


/****
 * 6.文件重命名
 * fs.rename()
 *
 * */
// fs.rename('demo01/index2.js','demo01/index.js', err => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('修改文件名称')
//     }
// })



/***
 * 7.读取目录
 * fs.readdir()
 * 输出 [ 'index', 'index.css', 'index.html', 'index.js' ] 既有文件又有目录
 *
 *
 * */
// fs.readdir('demo01', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files)
//     }
// })


/***
 * 8.删除文件
 * fs.unlink()
 * */
// fs.unlink('demo01/index.css', err => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('删除成功')
//     }
// })


/**
 * 9.删除目录
 * fs.rmdir()  只能删除目录
 * */
// fs.rmdir('demo01/index', err => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('删除文件夹成功')
//     }
// })


/**
 * 10.从文件流中读取数据
 * fs.createReadStream() 入参为文件地址
 *
 * 通过on()来监听事件  事件有data , end , error
 *
 *
 *
 * */
// let rs =  fs.createReadStream('demo01/data.json')
// console.log(rs)
// let count = 0;
// let str=''
//
//
// rs.on('data', (chunk)=>{
//     console.log(`${++count}接收到${chunk.length}`)
//     str+= chunk
// })
// rs.on('end',()=>{
//     console.log('结束--')
//     console.log(count);
//     console.log(str);
// })
//
// rs.on('err', onerror=>{
//     console.log(onerror)
// })


/***
 * 11.写入文件
 * fs.createWriteStream()
 *
 * */
// let str = '自定义一个字符串'
// let ws = fs.createWriteStream('demo01/text.txt')
// ws.write(str, 'utf-8')
// ws.end()
// ws.on('finish', ()=>{
//     console.log('写入完成')
// })
//
// ws.on('err', (err)=>{
//     console.log(err.stack)
// })
