// 类与接口的关系
interface Human {
  name: string
  eat(): void
}
// 类实现接口  使用 implements 关键字 并且在实现接口时  需要实现这个接口中所有的关键字
// 接口只能约束类的共有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() { }
}

interface Man extends Human {
  run(): void
}
interface Chiled {
  cry(): void
}

interface Boy extends Man, Chiled { }
let boy: Boy = {
  name: '',
  eat() { },
  run() { },
  cry() { }
}

class Auto {
  state = 1
  // private state2=1
}
interface AutoInsterface extends Auto {

}
class C implements AutoInsterface {
  state = 2
}
// 接口在抽离类的成员的时候  不仅抽离了公共成员    而且抽离了私有成员和受保护成员
class Bus extends Auto implements AutoInsterface {

}


// 接口之间可以相互继承  类之间也可以相互继承   接口可以通过类来实现 但是只能约束类的共有成员   接口可以抽离出类的成员  包括共有私有和受保护成员