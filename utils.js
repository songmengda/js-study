/*
 * @Author: S.M.D
 * @Date: 2020-11-09 22:20:00
 * @LastEditors: S.M.D
 * @LastEditTime: 2020-11-13 21:27:03
 * @Description: file content
 */




 /** --------------------------------------URL--------------------------------------开始 */
 /**
  * 1-1.获得当前地址栏传递参数
  * @param {*} name 
  */
export function getUrlString (name) {
    var reg = new RegExp("(^|&|\\?)" + name + "=([^&^#]*)(#|&|$)", "i");
    var r = window.location.href.match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
 /**
  * 1-2.获得当前地址栏传递参数
  * @param {*} name 
  */
export function getUrlString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = decodeURIComponent(window.location.search).substr(1).match(reg)
    if (r != null) return r[2]
    return null
}

 /**
  * 1-3.获得当前地址栏传递参数  拼成对象
  * @param {*} url 
  */
export function getUrlData(url) {
    const regUrl = /^[^\?]+\?([\w\W]+)$/
    const regPara = /([^&=]+)=([\w\W]*?)(&|$)/g // g is very important
    const arrUrl = regUrl.exec(url)
    const ret = {}
    if (arrUrl && arrUrl[1]) {
      const strPara = arrUrl[1]
      let result
      while ((result = regPara.exec(strPara)) != null) {
        ret[result[1]] = result[2]
      }
    }
    return ret
}

/**
 * 1-4通过key获取url参数值
 * @param {*} name 
 */
export const getQueryStringByKey = (name) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
  };

  /**
 * 获得当前地址栏传递参数
 * @returns {null}
 */
