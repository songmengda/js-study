/*
 * @Author: S.M.D
 * @CreatDate: 2020-10-19  20:51:32
 * @LastEditors: S.M.D
 * @Description: fs-2
 */

// 1.判断有没有upload目录。没有创建这个目录。   （图片上传）
let fs = require('fs')
let path = require('path')
let url = require('url')
/**
 *
 *
 * */

fs.stat('upload', (err, stats)=>{
  if(err){
      fs.mkdir('upload',(err)=>{
          if(err) {
              console.log('err创建失败', err)
              return false
          }
          console.log('创建成功')
      })
  }  else {
    console.log('已经存在');
    console.log(stats.isDirectory());
  }
})

// 2. 找出html目录下面的所有的目录，然后打印出来
// let filesArr = []
// fs.readdir('html', (err,files)=>{
//     if(err){
//         console.log('err=:', err)
//     } else {
//         console.log(files);
//         (function getFiles(i){
//
//             if(i === files.length){
//                 console.log('filesArr:',filesArr);
//                 return false
//             }
//             fs.stat(`html/${files[i]}`, (err,stats)=>{
//                 if(err){
//                     console.log('err2', err)
//                 } else {
//                    if(stats.isDirectory()){
//                        filesArr.push(files[i])
//                    }
//                    getFiles(i+1)
//                 }
//             })
//         })(0)
//     }
// })

// 3. 找出html目录下面的所有的文件，然后打印出来
let filesList = [];
(function fileDisplay (dir, fileArr){
    let files = fs.readdirSync(dir)
    console.log('files', files)
    files.forEach((item)=>{
        let fullPath = path.join(dir, item)
        let stat = fs.statSync(fullPath)
        if(stat.isDirectory()){
            fileDisplay(path.join(dir ,item), fileArr)
        } else {
            filesList.push(fullPath)
        }
    })
})('html', filesList);
console.log('filesList', filesList )

//错误写法
//fs.readdir('html',function(err,files){
//             if(err){
//                    console.log(error);
//
//             }else{  /*判断是目录还是文件夹*/
//                 console.log(files);  /*数组*/
//
//                 for(var i=0;i<files.length;i++){
//
//                     console.log(files[i]);
//                     fs.stat(files[i],function(error,stats){  /*循环判断是目录还是文件  ---异步 错误写法*/
//
//                            console.log(files[i]);
//                     })
//                 }
//
//             }
//
//
//})
//
