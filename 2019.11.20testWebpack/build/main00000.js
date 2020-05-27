
// webpackBootstrap 启动函数
// modules即存放所有依赖模块的数组,数组中的每个元素都是一个函数
(function (modules) {

  // 把安装过的模块都存在installedModules里
  // 作用是将已加载过的模块缓存到内存中，提升性能
  var installedModules = {};

  // 去数组中加载一个模块 moduleId为要加载模块在数组中的index
  // 作用和node中的require语句相似
  function __webpack_require__ (moduleId) {

    // 如果所需要加载的模块已经被加载过，就直接从内存缓存中返回
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // 如果缓存中不存在所需要加载的模块，就新建一个模块，并把它存在缓存中
    var module = installedModules[moduleId] = {
      i: moduleId, // 模块在数组中的index
      l: false, // 该模块是否已经加载完毕
      exports: {} // 该模块的导出值
    };

    // 从modules中获取index为moduleId的模块对应的函数
    // 再调用这个函数，同时把函数需要的参数传入
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // 把这个模块标记成已加载
    module.l = true;

    // 返回这个模块的导出值
    return module.exports;
  }


  // 把所有依赖的模块 挂载到__webpack_require__的 m 属性上
  __webpack_require__.m = modules;


  // 把已加载的模块挂载到__webpack_require__的 c 属性上
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter = module && module.__esModule ?
      function getDefault () { return module['default']; } :
      function getModuleExports () { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

  // Webpack 配置中的 publicPath，用于加载被分割出去的异步代码
  __webpack_require__.p = "";

  // 使用 __webpack_require__ 去加载 index.js 执行入口模块
  // __webpack_require__.s 的含义是启动模块对应的 index
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/conso.js":
    (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('你有没有喝过哇~哈哈矿泉水');\n\n//# sourceURL=webpack:///./src/conso.js?");
    }),
  "./src/index.js":
    (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _conso_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conso.js */ \"./src/conso.js\");\n\nconsole.log(_conso_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n//# sourceURL=webpack:///./src/index.js?");
    })
});