export function getUrlString (name) {
  var reg = new RegExp("(^|&|\\?)" + name + "=([^&^#]*)(#|&|$)", "i");
  var r = window.location.href.match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

 /** --------------------------------------URL--------------------------------------结束 */






 /** --------------------------------------浏览器--------------------------------------开始 */
/**
 * 2.浏览器信息
 * @param {*} app 
 */
export function getBrowserInfo(app) {
    var ua = navigator.userAgent.toLowerCase()
    var isIos = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || false
    var inWx = ua.indexOf('micromessenger') > -1 || false
    var inJdApp = ua.indexOf('jdapp') > -1 || false
    var inJrApp =
      ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false
    var inWyApp = ua.indexOf('WalletClient') > -1 || false
    var inApp = getUrlString('source') === 'app'
    var resultObj = {
      isIos: isIos,
      inWx: inWx,
      inApp: inApp,
      inJdApp: inJdApp,
      inJrApp: inJrApp,
      inWyApp: inWyApp
    }
    return resultObj[app]
  }

// 浏览器信息
export function getBrowserInfo(app) {
    const ua = navigator.userAgent.toLowerCase()
    const isIos = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || false
    const inWx = ua.indexOf('micromessenger') > -1 || false
    const inJdApp = ua.indexOf('jdapp') > -1 || false
    const inJrApp =
      ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false
    const inWyApp = ua.indexOf('WalletClient') > -1 || false
    const inApp = getUrlString('source') === 'app'
    const resultObj = {
      isIos: isIos,
      inWx: inWx,
      inApp: inApp,
      inJdApp: inJdApp,
      inJrApp: inJrApp,
      inWyApp: inWyApp
    }
    return resultObj[app]
  }
  
// 浏览器信息
export function getBrowserInfo(app = '') {
    const ua = navigator.userAgent.toLowerCase()
    const isIos = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || false
    const inWx = ua.indexOf('micromessenger') > -1 || false
    const inJdApp = ua.indexOf('jdapp') > -1 || false
    const inJrApp =
      ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false
    const inWyApp = ua.indexOf('WalletClient') > -1 || false
    const inApp = getUrlString('source') === 'app'
    const resultObj = {
      isIos: isIos,
      inWx: inWx,
      inApp: inApp,
      inJdApp: inJdApp,
      inJrApp: inJrApp,
      inWyApp: inWyApp
    }
    return resultObj[app]
  }

  // 浏览器信息
export function getBrowserInfo(app) {
  var ua = navigator.userAgent.toLowerCase()
  var isIos = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || false
  var inWx = ua.indexOf('micromessenger') > -1 || false
  var inJdApp = ua.indexOf('jdapp') > -1 || false
  var inJrApp =
    ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false
  var inWyApp = ua.indexOf('WalletClient') > -1 || false
  var inApp = getUrlString('source') === 'app'
  var resultObj = {
    isIos: isIos,
    inWx: inWx,
    inApp: inApp,
    inJdApp: inJdApp,
    inJrApp: inJrApp,
    inWyApp: inWyApp
  }
  return resultObj[app]
}

/**
 * 14.当前浏览器名称
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
    const ua = window.navigator.userAgent;
    const isExplorer = (exp) => ua.indexOf(exp) > -1;
    if (isExplorer('MSIE')) return 'IE';
    if (isExplorer('Firefox')) return 'Firefox';
    if (isExplorer('Chrome')) return 'Chrome';
    if (isExplorer('Opera')) return 'Opera';
    if (isExplorer('Safari')) return 'Safari';
  };
  

/**
 * 4.刷新页面使页面置顶
 */
export const beforeunload = function() {
    window.onbeforeunload = function() {
      document.documentElement.scrollTop = 0 // ie下
      document.body.scrollTop = 0 // 非ie
    }
}

/**
 * 5.锁定页面禁止滑动
 */
export const utils = {
    pageLock() {
      document.addEventListener('touchmove', utils.pageLockHandler, {
        capture: false,
        passive: false
      })
    },
    pageUnlock() {
      document.removeEventListener('touchmove', utils.pageLockHandler, {
        capture: false
      })
    },
    pageLockHandler(e) {
      e.preventDefault()
    }
}

export const browserTypeJudge = function () {
  //判断浏览器类型
  let ua = navigator.userAgent.toLowerCase();
  let isIos = ua.indexOf("ipad") > -1 || ua.indexOf("iphone") > -1 || ua.indexOf("ipod") > -1 || false;
  let browser = "default";
  let appType = {
      isIos,
      mqq: ua.indexOf("_sq_") > -1 || false,
      wx: ua.indexOf("micromessenger") > -1 || false,
      jdApp: ua.indexOf("jdapp") > -1 || false,
      jrApp: ua.indexOf("jdjr") > -1 || ua.indexOf("android-async-http") > -1 || false,
      wyApp: ua.indexOf("walletclient") > -1 || false,
      jdStock: (ua.indexOf("jdstock") > -1 && ua.indexOf("stocksdk=jdstock") < 0) || false
  };
  for (let i in appType) {
      if (appType[i]) {
          browser = i;
      }
  }
  return browser;
}



/*
 * 获取系统信息
 * getAppInfo(str)
 * */
export function getAppInfo (str) {
  var ua = navigator.userAgent;
  /* APP寄宿的系统 */
  var OS = (function () {
      var arr = /JDIDAN\/([^;]*)(;|$)/i.exec(ua);
      if (arr) return (decodeURIComponent(arr[1]) || '').toUpperCase();
  })();

  /* APP版本 */
  var AV = (function () {
      var arr = /JDIDAV\/([^;]*)(;|$)/i.exec(ua);
      if (arr) return decodeURIComponent(arr[1]) || '';

      // var arr = ua.match(/(?<=jdidav\/)[\d.]+/);
      // if(arr.length) return decodeURIComponent(arr[0]) || '';

  })();

  /* APP浏览器版本 */
  var BV = (function () {
      var arr = /JDIDBV\/([^;]*)(;|$)/i.exec(ua);
      if (arr) return decodeURIComponent(arr[1]) || '';
  })();

  /* APP寄宿的设备机型 */
  var DV = (function () {
      var arr = /JDIDDV\/([^;]*)(;|$)/i.exec(ua);
      if (arr) return decodeURIComponent(arr[1]) || '';
  })();

  // 安卓系统版本
  var OV = (function () {
      var arr = /Android\s+([^;]*)(;|$)/i.exec(ua);
      if (arr) return decodeURIComponent(arr[1]) || '';
  })();

  return { AN: OS, AV: AV, BV: BV, DV: DV, OV: OV };
}

/*
 * 对比版本
 * compareVersion(v1, v2) //v1,v2 string 4.1.1/2.3
 * */
export function compareVersion (v1, v2) {
  var v1Arr = (v1 || '0.0.0').split('.');
  var v2Arr = v2.split('.');

  //补位 0
  function cover (array, needLength) {
      var vl = array.length;
      if (vl < needLength) {
          for (var i = 0; i < needLength - vl; i++) {
              array[vl + i] = '0';
          }
      }
  }

  //由于IOS 版本 由 n.n.n 变成 n.n 所有采用补位法则
  cover(v1Arr, 3);
  cover(v2Arr, 3);
  // alert(v1Arr)

  if (parseInt(v1Arr[0]) < parseInt(v2Arr[0])) return '<';
  if (parseInt(v1Arr[0]) > parseInt(v2Arr[0])) return '>';

  //第一位相等，检查第二位
  if (parseInt(v1Arr[1]) < parseInt(v2Arr[1])) return '<';
  if (parseInt(v1Arr[1]) > parseInt(v2Arr[1])) return '>';

  //第二位相等，检查第三位
  if (parseInt(v1Arr[2]) < parseInt(v2Arr[2])) return '<';
  if (parseInt(v1Arr[2]) > parseInt(v2Arr[2])) return '>';
  if (parseInt(v1Arr[2]) === parseInt(v2Arr[2])) return '=';
}

export function setCookie (key, value, options) {
  // var exdate = new Date()
  // exdate.setHours(exdate.getHours() + expireHours)
  // document.cookie = key + "=" + encodeURI(value) + ';domain=.jd.com' + ';path=/' +
  //     ((expireHours == null) ? "" : ";expires=" + exdate.toGMTString())

  options = _.extend({domain: '.jd.com', path: '/'}, options);

  if (value === null) {
      options.expires = -1;
  }

  if (typeof options.expires === 'number') {
      // cookit有效期精确到日
      var days = options.expires,
      t = options.expires = new Date();
      t.setDate(t.getDate() + days);
  } else if (typeof options.hour === 'number') {
      // cookie有效期精确到小时
      var hour = options.hour,
      t = new Date();
      t.setHours(t.getHours() + hour);
      options.expires = t;
  } else if (typeof options.second === 'number') {
      // cookie有效期精确到秒
      var second = options.second,
      t = new Date();
      t.setTime(t.getTime() + second * 1000);
      options.expires = t;
  }

  value = typeof value == 'object' ? JSON.stringify(value) : String(value);
  let arr = [
      encodeURIComponent(key), '=', encodeURIComponent(value),
      options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
  ]
  let string = arr.join('')
  return (document.cookie = string);
}


export function getCookie (key) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(key + "=")
    if (c_start != -1) {
      c_start = c_start + key.length + 1
      var c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) c_end = document.cookie.length
      // return decodeURI(document.cookie.substring(c_start, c_end))
      var value = decodeURIComponent(document.cookie.substring(c_start, c_end))

      try {
        return JSON.parse(value)
      } catch (e) {
        return value
      }
    }
  }
  return ""
}

 /** --------------------------------------浏览器--------------------------------------结束 */



 /** --------------------------------------JR-SDK方法--------------------------------------开始 */
