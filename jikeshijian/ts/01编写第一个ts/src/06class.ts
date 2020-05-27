
// 抽象类与多态
abstract class Animal {
  eat() {
    console.log('吃')
  }
  abstract sleep(): void // 抽象方法
}
// let animal06 = new animal06() 抽象类不能实例化 只能去继承

class Dog06 extends Animal {
  constructor(public name: string) {
    super()
    this.name = name
    this.eat()
  }
  run() { }
  sleep() {
    console.log('sleep dog')
  }
}
let dog06 = new Dog06('wangcai')
dog06.sleep()



// 多态---在父类中定义，在子类有不同的实现
class Cat extends Animal {
  constructor() {
    super()
  }
  sleep() {
    console.log('sleep cat')
  }
}
let cat06 = new Cat()
cat06.sleep()

let animal: Animal[] = [dog06, cat06]
console.log(animal)
animal.forEach(i => {
  i.sleep()
})


// this类型 链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
let workflow = new WorkFlow()
workflow.step1().step2()


class Myflow extends WorkFlow {
  next() {
    return this
  }
}

new Myflow().next().step1().next().step2()
