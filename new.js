function new1 (func) {
  var newObj = Object.create(func.prototype);    // 创建一个继承自func.prototype的新对象
  var returnObj = func.apply(newObj, Array.prototype.slice.call(arguments, 1));   //截取new1函数第二个以及第二个之后的参数,在newObj作用域内执行改造函数func
  if ((typeof returnObj === "object" || typeof returnObj === "function") && ret !== null) {
    return returnObj;
  }   //如果传入参数中的构造函数执行后的returnObj是“对象”类型(比如new1(Object)),那么这个对象会取代newObj作为返回的对象
  return newObj;
}


function new2 (func) {
  return function () {
    let newObj = {
      __proto__: func.prototype    // 新生成一个对象,且新对象的原型对象继承自构造对象的原型对象
    }
    var returnObj = func.apply(obj, arguments)   // 以第二次执行函数的参数,在obj作用域中执行func
    if ((typeof returnObj === "object" || typeof returnObj === "function") && returnObj !== null) {
      return returnObj;
    }   //同理,returnObj是“对象”类型(比如new1(Object)),那么这个对象会取代newObj作为返回的对象
    return newObj
  }
}



Function.prototype.mybind = function (context) {
  if (typeof this !== "function") {
    throw new Error(this + "is not a function");
  }
  var self = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }

  var fbound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }
  fbound.prototype = Object.create(self.prototype);
  //返回的函数不仅要和 被调函数的函数体相同，也要继承人家的原型链
  return fbound;
}