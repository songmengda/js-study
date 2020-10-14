/*
 * @Author: S.M.D
 * @Date: 2020-10-12 22:30:56
 * @LastEditors: S.M.D
 * @LastEditTime: 2020-10-12 22:52:57
 * @Description: file content
 */
let url = require('url');
/**
{
  Url: [Function: Url],
  parse: [Function: urlParse],   // 解析
  resolve: [Function: urlResolve], // 添加或替换地址
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat], // 是parse的逆向操作
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode]
}
 */

console.log(url.parse('https://jd.com/index/home.html?type=1&name=2'));
/**
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'jd.com',
  port: null,
  hostname: 'jd.com',
  hash: null,
  search: '?type=1&name=2',
  query: 'type=1&name=2',
  pathname: '/index/home.html',
  path: '/index/home.html?type=1&name=2',
  href: 'https://jd.com/index/home.html?type=1&name=2' }
 */

// 传入第二个参数 其中的query参数将变为对象
console.log(url.parse('https://jd.com/index/home.html?type=1&name=2', true));
/**
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'jd.com',
  port: null,
  hostname: 'jd.com',
  hash: null,
  search: '?type=1&name=2',
  query: { type: '1', name: '2' },
  pathname: '/index/home.html',
  path: '/index/home.html?type=1&name=2',
  href: 'https://jd.com/index/home.html?type=1&name=2' }
 */


console.log(url.resolve('https://jd.com/index/home.html?type=1&name=2', 'goods')); // https://jd.com/index/goods
