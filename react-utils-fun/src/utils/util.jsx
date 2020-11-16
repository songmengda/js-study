/***
 * 1.debounce - 防抖函数
 * 2.throttle - 节流函数
 * 3.deepTraversal - 深度优先遍历 DOM树
 * 4.widthTraversal - 广度优先遍历 DOM树
 * 5.DFSdeepClone - 深度优先思想实现拷贝函数
 * 6.BFSdeepClone - 广度优先思想实现拷贝函数
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


/**
 * 防抖函数 
 * 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 
 * 使用: 将一些频繁事件触发函数传进防抖函数中 例如input的 onKeyDown事件 - debounce(onKeyDown)
*/

export const debounce = function (fn, wait = 500) {
  let timer = null // 保存一个定时器的标识
  return function () {
    if(timer) clearTimeout(timer) // 每次都先清空上一个定时器
    timer = setTimeout(() => { // 创建一个新的 setTimeout, 保证在fn执行后的 wait 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments)
    }, wait)
  }
}

/**
 * 节流函数
 * 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 
 * 使用: 将一些频繁事件触发函数传进节流函数中 从而达到多少时间内触发该函数才执行 例如input的 onKeyDown事件 - debounce(onKeyDown)
 */
export const throttle = function (fn, wait = 500) {
  let flg = true // 通过闭包保存一个标记
  return function () {
    if (!flg) return;
    flg = false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments)
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      flg = true
    }, wait);
  }
}


  /**
* underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
*
* @param  {function}   func      回调函数
* @param  {number}     wait      表示时间窗口的间隔
* @param  {object}     options   如果想忽略开始函数的的调用，传入{leading: false}。
*                                如果想忽略结尾函数的调用，传入{trailing: false}
*                                两者不能共存，否则函数不能执行
* @return {function}             返回客户调用函数
*/
export const throttleNow = function(func, wait, options) {
   var context, args, result;
   var timeout = null;
   // 之前的时间戳
   var previous = 0;
   // 如果 options 没传则设为空对象
   if (!options) options = {};
   // 定时器回调函数
   var later = function() {
     // 如果设置了 leading，就将 previous 设为 0
     // 用于下面函数的第一个 if 判断
     previous = options.leading === false ? 0 : new Date();
     // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
     timeout = null;
     result = func.apply(context, args);
     if (!timeout) context = args = null;
   };
   return function() {
     // 获得当前时间戳
     var now = new Date();
     // 首次进入前者肯定为 true
   // 如果需要第一次不执行函数
   // 就将上次时间戳设为当前的
     // 这样在接下来计算 remaining 的值时会大于0
     if (!previous && options.leading === false) previous = now;
     // 计算剩余时间
     var remaining = wait - (now - previous);
     context = this;
     args = arguments;
     // 如果当前调用已经大于上次调用时间 + wait
     // 或者用户手动调了时间
    // 如果设置了 trailing，只会进入这个条件
   // 如果没有设置 leading，那么第一次会进入这个条件
   // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
   // 其实还是会进入的，因为定时器的延时
   // 并不是准确的时间，很可能你设置了2秒
   // 但是他需要2.2秒才触发，这时候就会进入这个条件
     if (remaining <= 0 || remaining > wait) {
       // 如果存在定时器就清理掉否则会调用二次回调
       if (timeout) {
         clearTimeout(timeout);
         timeout = null;
       }
       previous = now;
       result = func.apply(context, args);
       if (!timeout) context = args = null;
     } else if (!timeout && options.trailing !== false) {
       // 判断是否设置了定时器和 trailing
     // 没有的话就开启一个定时器
       // 并且不能不能同时设置 leading 和 trailing
       timeout = setTimeout(later, remaining);
     }
     return result;
   };
 };



/**
 * 深度优先遍历
 *
 * 深度优先遍历DFS 与树的先序遍历比较类似。
 * 假设初始状态是图中所有顶点均未被访问，则从某个顶点v出发，首先访问该顶点然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，直至图中所有和v有路径相通的顶
 * 点都被访问到。若此时尚有其他顶点未被访问到，则另选一个未被访问的顶点作起始点，重复上述过程，直至图中所有顶点都被访问到为止。
 *
 * 以dom树为例
 */
export const deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    let ch = node.children
    for (let i = 0; i < ch.length; i++) {
      deepTraversal1(ch[i], nodeList) // 递归
    }
  }
  return nodeList
}

export const deepTraversal2 = (node) => {
  let stack = []
  let nodes = []
  if (node) {
    stack.push(node)
    while (stack.length) { // 非递归形式
      let item = stack.pop()
      let ch = item.children
      nodes.push(item)
      for (let i = ch.length - 1; i >= 0; i--) {
        stack.push(ch[i])
      }
    }
  }
  return nodes
}

/**
 * 广度优先遍历 BFS
 *
 * 从图中某顶点v出发，在访问了v之后依次访问v的各个未曾访问过的邻接点，然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于
 * 后被访问的顶点的邻接点被访问，直至图中所有已被访问的顶点的邻接点都被访问到。 如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新的起始点，
 * 重复上述过程，直至图中所有顶点都被访问到为止。
 *
 */

export const widthTraversal = (node) => {
  let stack = []
  let nodes = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let item = stack.shift()
      let ch = item.children
      nodes.push(item)
      for (let i = 0; i < ch.length; i++) {
        stack.push(ch[i])
      }
    }
  }
  return nodes
}


/**
 * 深复制
 */
// 工具函数
let _toString = Object.prototype.toString
let map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
let getType = (item) => {
  return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
  return map[type] && map[type] === getType(item)
}

/**
 * 深度优先  拷贝函数
 * 
 */
export const DFSdeepClone = (obj, visitedArr = []) => {
  let _obj = {}
  if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) { // 先判断 是否是引用数据类型 
    let index = visitedArr.indexOf(obj)
    _obj = isTypeOf(obj, 'array') ? [] : {}
    if (~index) {
      _obj = visitedArr[index]
    } else {
      visitedArr.push(obj)
      for (let item in obj) {
        _obj[item] = DFSdeepClone(obj[item], visitedArr)
      }
    }
  } else if (isTypeOf(obj, 'function')) {
    // eslint-disable-next-line
    _obj = eval(`(${obj.toString()})`)
  } else {
    _obj = obj
  }
}