/**
 * 3.jrapp里跳转方式
 * @param {*} url 
 */
export const setOpenLinkUrl = function(url) {
    try {
      if (getBrowserInfo('inJrApp')) {
        window.JrBridge &&
          window.JrBridge.openView({
            target: url,
            container: 'h5',
            islogin: false,
            isclose: false
          })
      } else {
        location.href = url
      }
    } catch (err) {
      location.href = url
    }
  }

 /** --------------------------------------JR-SDK方法--------------------------------------结束 */ 



/** --------------------------------------数组--------------------------------------开始 */
 
/**
 * 6.得到两个数组的交集, 两个数组的元素为数值或字符串
 * @param {Array} arr1
 * @param {Array} arr2
 */
export const getIntersection = (arr1, arr2) => {
    const len = Math.min(arr1.length, arr2.length);
    let i = -1;
    const res = [];
    while (++i < len) {
      const item = arr2[i];
      if (arr1.indexOf(item) > -1) res.push(item);
    }
    return res;
  };



/**
 * 7.得到两个数组的并集, 两个数组的元素为数值或字符串
 * @param {Array} arr1
 * @param {Array} arr2
 */
export const getUnion = (arr1, arr2) => Array.from(new Set([...arr1, ...arr2]));


/**
 * 8.判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 */
