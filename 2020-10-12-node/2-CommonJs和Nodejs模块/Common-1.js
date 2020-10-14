
// 什么是CommonJs

/**
    Js是一个强大的面向对象语言，他有很多快速高效的解释器，但是Js标准定义的API是为了构建基于浏览器的应用程序，并没有制定一个用于更广泛的应用程序的标准库
 。CommonJs规范的提出就是为了弥补当前Js没有标准的缺陷，而不只是停留在小脚本程序的阶段，用CommonJs编写的应用，不禁可以利用Js开发客户端程序，还可以编写：
 1.服务器端JS应用（nodejs）
 2.命令行工具
 3.桌面图形界面应用程序

 CommonJS是模块化的标准，nodejs是CommonJS的实现。


    在Node中，模块分为两类：
 一：Node自身提供的模块成为核心模块
    核心模块部分在Node源代码的编译过程中，编译进了二进制执行文件，在Node进程启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，文件定位和编译执行这两个步骤可以省略
 ，并且路径分析中优先判断，所以他的加载速度是最快的，如：HTTP模块，URL模块，Fs模块都是Node内置的核心模块，可以直接使用。
 二：由用户编写的模块：文件模块
    文件模块则是在运行时动态加载，需要完整的路径分析，文件定位，编译执行，速度相比核心模块稍微慢，但是用的非常多



 自定义模块的规定：
    1.将公共的功能抽离成一个单独的js文件作为一个模块，默认情况下这个模块里的方法或者属性，外面无法访问，除非通过exports 或者module.exports暴露属性或方法
    2.使用时通过require的方式引入这个模块
 */

let toolsStr = require('./tools')
let tolls2Str = require('./tools-2')
let toolModules = require('tools')
let tools2Modules = require('tools2')


/***
 * 通过module.exports导出的模块可以直接使用
 *
 * 通过exports.属性 导出的模块需要使用导入变量.属性使用
 *
 * node_modules中的依赖 可以直接require  项目中的模块要使用相对路径导入
 *
 * 如果是node_modules中的文件夹中的模块  需要是index命名，否则需要创建package.json来指定mian指向具体的模块文件
 *
 *
 * */
console.log('toolsStr =', toolsStr )
console.log('tolls2Str =', tolls2Str.str)

console.log('toolModules =', toolModules)
console.log('tools2Modules =', tools2Modules)
