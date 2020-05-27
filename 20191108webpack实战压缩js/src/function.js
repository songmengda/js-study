;
(function ($) {

  "use strict";

  $.tools = {

    beReqdata: function (json) {
      return {
        reqData: JSON.stringify(json),
        source: $.tools.getSource()
      }
    },

    isQyyOut: function () {
      //根据URL上是否有userType值判断是否为轻应用输出
      if ($.tools.getString('userType')) {
        return false;
      } else {
        //首页由51改为67特殊处理
        if ($('#qyy-usertype').attr('data-qyy-usertype') === '67') {
          return false;
        } else {
          return true;
        }
      }
    },

    getSource: function () {
      if ($.tools.isApp()) {
        return 'app'
      } else {
        return 'jrm'
      }
    },

    hasDom: function ($obj) {
      if ($obj.length === 0) {
        return false;
      } else {
        return true;
      }
    },

    getFractionToDecimal: function (d) {
      var e = '';
      if (d.indexOf('%') != -1) {
        e = d.split('%');
        return e[0] / 100;
      } else {
        e = d.split('/');
        return e[0] / e[1];
      }
    },

    getString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    },
    getSid: function () {
      if ($.tools.isApp()) {
        return ($.tools.getString('token') || $.tools.getString('sid') || $.tools.getCookie('sid'));
      } else {
        // console.log($.tools.getCookie('sid'))
        return ($.tools.getString('sid') || $.tools.getCookie('sid'));
      }
    },

    hasSid: function () {
      var sid = $.tools.getSid();
      if (sid === null || sid === '') {
        return false;
      } else {
        return true;
      }
    },

    changeToNumber: function (data) {
      return typeof data === 'string' ? Number(data) : data
    },

    changeToBoolean: function (data) {
      return typeof data === 'boolean' ? Boolean(data) : data
    },

    /**
     * [get description] 读取cookie值
     * @param  {[string]} key     [description] cookie键值名称
     * @param  {[object]} options [description] cookie可选对象
     * @return {[string]}         [description] 返回cookie键值所对应的的值，没有值返回null
     */
    getCookie: function (key, options) {
      options = options || {};
      var result, decode = options.raw ? function (s) {
        return s;
      } : decodeURIComponent;
      return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
    },

    newSetCookie: function (key, value, options) {
      options = $.extend({}, {
        domain: 'jr.jd.com',
        path: '/'
      }, options);

      //删除cookie操作处理
      if (value === null) {
        options.expires = -1;
      }
      //设置过期时间
      if (typeof options.expires === 'number') {
        var seconds = options.expires,
          t = options.expires = new Date();
        t.setTime(t.getTime() + seconds * 1000 * 60 * 60);
      } else if (options.expires === '24h') {

        var oldTime = new Date(),
          t = oldTime.getTime(),
          h = oldTime.getHours(),
          m = oldTime.getMinutes(),
          s = oldTime.getSeconds(),
          newTime = '';

        newTime = t - h * 60 * 60 * 1000 - m * 60 * 1000 - s * 1000 + 24 * 60 * 60 * 1000;
        newTime = new Date(newTime);
        options.expires = newTime.toUTCString()
      }

      //强制转换为字符串格式
      value = '' + value;

      //设置cookie信息
      return (document.cookie = [
        key, '=',
        options.raw ? value : value,
        options.expires ? '; expires=' + options.expires : '',
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
      ].join(''));
    },


    /**
     * [set description] 添加指定名称cookie值 , 过期时间小时制
     * @param {[type]} key   [description]
     * @param {[type]} value [description]
     * @param {[type]} opt   [description] cookie相关属性，
     */
    setCookie: function (key, value, options) {
      options = $.extend({}, {
        domain: 'jr.jd.com', // jr.jd.com
        path: '/'
      }, options);

      //删除cookie操作处理
      if (value === null) {
        options.expires = -1;
      }

      //设置过期时间
      if (typeof options.expires === 'number') {
        var seconds = options.expires,
          t = options.expires = new Date();
        t.setTime(t.getTime() + seconds * 1000 * 60 * 60);
      }

      //强制转换为字符串格式
      value = '' + value;

      //设置cookie信息
      return (document.cookie = [
        key, '=',
        options.raw ? value : value,
        options.expires ? '; expires=' + options.expires.toUTCString() : '',
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
      ].join(''));
    },

    // setNewCookie: function (key, value, options) {
    //     options = $.extend({}, {
    //         domain: 'jd.com',// 可以在指定域下才写cookie/m.jr.jd.com/
    //         path: '/'
    //     }, options);
    //
    //     //删除cookie操作处理
    //     if (value === null) {
    //         options.expires = -1;
    //     }
    //
    //     //设置过期时间
    //     if (typeof options.expires === 'number') {
    //         var seconds = options.expires, t = options.expires = new Date();
    //         t.setTime(t.getTime() + seconds * 1000 * 60 * 60);
    //     }
    //
    //     //强制转换为字符串格式
    //     value = '' + value;
    //
    //     //设置cookie信息
    //     return (document.cookie = [
    //         key, '=',
    //         options.raw ? value : value,
    //         options.expires ? '; expires=' + options.expires.toUTCString() : '',
    //         options.path ? '; path=' + options.path : '',
    //         options.domain ? '; domain=' + options.domain : '',
    //         options.secure ? '; secure' : ''
    //     ].join(''));
    // },

    isChinese: function (str) {
      var str = str.replace(/(^\s*)|(\s*$)/g, '');
      if (!(/^[\u4E00-\uFA29]*$/.test(str) &&
        (!/^[\uE7C7-\uE7F3]*$/.test(str)))) {
        return false;
      }
      return true;
    },
    hasChinese: function (str) {
      var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
      return reg.test(str);
    },
    isApp: function () {
      var a = navigator.userAgent.toLowerCase();
      //部分安卓机型（老版）匹配"android-async-http"
      return "jdjr-app" == a.match(/jdjr-app/i) ? !0 : !1
    },
    //清除cookie
    clearCookie: function (name) {
      //$.tools.setNewCookie(name, '555', -1);
    },
    isQQ: function () {
      var a = navigator.userAgent.toLowerCase();
      var res = /sq/.test(a);
      return res;
    },
    isJDApp: function () {
      var a = navigator.userAgent.toLowerCase();
      return "jdapp" == a.match(/jdapp/i) ? !0 : !1
    },
    getJdVersion: function () {
      var a = navigator.userAgent.toLowerCase();
      var arr = a.split(';');
      return arr[3];
    },
    getAndroidModel: function () {
      return 'GT-I9508';
    },
    isIos: function () {
      var isIos = /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
      return isIos;
    },
    getJdUidInAndroid: function () {
      var ua = navigator.userAgent;
      var arr = ua.split(';');
      var res = arr[4] || '';
      return res;
    },
    getJdMacInAndroid: function () {
      var ua = navigator.userAgent;
      var arr = ua.split(';');
      var macArr = arr[4].split('-');
      var res = macArr[0] || '';
      return res;
    },
    getPlatform: function () {
      //iPhone或ipad
      var isIPhone = /(iPhone)/i.test(navigator.userAgent) ? 'iPhone' : '';
      var isIpad = /(ipad)/i.test(navigator.userAgent) ? 'ipad' : '';
      return isIPhone || isIpad || 'android';
    },
    // getJdClientType: function () {
    //    //iPhone或ipad
    //    var isIPhone = /(iPhone)/i.test(navigator.userAgent);
    //    return isIPhone;
    // },
    isWeiXin: function () {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      } else {
        return false;
      }
    },
    isPc: function () {
      var userAgentInfo = navigator.userAgent;
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    checkIosVersion: function () {
      var ua = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
        bigVersion = parseInt(ua[1]),
        smallVersion_1 = parseInt(ua[2]),
        smallVersion_2 = parseInt(ua[3]);

      var res = [bigVersion, smallVersion_1, smallVersion_2];

      return res;
    },
    checkIos10_2_1: function () {
      if ($.tools.isIos()) {
        var arr = $.tools.checkIosVersion(),
          bigVersion = arr[0],
          smallVersion_1 = arr[1];
        if (bigVersion >= 10 && smallVersion_1 >= 2) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    getClientType: function () {
      /*
       * 平台展示限制   ALL(0, "所有平台"),PC(1, "PC端"),JR_APP(2, "金融APP"),W(3, "微信手Q"),H5(4, "H5外站"),JD_APP(5, "商城APP");
       * JD_APP_ANDROID(7,"商城安卓版APP"),APP_TEST(8,"移动端测试”)7为仅当判断用户所处京东APP且设备为Android才使用；8为仅当在预发布环境才使用
       * */
      var channel = '';
      if (tools.checkUrlStatus() == 1) {
        channel = 8;
      } else if (tools.isWeiXin()) {
        channel = 3;
      } else if (tools.isJDApp()) {
        channel = 5;
        if (!tools.isIos()) {
          channel = 7;
        }
      } else if (tools.isApp()) {
        channel = 2;
      } else if (tools.isPc()) {
        channel = 1;
      } else {
        channel = 4;
      }

      return channel;
    },

    checkUrlStatus: function () {
      /*
       * 0 线上，1 预发， 2 IP
       * */
      var status = 0,
        domain = location.origin,
        httpM = 'http://m.jr.jd.com',
        httpsM = 'https://m.jr.jd.com',
        minner = 'http://minner.jr.jd.com';

      if (domain == httpM) {
        status = 0;
      } else if (domain == httpsM) {
        status = 0;
      } else if (domain == minner) {
        //mark =1
        status = 10;
      } else {
        status = 2;
      }
      return status;
    },
    isEmptyObject: function (obj) {
      return JSON.stringify(obj) == '{}';
    },

    jointUrlParam: function (url, param, paramValue) {
      var regexp = new RegExp('/\?/');
      return regexp.test(url) ? url + '&' + param + '=' + paramValue : url + '?' + param + '=' + paramValue
    },

    transmitParam: function (regExpFlag, targetParam, targetUrl, jumptUrl, paramValue) {
      return regExpFlag.test(targetUrl) ? tools.jointUrlParam(jumptUrl, targetParam, paramValue) : jumptUrl

    },

    getDeviceId: function () {
      var ua = navigator.userAgent;
      ua = ua.replace(/\;/g, '&');
      ua = ua.replace(/\//g, '=');

      function getUaString (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = ua.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
      }

      var deviceid = null;

      if ($.tools.isIos()) {
        deviceid = getUaString('adid') || getUaString('deviceid');
      } else {
        deviceid = getUaString('deviceid');
        if (deviceid === null) {
          deviceid = getUaString('uid');
        }
      }

      return deviceid;
    },

    forbidScroll: function () {
      document.body.style.overflow = 'hidden';
    },

    permitScroll: function () {
      document.body.style.overflow = 'auto';
    },

    passportLogin: function () {
      var sid = tools.getString('sid');
      if (sid === '' && sid === null) {
        window.location.href = qyy.links.mLogin + encodeURIComponent(location.origin + location.pathname);
      }
    },

    jdjrAppLogin: function () {
      var token = tools.getString('token');
      if (token === '' && token === null) {
        // var deffer = ;//建立同金融app通信
        jsBridgeV3.onReady().then(function () {
          this.jsToGetResp(function (d) {
            d = typeof d == 'object' ? d : JSON.parse(d);
            if (d.data) {
              window.location.href = location.origin + location.pathname + '?token=' + decodeURIComponent(d.data);
            }
          }, {
            type: 1,
            data: ''
          })
        });
      }
    },

    unifyLogin: function () {
      this.isApp() ? this.jdjrAppLogin() : this.passportLogin();
    },

    // 异步引入资源
    loadSource: function (url, tagName, id, callback) {
      if (document.getElementById(id) !== null) return;
      var source = document.createElement(tagName);
      source.src = url;
      source.id = id;
      document.getElementsByTagName('body')[0].appendChild(source);
      document.getElementById(id).onload = function () {
        if (callback != undefined)
          callback();
      }
    },

    //资源域名判断，包括链接和接口
    checkHost: function (type) {
      /*
       * type=link,链接; type=interface，接口
       * */
      var host = location.host;
      var checkType = function () {
        if (type === 'link') {
          return true;
        } else if (type === 'interface') {
          return false;
        } else {
          return true;
        }
      }();
      switch (host) {
        case 'm.jr.jd.com':
          return (checkType ? 'm' : 'ms');
          break;
        case 'minner.jr.jd.com':
          return (checkType ? 'minner' : 'msinner');
          break;
        case 'localhost:8080':
          return (checkType ? 'minner' : 'msinner');
          break;
        default:
          //注意，不要改动！！！！众筹或其它ms域下会使用这里
          return (checkType ? 'm' : 'ms');
          break;
      }
    },

    dealSystemError: function () {
      var $obj = $('#system-error-wrap'),
        $reloadBtn = $('#system-error-reload');

      $obj.removeClass('hide');
      $.tools.forbidBodyScroll();
      $reloadBtn.click(function () {
        location.reload();
      })

    },

    forbidBodyScroll: function () {
      document.getElementsByTagName('body')[0].style['overflow-y'] = 'hidden';
    },

    has3d: function () {
      if (!window.getComputedStyle) {
        return false;
      }

      var el = document.createElement('p'),
        has3d,
        transforms = {
          'webkitTransform': '-webkit-transform',
          'OTransform': '-o-transform',
          'msTransform': '-ms-transform',
          'MozTransform': '-moz-transform',
          'transform': 'transform'
        };

      // Add it to the body to get the computed style.
      document.body.insertBefore(el, null);

      for (var t in transforms) {
        if (el.style[t] !== undefined) {
          el.style[t] = "translate3d(1px,1px,1px)";
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
      }

      document.body.removeChild(el);

      return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
    },

    formatDate: function (value, row, index) {

      function dateFtt (fmt, date) { //author: meizz
        var o = {
          "M+": date.getMonth() + 1, //月份
          "d+": date.getDate(), //日
          "h+": date.getHours(), //小时
          "m+": date.getMinutes(), //分
          "s+": date.getSeconds(), //秒
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度
          "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      }

      var crtTime = new Date(value);
      return dateFtt("MM/dd hh:mm:ss", crtTime); //直接调用公共JS里面的时间类处理的办法
    }

  }

  $.jdjr = {

    getSid: function () {
      var sid = $.tools.getString('sid');
      return (sid === '' || sid === null) ? false : true;
    },
    getToken: function () {
      var token = $.tools.getString('token');
      return (token === '' || token === null) ? false : true;
    }
  }

})(Zepto);