export const hasOneOf = (targetarr, arr) => targetarr.some((_) => arr.indexOf(_) > -1);


/**
 * 9.验证某个元素是否在数组中    元素为字符串或数值
 * @param {String|Number} value 要验证的字符串或数值
 * @param {*} validList 用来验证的列表
 */
export function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true;
      }
    }
    return false;
  }

/** --------------------------------------数组--------------------------------------结束 */



/** --------------------------------------时间--------------------------------------开始 */
/**
 * 10.判断时间戳格式是否是毫秒
 * @param {Number} timeStamp 判断时间戳格式是否是毫秒
 * @returns {Boolean}
 */
export function isMillisecond(timeStamp) {
    const timeStr = String(timeStamp);
    return timeStr.length > 10;
};

/**
 * 11. 判断时间戳是否早于当前时间戳
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} currentTime 当前时间时间戳
 * @returns {Boolean} 传入的时间戳是否早于当前时间戳
 */
export const isEarly = (timeStamp, currentTime) => timeStamp < currentTime;

/**
 * 13.通过时间戳  和 需要的字符串格式
 * @param {Number} timeStamp 传入的时间戳
 * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间
 */
export const getDate = (timeStamp, startType) => {
    const d = new Date(timeStamp * 1000);
    const year = d.getFullYear();
    const month = getHandledValue(d.getMonth() + 1);
    const date = getHandledValue(d.getDate());
    const hours = getHandledValue(d.getHours());
    const minutes = getHandledValue(d.getMinutes());
    const second = getHandledValue(d.getSeconds());
    let resStr = '';
    if (startType === 'year') resStr = `${year}-${month}-${date} ${hours}:${minutes}:${second}`;
    else resStr = `${month}-${date} ${hours}:${minutes}`;
    return resStr;
  };

  export function parseTime (time) {
    if (!time) return;
    let arr = time.split('');
    let year = '' + arr[0] + arr[1] + arr[2] + arr[3];
    let month = '' + arr[4] + arr[5];
    let day = '' + arr[6] + arr[7];
    let hour = '' + arr[8] + arr[9];
    let minite = '' + arr[10] + arr[11];
    let second = '' + arr[12] + arr[13];
    let _time = new Date(year, month - 1, day, hour, minite, second).getTime()
    return _time
}


export function timestampToTime(remainTime){
  let nowtime = new Date();
  var lefttime = parseInt(remainTime - nowtime.getTime());
  let second = parseInt(lefttime / 1000);
  let day = parseInt(second / (24*60*60));
  let hour = parseInt(second / (60 * 60) % 24);
  let minute = parseInt(second / 60 % 60);
  second = parseInt(second % 60);

  let arr = [day, fillZero(hour), fillZero(minute), fillZero(second)];
  for(let i = 0; i < arr.length; i ++){
      if(arr[i] != 0){
          arr = arr.slice(i);
          break;
      }
  }
  return arr;
}

/** --------------------------------------时间--------------------------------------结束 */





