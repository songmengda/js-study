
// ts对象类型接口
interface List {
  id: number,
  name: string
}
interface Result {
  data: List[]
}

interface List2 {
  id: number,
  name: string,
  age?: number, // 可选属性
  readonly ln: string // 只读属性  不允许修改
}
function render(result: Result) {
  result.data.forEach((item, index) => {
    console.log('valueId', item.id, 'valueName', item.name)
  })
}
let result = {
  data: [
    {
      id: 0,
      name: '巴基',
      aaa: '6a'
    },
    {
      id: 1,
      name: '多弗朗明哥'
    }
  ]
}
render(result)  // 允许

// render({
//   data: [
//     {
//       id: 0,
//       name: '巴基',
//       aaa: '6a' // 如果把resylt的值 直接交给render函数 则不允许
//     },
//     {
//       id: 1,
//       name: '多弗朗明哥'
//     }
//   ]
// })

// render({ // 允许  （类型断言）
//   data: [
//     {
//       id: 0,
//       name: '巴基',
//       aaa: '6a' // 如果把resylt的值 直接交给render函数 则不允许
//     },
//     {
//       id: 1,
//       name: '多弗朗明哥'
//     }
//   ]
// } as Result)

// render(<Result>{ // 允许 与上边等价  但是在react中会有歧义  所以推荐使用as 语法
//   data: [
//     {
//       id: 0,
//       name: '巴基',
//       aaa: '6a' // 如果把resylt的值 直接交给render函数 则不允许
//     },
//     {
//       id: 1,
//       name: '多弗朗明哥'
//     }
//   ]
// })



// 通过索引去定义一个接口   不确定里面有没有值
interface StringArray { // 定义一个字符串类型的数组接口
  [index: number]: string
}

let chars: StringArray = ['a', 'b']
console.log(chars)

interface Names {
  [x: string]: string,
  // y:number 不允许
  [y: number]: string
}

let name1: Names = {
  x: '1'
}
console.log(name1)


/**
1、接口约束对象 函数 类的结构
2、对象的接口如何定义
3、关键字 interface
4、作用 ：规范对象的属性 属性的类型 属性值的类型
5、类型断言 用as 或者<>的形式 ，后者在react中使用会出问题
6、可选属性 通过？来设置
7、只读属性 通过readonly 来设置
8、当不确定接口中属性个数时需要使用 索引签名
9、索引签名包括字符串索引签名和数字索引签名
10、当接口中定义了一个索引后，例如设置了 【x:string】= string，就不能设置y：number了。
因为设置了【x:string】= string相当于这个接口的字符串索引返回值都是字符串，而y：number违背这一原则，冲突了。反过来 如果定义了【x:string】=Number, 就不能设置 y:string了。
11、 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
因为 数字索引或转化为字符串索引，而转化的这部分索引对应的值的类型范围 超过了 字符串索引类型的范围，就会报错，相当于超出范围。
 */