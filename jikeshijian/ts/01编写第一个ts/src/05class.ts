
// 类的基本实现
class Dog {
  constructor(name: string) {
    this.name = name
  }
  name: string
  run() {

  }
}
// “类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
console.log(Dog.prototype)

let dog = new Dog('fugui')
console.log(dog)



// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
}

// 类的成员修饰符
class Dogg {
  constructor(name: string) {
    this.name = name
  }
  public name: string
  protected color: string = ''  // 受保护的成员只能在类和子类中访问 不能在实例中访问
  readonly legs: number = 1 // 只读属性  不可被修改
  static aaa: string = 'aaa' // 静态属性  子类不能使用   只能在父类或使用父类的名字调用
  run() {

  }
  private pri() {

  }
}
let dogg = new Dog('hsq')
// dogg.pri() 私有的 实例不能调用
class ErHa extends Dogg {
  constructor(name: string) {
    super(name)
    // this.pri() 也不允许在子类中使用
  }
}


