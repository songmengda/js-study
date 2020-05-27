// 工程篇


// 声明合并
interface A {
  x: number, // 变量类型  发生合并
  foo(bar: number): number; // 函数类型的 会发生重载
}

interface A {
  y: string,
  foo(b: string[]): string[]
}

let a: A = {
  x: 1,
  y: 'a',
  foo(x: any) {
    return x
  }
}


// 编写声明文件   以jquery为例子
// npm i jquery 安装依赖
// 直接编写  import ￥ from ‘jquey’会报错


// npm i @types/jquery 安装文件声明包





// 配置tsconfig.json
let aa = {
  "files": [ // 文件选项 编译器需要编译的单个文件列表
    "src/11a.ts"
  ],
  "include": [ // 文件选项 编译器需要编译的文件或目录
    "src"
  ],
  "exclude": [ // 文件选项 编译器排除哪些文件或目录不编译
    "src/tpl"
  ]
}



