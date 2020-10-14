/*
 * @Author: S.M.D
 * @Date: 2020-10-13 10:27:30
 * @LastEditors: S.M.D
 * @LastEditTime: 2020-10-13 10:38:05
 * @Description: file content
 */

// supervisor 会不停的 watch 应用下面的所有文件，发现有文件被修改，就重新载入程序文件这样就实现了部署，修改了程序文件后马上就能看到变更后的结果。
// 安装supervisor  npm i -g supervisor

/**
    cd 至当前目录  执行supervisor http-4-url.js

    然后不管是访问 链接http://127.0.0.1:8881/?type=1&name=2&uuid=smd   还是修改http-4-url.js中的代码  node都能自动执行   不需要通过右键run来启动了
 */
