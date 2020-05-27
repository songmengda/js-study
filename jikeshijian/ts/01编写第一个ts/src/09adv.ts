// 交叉类型与联合类型

// 1.交叉类型
interface DogInsterface {
  run(): void
}

interface CatInsterface {
  jump(): void
}
let pet: DogInsterface & CatInsterface = {
  run() { },
  jump() { }
}

let lianheleixing: number | string = '1'


// 2.联合类型
class ww implements DogInsterface {
  run() { }
  eat() { }
}
class mm implements CatInsterface {
  jump() { }
  eat() { }
}
enum Master { boy, gril }

function getpet(master: Master) {
  let pet = master === Master.boy ? new ww() : new mm()
  // pet.eat() 取所有类型的并集
  return pet
}

interface Square {
  king: 'square',
  size: number
}
interface Rectangle {
  king: 'rectangle',
  length: number,
  width: number
}
interface Cir {
  king: 'cir',
  name: string
}

type Shape = Square | Rectangle | Cir // 联合类型
function area(s: Shape) {
  switch (s.king) {
    case 'square':
      return s.size;
    case 'rectangle':
      return s.length
    case 'cir':
      return s.name
    default:
      return ((e: never) => { throw new Error(e) })(s)  // 如果没有default分支的代码   cir会被忽略   
  }
}


// 索引类型

let duixiang = {
  a: 1,
  b: 2,
  c: 3
}
function getvalues(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
console.log(getvalues(duixiang, ['a']))
console.log(getvalues(duixiang, ['y']))

// keyof T
interface Suoyin {
  a: number,
  b: string
}
let key: keyof Suoyin // key 就是a和b的联合类型
//索引访问操作符 T[k]
let value: Suoyin['a']
// 泛型约束 T extends U


function getvalue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getvalue(duixiang, ['a']))
// console.log(getvalue(duixiang, ['y'])) 报错



// 映射类型

interface yingsheobj {
  a: string,
  b: number,
  c: boolean
}
type ReadonlyYingshe = Readonly<yingsheobj> // 只读类型

type partailYingshe = Partial<yingsheobj> // 可选类型

type pickYingshe = Pick<yingsheobj, 'a' | 'b'> // 抽取属性

type RecordYingshe = Record<'e' | 'f' | 'g', yingsheobj>

// 映射类型是一种预先定义的类型接口



// 条件类型
// T extends U ? X : Y  如果类型T 可以被赋值给类型U 那么结果类型就是 X   否则就是Y类型

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends null ? 'null' :
  T extends Function ? 'function' :
  'obj';

type T1 = TypeName<string>  // 'string'
type T2 = TypeName<string[]>

// （A|B） extends U ? X : Y    T是联合类型

type T3 = TypeName<string | string[]>  // 利用这个可以实现类型的过滤


type Diff<T, U> = T extends U ? never : T


type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>



//  Exclude<T,U>  // 从类型T中过滤掉可以给赋值给类型U的类型
//  NonNullable<T>
//  Extract<T,U>  // 从类型T中抽取出可以赋值给类型U的类型
type T5 = Extract<'a' | 'b', 'a'>  // 'a'
type T6 = Exclude<'a' | 'b', 'a'>  // 'b'

// ReaturnTyoe<T>
type T7 = ReturnType<() => string>