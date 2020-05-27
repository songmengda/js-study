function jsonStringify (obj) {
  let type = typeof obj;
  if (type !== "object" || type === null) {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    let json = []
    arr = (obj && obj.constructor === Array);
    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
  }
}
jsonStringify({ x: 5 })
// "{"x":5}"
jsonStringify([1, "false", false])
// "[1,"false",false]"
jsonStringify({ b: undefined })
// "{"b":"undefined"}"



Function.prototype.call2 =
  function (content = window) {
    content.fn = this;
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    delete content.fn;
    return result;
  }
var foo = { value: 1 }
function bar (name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}
bar.call2(foo, 'black', '18')
// black 18 1



Function.prototype.apply2 = function (context = window) {
  context.fn = this
  let result;
  // 判断是否有第二个参数
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn()
  return result
}

Son.prototype = Father.prototype
/**
 * 弊端：Son.prototype.constructor 指向Father,需要手动更改为Son ；Son的实例化对象只能继承Father原型中的方法，无法继承Father本身的属性。
 */

Son.prototype = new Father()
/**
 * 弊端：Son.prototype.constructor 指向Father,需要手动更改为Son；Son的实例化对象共享Father自身的引用类型属性。
 */

function Father () {
  this.name = "zs";
  this.arr = [1, 2, 3]
}

function Son () { }

Son.prototype = new Father()

var s1 = new Son(), s2 = new Son();

s1.arr.push(5);

console.log(s1.arr) //--------> [1,2,3,5]

console.log(s2.arr) //--------->[1,2,3,5]
// Son的实例化对象s1,s2继承了Father的属性arr,但是s1,s2是同时指向这一属性的。


function Father () {
  this.name = "smd";
  this.age = 26
};

function Son () {
  Father.call(this)
  // Father.apply(this) 
}
// 弊端：Son只能继承Father自身的属性，而无法继承Father原型中的方法。

// 将原型链继承与构造函数结合起来

function Father () {
  this.name = "smd";
  this.age = 26
}

Father.prototype.sayHi = function () {
  alert("hello")
}
function Son () {
  Father.call(this)
}

Son.prototype = new Father()

var s = new Son();
// 弊端：通过Father.call() 和 new Father() ,父类构造函数Father被调用了两次。


function createObj (o) {
  function F () { }
  F.prototype = o;
  return new F()
}

var obj = { name: "zs", age: 18, sayHi: function () { } }

var newObj = createObj(obj);

function create (obj) {
  if (Object.create) {
    return Object.create(obj)
  } else {
    function F () { } F.prototype = o; return new F()
  }
}

function createObj (o) {
  function F () { }
  F.prototype = o;
  return new F()
}

function createObj2 (o) {
  var obj = createObj(o);
  obj.sayHi = function () { }
  return obj
}

var obj = { name: "zs", age: 18, sayHi: function () { } }

var newObj = createObj2(obj)

// newObj继承了obj的属性和方法，但是同样出现了共享父类中引用类型属性的问题。





function createObj (o) {
  function F () { }
  F.prototype = o;
  return new F()
}

function inheritPrototype (Child, Father) {
  var prototype = object(Father.prototype);//创建对象
  prototype.constructor = Child;//增强对象
  Child.prototype = prototype;//指定对象 }
  function Father (name) {
    this.name = name;
    this.arr = [1, 2, 3, 4];
  }
  Father.prototype.sayName = function () {
    console.log("父类原型" + this.name);
  }
  function Child (name, age) {
    Father.call(this, name);
    this.age = age;
  }
  inheritPrototype(Child, Father)
  Child.prototype.sayAge = function () {
    console.log(this.age);
  }

  var child1 = new Child(), child2 = new Child();

  child1.arr.push(5) // [1,2,3,4,5]


  child2.arr // [1,2,3,4].
}
// 优点：可以多重继承 解决两次调用 解决实例共享引用类型的问题 原型链保持不变




setInterval(() => {
  if (document.querySelector('.gitbook-plugin-modal')) {
    document.querySelector('.gitbook-plugin-modal').remove()
  }
}, 100)
