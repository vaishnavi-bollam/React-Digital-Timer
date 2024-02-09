// Write your code here
import {Component} from 'react'
import Start from '../StartComponent/index'
import SetTimer from '../SetTimerComponent/index'
import Reset from '../ResetComponent/index'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isStarted: false,
    value: 25,
    timeLeft: 25 * 60,
  }

  startBtnCLicked = () => {
    const {isStarted} = this.state
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
      defaultPage: false,
    }))
    if (!isStarted) {
      this.timeIntervalUniqueId = setInterval(() => {
        this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}))
      }, 1000)
      console.log(this.timeIntervalUniqueId)
    }
    if (isStarted) {
      clearInterval(this.timeIntervalUniqueId)
    }
  }

  onPlusCLiked = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.setState(prevState => {
        const {value} = prevState
        return {
          value: value + 1,
          timeLeft: prevState.timeLeft + 60,
        }
      })
    }
  }

  onMinusClicked = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.setState(prevState => {
        const {value} = prevState
        return {
          value: value - 1,
          timeLeft: prevState.timeLeft - 60,
        }
      })
    }
  }

  onresetClicked = () => {
    clearInterval(this.timeIntervalUniqueId)
    this.setState({
      isStarted: false,
      value: 25,
      timeLeft: 25 * 60,
    })
  }

  render() {
    const {isStarted, value, timeLeft} = this.state
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    console.log(isStarted)
    console.log(minutes)
    console.log(seconds)

    if (minutes === 0 && seconds === 0) {
      this.onresetClicked()
    }

    return (
      <div>
        <h1>Digital Timer</h1>
        <div className="main-container">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png"
              className="bg-image img"
              alt="elapsed-img"
            />
            <div className="p">
              <p>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="left-container">
                <div>
                  <Start
                    isStarted={isStarted}
                    startBtnCLicked={this.startBtnCLicked}
                  />
                </div>

                <div>
                  <Reset onresetClicked={this.onresetClicked} />
                </div>
              </div>
            </div>
            <div>
              <SetTimer
                value={value}
                onPlusCLiked={this.onPlusCLiked}
                onMinusClicked={this.onMinusClicked}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
