/*
 * @Author: S.M.D 
 * @Date: 2020-06-30 11:39:17 
 * @Last Modified by: S.M.D
 * @Last Modified time: 2020-07-14 10:32:46
 */

import React from 'react';
import { debounce, throttle, throttleNow } from './utils/util'
import EmptyArrow from './components/arrows/empty-arrow'
import './App.css';



class App extends React.Component {
  deKeyDown () {
    console.log('防抖成功')
  }
  thKeyDown () {
    console.log('节流成功',throttle)
  }
  render () {
    return (
      <div className="App">
        <h2>在Utils中保存了一些工具函数</h2>
        <div>
          防抖输入框: <input type="text" refs="inp" onKeyDown={debounce(this.deKeyDown, 1000)} />
        </div>
        <div>
          节流输入框:<input type="text" onKeyDown={throttle(this.thKeyDown, 1000)} />
        </div>
        <div>
          节流输入框:<input type="text" onKeyDown={throttleNow(this.thKeyDown, 1000)} />
        </div>
        <EmptyArrow type="right" />
      </div>
    )
  }
}

export default App;
