import React from 'react'
import './index.less'
export default class EmptyArrow extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div className='empty-arrows'>
        <div className='arrow-right'></div>
      </div>
    )
  }
}