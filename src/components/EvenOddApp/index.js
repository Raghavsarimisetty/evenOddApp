import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-cont">
        <h1 className="head">Count {count}</h1>
        <p className="para1">Count is {text}</p>
        <button type="button" onClick={this.randomNumber} className="button">
          Increment
        </button>
        <p className="para2">*Increase By Random Number between 0 to 100 </p>
      </div>
    )
  }
}

export default EvenOddApp