/** --------------------------------------数值--------------------------------------开始 */
/**
 * 12.如果传入的数值小于10，即位数只有1位，则在前面补充0
 * @param {Number} num 数值
 * @returns {String} 处理后的字符串
 * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0
 */
export const getHandledValue = (num) => (num < 10 ? `0${num}` : num);


/*
 * 10000以上转为万
 * toTenThunsand(8)
 * */
export function toTenThunsand (num) {
  return num > 10000 ? (num / 10000 + '万') : num;
}

/*
 * 将金额转换为 3位数 一逗号间隔
 * format_number(str)
 * */
export function format_number(num){
  num += '';  
  let x = num.split('.');  
  let x1 = x[0];  
  let x2 = x.length > 1 ? '.' + x[1] : '';  
  let rgx = /(\d+)(\d{3})/;  
  while (rgx.test(x1)) {  
      x1 = x1.replace(rgx, '$1' + ',' + '$2');  
  }  
  return x1 + x2;  
}

export function fillZero(n){
  return n < 10 ? '0' + n : n;
}


/** --------------------------------------数值--------------------------------------结束 */




/** --------------------------------------对象--------------------------------------开始 */
/**
 * 15.
 * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
 * 如果没有传入key这个参数，则判断obj对象是否有键值对
 */
export const hasKey = (obj, key) => {
    if (key) return key in obj;
  
    const keysArr = Object.keys(obj);
    return keysArr.length;
  };

/**
 * 16.
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
    const keysArr1 = Object.keys(obj1);
    const keysArr2 = Object.keys(obj2);
    if (keysArr1.length !== keysArr2.length) return false;
    if (keysArr1.length === 0 && keysArr2.length === 0) return true;
    /* eslint-disable-next-line */
    else return !keysArr1.some(key => obj1[key] != obj2[key])
  };

/* 
    2018-10-30 深拷贝数组或对象
*/
var toString = Object.prototype.toString

export function deepClone (data) {
    // debugger
    var _data
    if (toString.call(data) === '[object Array]') {
        _data = []
        for (var i = 0; i < data.length; i++) {
            _data[i] = deepClone(data[i])
        }
        return _data
    } else if (toString.call(data) === '[object Object]') {
        _data = {}
        for (let key in data) {
            _data[key] = deepClone(data[key])
        }
        return _data
    } else if (toString.call(data) === '[object String]'
        || toString.call(data) === '[object Number]'
        || toString.call(data) === '[object Null]'
        || toString.call(data) === '[object Date]'
        || toString.call(data) === '[object Boolean]'
        || toString.call(data) === '[object Undefined]'
        || toString.call(data) === '[object RegExp]'
        || toString.call(data) === '[object Function]') {

        return data
    }
    return _data
}



/** --------------------------------------对象--------------------------------------结束 */



/** --------------------------------------字符串--------------------------------------开始 */
/*
 * 获取随机字符串
 * getRandomStr(8)
 * */
export function getRandomStr (len) {
  var result = [];
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_';
  for (var i = 0; i < len; i++) {
      var index = Math.floor(Math.random() * str.length);
      result.push(str[index]);
  }
  return result.join('');
}



/** --------------------------------------字符串--------------------------------------结束 */


/** --------------------------------------图片--------------------------------------开始 */
/**
 *
 * @param url 图片路径
 * @param {width, height} 图片大小
 * @param cb 结果回调
 */
export function getUrlBase64(url, {width, height}) {
  return new Promise((resolve,reject)=>{
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let img = new Image;
      img.crossOrigin = 'Anonymous';
      img.src = url;
      img.onload = function () {
          canvas.height = height; //指定画板的高度,自定义
          canvas.width = width; //指定画板的宽度，自定义
          ctx.drawImage(img, 0, 0, width, height); //参数可自定义
          var dataURL = canvas.toDataURL('image/png');
          canvas = null;
          resolve(dataURL)
      };
  })
}

/** --------------------------------------图片--------------------------------------结束 */