import React, { Component } from 'react'
import { render } from 'react-dom'

class Button extends Component {
  render () {
    return <div>is Button</div>
  }
}

render(<Button></Button>, document.getElementById('app'))