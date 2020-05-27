// 泛型的概念
// 一个打印函数
function log0(value: string): string {
  console.log(value)
  return value
}
// 函数重载
function log1(value: string): string;
function log1(value: string[]): string[];
function log1(value: any) {
  console.log(value)
  return value
}

// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
function log<T>(value: T): T {
  console.log(value)
  return value
}
// 在调用的时候
log<string[]>(['a', 'b']) // 或者 
log([1, 2])

// 除了使用泛型定义函数  还可以使用泛型 定义函数的类型
// type Log = <T>(value: T) => T
// let mylog: Log = log


// 泛型接口
interface Log<T> {
  (value: T): T
}
let mylog: Log<number> = log
mylog(1)

// 泛型理解为代表类型的参数


// 泛型类与泛型约束
class Doog<T>{
  run(value: T) {
    console.log('aaa', value)
    return value
  }
}
let doog1 = new Doog<number>()  // doog1这个实力就会受到泛型的约束
doog1.run(1) // 必须传入数字
let doog2 = new Doog()
doog2.run('1')


interface Length {
  length: number
}
// 泛型约束  本身没有这个length属性  定义一个接口    让类型T继承该接口
class Dg<T extends Length>{
  run(value: T) {
    console.log(value, value.length)
    return value
  }
}

// 泛型的好处
/**
 * 函数和类可以轻松的支持多种类型 增强程序的扩展性
 *
 * 不必写多条函数重载 冗长的联合类型声明 增强代码可读性
 *
 * 灵活控制类型之间的约束
 */


/**
 * 类型检查机制
 *
 *ts编译器在做类型检查时 ， 所秉承的一些原则 以及表现出的一些行为
 *作用：辅助开发
 *
 * 1.类型推断
 * 不需要指定变量的类型（函数的返回值类型）  ts会根据一些规则自动推断出其类型
 * 。基础类型推断
 * 。最佳通用类型推断
 * 。上下文类型推断
 *
 *
 * 2.类型兼容性
 *
 * 3.类型保护
 * ts能够在特定的区块中保证变量属于某种确定的类型
 * 可以在此区块中放心的使用某个属性
 *
 *
 * 1.使用类型断言   as
 *
 * 2.使用instanceof
 *
 * 3. 使用in
 *
 * 4. 使用 type of
 *
 *
 *
 */


