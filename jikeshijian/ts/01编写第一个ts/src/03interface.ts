// 函数类型接口
// 通过数据类型定义函数
let ad: (x: number, y: number) => number
//通过接口定义
interface Add {
  (x: number, y: number): number
}

type Ad = (x: number, y: number) => number

let tj: Ad = (a, b) => a + b


// 混合接口
interface Lib {
  (): void;
  version: string;
  do(): void
}



function getLib() {
  let lib: Lib = (() => { }) as Lib
  lib.version = "1.0.1"
  lib.do = () => { }
  return lib
}

let lib1 = getLib()
lib1()
lib1.do()