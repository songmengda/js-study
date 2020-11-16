/**
 * Dart是由谷歌开发的计算机编程语言,它可以被用于web、服务器、移动应用 和物联网等领域的开发。
 * Dart诞生于2011年，号称要取代JavaScript。但是过去的几年中一直不温不火。直到Flutter的出现现在被人们重新重视。
 * 
 * 官网：https://dart.dev/
 * 
 * Dart环境搭建：
 * 官方文档：https://dart.dev/get-dart
 * 如果mac电脑没有安装brew这个工具首先第一步需要安装它：  https://brew.sh/
 *  brew tap dart-lang/dart
 *  brew install dart
 * 
 * */

// 基本使用  想要执行dart语言 就必须在main函数中去执行 或者调用
main() {
  print('字符串'); // 右键coderun执行
  print(1);

  //声明变量 两种方式  1. var声明 2.类型声明
  var str1 = 'var 声明变量';
  print(str1);
  String str2 = 'String 声明变量';
  print(str2);

  /**
   * 声明常量 两种方式 
   * 1.const 定义常量
   * 
   * 2.final 用final修饰的变量，必须在定义时将其初始化，其值在初始化后不可改变
   * 
   * const比final更加严格 ，final只是要求变量在初始化后值不变（可以在运行时发生变化），但通过final，我们无法在编译时（运行之前）知道这个变量的值；
   * 而const所修饰的是编译时常量，我们在编译时就已经知道了它的值，显然，它的值也是不可改变的。
   * 
   * int Func() {
   * }
   *
   *  final int m1 = 60;
   *  final int m2 = Func(); // 正确
   *  const int n1 = 42;
   *  const int n2 = Func(); // 错误
   * */
  const str3 = 'const 声明后不赋值会报错'; // The constant 'str3' must be initialized.
  print(str3);
  final String str4 = 'final 声明的常量';
  print(str4);

  /***
   * Dart数据类型
   * 
   * Numbers(数值)
   *  int    // int   必须是整型
   *  double // double  既可以是整型 也可是浮点型
   * String(字符串)
   *  String
   * Booleans(布尔)
   *  bool
   * List(数组)
   *  在Dart中 数组是列表对象
   * Maps(字典)
   *  Map是一个键值对对象,每个键只出现一次
   */
  var str5 = '单引号字符串';
  String str6 = "双引号字符串";
  var str7 = '''三个单引号字符串''';
  String str8 = '''三个单引号
  可以拐弯''';
  String str9 = """三个双引号
  也可以拐弯""";
  String str10 = str9 + '字符串拼接用+' + str8;

  int num1 = 1;
  num1 = 2;
  double num2 = 1.1;
  num2 = 1.2;

  var list1 = ['1', 'a', '3'];
  List list2 = ['a', '1', 'b'];
  var list3 = new List();
  list3.add('2');
  list3.add('a');
  list3.remove('2');
  var list4 = new List<String>();
  list4.add('1');

  var maps1 = {'name': '小红', 'age': 20};
  var maps2 = new Map();
  maps2['name'] = '小花';

  /**
   * Dart中的类型判断
   *  is关键字
   * 
   */

  String str11 = '类型判断是否是字符串';
  if (str11 is String) {
    print('str11是string');
  } else {
    print('str11不是string');
  }

  /**
   * Dart中的运算符
   * 
   * 算数运算符  + - * /  ~/(取整) %(取余)
   * 关系运算符 == != > < >= <=
   * 逻辑运算符 ! && ||
   * 赋值运算符 = ??= += -= *= /= %= ~/=
   * 条件表达式 if else switch case
   * 三目运算符 ??运算符:
   * 
   * 类型转换 Number与String类型互转  其他类型转Booleans
   */
  var b;
  b ??= 2; // b为非的话 把2赋值给b
  print(b); // 2
  String str12 = '123';
  var num4 = int.parse(str12);
  print(num4 is int);
  String str13 = '123.12';
  double num3 = double.parse(str13);
  print(num3 is double);
  int num5 = 321;
  String str14 = num5.toString();
  print(str14 is String);
  String str15 = ''; // String.isEmpty  int/double .isNaN
  if (str15.isEmpty) {
    print('是空串');
  } else {
    print('不是空串');
  }

/***
 * 循环语句
 * for  while   do...while
 * 
 */
  List list5 = [1, 2, 3, 4];
  for (var i = 0; i < list5.length; i++) {
    print(list5[i]);
  }

  int num6 = 1;
  while (num6 < 3) {
    num6++;
    print(num6);
  }
  do {
    num6++;
    print(num6);
  } while (num6 < 6);
}
