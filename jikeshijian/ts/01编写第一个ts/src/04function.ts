// ts中的函数定义
function a0(x: number, y: number) {
  return x + y
}

// let a1: (x: number, y: number) => number;

// type a2 = (x: number, y: number) => number;

interface a3 {
  (x: number, y: number): number
}
console.log(a0(1, 2))



// 可选参数的定义
function a4(x: number, y?: number) {
  return x
}
console.log(a4(2))

function a5(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(a5(1, undefined, 2))

function a6(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(a6(1, 1, 1, 1))


// 函数重载
function a7(...rest: number[]): number;
function a7(...rest: string[]): string;
function a7(...rest: any): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    // return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log('a7', a7(1, 2))
console.log('a7-2', a7('a', 'b'))
