/**
 * 面向对象编程(OOP)的三个基本特征是：封装、继承、多态  
 * 封装：封装是对象和类概念的主要特性。封装，把客观事物封装成抽象的类，并且把自己的部分属性和方法提供给其他对象调用, 而一部分属性和方法则隐藏。
 * 继承：面向对象编程 (OOP) 语言的一个主要功能就是“继承”。继承是指这样一种能力：它可以使用现有类的功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
 * 多态：允许将子类类型的指针赋值给父类类型的指针, 同一个函数调用会有不同的执行效果 。
 * 
 * Dart所有的东西都是对象，所有的对象都继承自Object类。
 * Dart是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是Object的子类
 * 
 */

class P {
  String name = "this is name";
  int age = 20;
  P() : name = '2' {
    // 构造函数运行前给变量赋值
    // 默认构造函数  实例化时执行
    print(
        '在类中定义与类同名的方法就是构造函数---${this.name}'); // new P 时执行--> 在类中定义与类同名的方法就是构造函数---2
  }

  getP() {
    print('${this.name}--${this.age}');
  }

  setP(age) {
    this.age = age;
  }
}

// 构造函数
class P1 {
  String name;
  int age;
  String _name2;
  P1(this.name, this.age);
  getp1() {
    print('${this.name}--${this._name2}-${this.age}');
  }

  _run() {
    print('私有方法');
  }

  run() {
    this._run();
  }
}

//Dart和其他面向对象语言不一样，Data中没有 public  private protected这些访问修饰符合
//但是我们可以使用_把一个属性或者方法定义成私有。

/**
 * Dart中的静态成员
 * 1.使用static关键字实现类级别的 变量和函数
 * 2.静态方法不能访问非静态成员 非静态方法可以访问静态成员
 * 
 * Dart中对象操作符
 *  ？ 条件运算符 
 *  as 类型转换
 *  is 类型判断
 *  .. 联级操作(连缀)
 */
class P2 {
  static String name = 'name';
  static showName() {
    print('静态方法');
  }

  pt() {
    print('可以访问静态属性' + name);
    showName();
  }
}

class P3 {
  String name;
  P3(this.name);
  info() {
    print(name);
  }
}

void main() {
  // P 普通类
  P p = new P();
  print(p.name); // this is name
  p.getP(); // this is name--20
  p.setP(1);
  print(p.age); // 1

  // P1 有构造函数的类
  P1 p1 = new P1('smd', 18);
  p1.getp1(); // smd---18
  p1.run(); //  间接调用私有方法

  // P2 静态成员
  P2 p2 = new P2();
  p2.pt();

  // P3 对象操作符
  P3 p3 = new P3('对象操作符name');
  p3?.info(); // 有没有info   有 就调用
  var p4;
  p4 = new P2();
  p4.pt();
  print(p4 is P2);
  // p4
  //   ..name = 'mz'
  //   ..age = 18;
  // print(p4);

  /**
   * Dart中类的继承
   * 1. 子类使用extends关键词来继承父类
   * 2. 子类会继承父类里边可见的属性和方法 但不会继承构造函数
   * 3. 子类能复写父类的方法  get 和 set
   */
  SmdS s1 = new SmdS('sss');
  print(s1.name);
}

class SmdS extends SMD {
  SmdS(String name) : super(name) {} // 使用supre关键字来继承实例化构造函数传参
}

class SMD {
  String name = 'smd';
  SMD(this.name);
  spk() {
    print('会说话');
  }
}
