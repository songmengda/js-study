main() {
  /**
   * List常用属性和方法
   *   属性：
   *   List.length   长度
   *   List.reversed 翻转 // 翻转之后不是数组了  是括号括起来的  很诡异
   *   List.isEmpty  是否为空
   *   List.isNotEmpty 是否不为空
   *   常用方法：
   *    add         增加
   *    addAll      拼接数组
   *    indexOf     查找  传入具体值
   *    remove      删除  传入具体值
   *    removeAt    删除  传入索引值
   *    fillRange   修改   
   *    insert(index,value);            指定位置插入
   *    insertAll(index,list)           指定位置插入List 
   *    toList()    其他类型转换成List  
   *    join()      List转换成字符串   
   *    split()     字符串转化成List
   *    forEach    forEach((value)){}
   *    map        ['dog', 'cat'].map((value) => '你好' + value); (你好dog, 你好cat)     .toList() 转化成List类型
   *    where      遍历list  返回一个不满足布尔值的value
   *    any
   *    every
   */

  List list1 = [1, 2, 3, 4, 5];
  print(list1.length); // 5
  print(list1); // [1, 2, 3, 4, 5]
  print(list1.reversed); // (5, 4, 3, 2, 1)
  print(list1.isEmpty); // false
  print(list1.isNotEmpty); // true
  list1.add(6);
  print(list1); // [1, 2, 3, 4, 5, 6]
  List list2 = ['a', 'b'];
  list1.addAll(list2);
  print(list2); // [a, b]
  print(list1); // [1, 2, 3, 4, 5, 6, a, b]
  String str1 = list1.join();
  print(str1); // 123456ab

  // Set 类似es6中的Set 主要用于数组去重
  List list3 = [1, 2, 3, 1, 1, 1];
  var st = new Set();
  st.addAll(list3);
  print(st); // {1, 2, 3}
  print(st.toList()); // [1, 2, 3]

  /**
   * Map常用属性和方法
   *   属性：
   *    keys            获取所有的key值
   *    values          获取所有的value值
   *    isEmpty         是否为空
   *    isNotEmpty      是否不为空
   *   常用方法：
   *    remove(key)     删除指定key的数据
   *    addAll({...})   合并映射  给映射内增加属性
   *    containsValue   查看映射内的值  返回true/false
   *    forEach       forEach((key,val)=>{})
   *    map           {"name": "二哈", "age": "2", "sex": "公"}.map((k,v){return new MapEntry(k,v)})
   *    where
   *    any
   *    every
   */

  Map dog = {"name": "二哈", "age": "2", "sex": "公"};
  print(dog);
  print(dog.keys);

  // list1.forEach((value) {
  //   print(value);
  // });
  dog.forEach((k, v) => {print('${k}:${v}')});
  print('------');

  var list5 = ['dog', 'cat'].map((value) => '你好' + value);
  print(list5);

  var dogMap = dog.map((k, v) {
    return new MapEntry(k + '1', v);
  });
  print(dogMap);

  var list6 = list3.where((v) {
    // 遍历list  返回一个不满足布尔值的value
    return v >= 2;
  });
  print(list6.toList());

  /***
   * 
   * 方法  函数
   * 在main方法外边定义 在main中调用
   * 
   */
}
