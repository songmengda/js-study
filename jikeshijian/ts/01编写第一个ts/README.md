全局安装ts  npm install script -g

全局会有tsc命令    可以通过tsc -h 查看有哪些可用命令
通过npm init 创建package.json
通过tsc init 创建tsconfig.json

创建src/index.ts

```ts
var hello: string = 'hello ts'
```

执行tsc ./src/index.ts即可编译生成index.js文件
```js
var hello = 'hello ts';
```

----------


为ts创建webpack构建环境

安装依赖   cnpm i webpack webpack-cli webpack-dev-server   从git 库中找到build文件夹 使用期配置好的webpack
安装依赖   sudo cnpm i ts-loader html-webpack-plugin clean-webpack-plugin webpack-merge typescript

新建src/tpl/index.html 

package.json
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
    "build": "webpack --mode=production --config ./build/webpack.config.js"
  },
```
修改index.ts
```ts
let hello: string = 'hello ts'
let app = document.querySelector('#app') as HTMLInputElement
app.innerHTML = hello
console.log(hello)
```

ES6的数据类型

- Boolean Number String Array Function Object Symbol undefined null

TypeScript的数据类型
 
- Boolean Number String Array Function Object Symbol undefined null void any never 元组 枚举 高级类型



