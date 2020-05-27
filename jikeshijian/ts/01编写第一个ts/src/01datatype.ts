// 原始数据类型
let boll: boolean = false // 一经定义 其类型就不能改变
let num: number = 123
let str = 'yes'
// str=123


// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [2, 1, 3] //ts提供的泛型接口
let arr3: Array<number | string> = ['1', 2, 3]
let arr4: (number | string)[] = ['2', 1, 3]
// arr1=[1,'2']

// 元组类型
let tuple: [number, string] = [1, '2'] // 限制元素的类型和个数
/**
tuple=[1,'2','1']
tuple.push(3)  // 强烈不建议使用
console.log(tuple) //[1,'2',3]
console.log(tuple[2]) // 向元组中添加的可以看到  但是不能访问
 */


// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number // 定一个函数类型
compute = (a, b) => a + b // 定义函数的实现
console.log(compute(1, 3)) //4


//对象
let obj: object = { x: 1, y: 2 }  // 定义一个对象 
// obj.x=3 // 这样是不允许的
let obj1: { x: number, y: number } = { x: 1, y: 2 } // 定义一个对象 并制定元素的类型
obj1.x = 3 // 这样是允许的


// symbol
let s1: symbol = Symbol()
let s2 = Symbol() // 这两个变量是不相等的


//undefined null
let un: undefined = undefined
let nu: null = null


// void 
let noReturn = () => { } // 没有任何返回值的类型


// any  不指定类型  就是any
let x // 默认是any类型
x = 1
x = '2'


// never
let error = () => { // 返回类型是never
  throw new Error('出错了')
}
let endless = () => { // 返回类型是never
  while (true) {

  }
}


// 枚举类型 // 枚举类型的值一经定义 是不可以被修改的(只读)
// 数字枚举
enum Role { // 使用enum关键字直接定义的枚举  角标从0开始   也可以指定第一个的值 后面的值会依次递增 数字的枚举的实现原理 是反向映射
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log('数字枚举', Role.Developer)
//字符串枚举
enum Msg { // 字符串枚举不是反向映射
  Y = 'yes',
  N = 'no'
}
console.log('字符串枚举', Msg.Y)
//异构枚举
enum Answer {
  a,
  b = '字符串'
}
console.log('异构枚举', Answer.b)
// 枚举成员
enum Char {
  //const
  a,
  b = Char.a,
  c = 1 + 3,
  //computed
  d = Math.random(),
  e = '123'.length
}
// 常量枚举
const enum Month { // 使用场景 ：当我们不需要对象  而只需要对象值的时候 
  Jan,
  Feb,
  Mar
}
console.log([Month.Jan, Month.Feb, Month.Mar])
// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = "banana" }
let e: E = 3
let f: F = 3
// e与f不可以进行比较 只有相同类型的可以进行比较


