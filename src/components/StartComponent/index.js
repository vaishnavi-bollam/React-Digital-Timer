const Start = props => {
  const {isStarted, startBtnCLicked} = props

  const clickedStart = () => {
    startBtnCLicked()
  }

  const text = isStarted === true ? 'Pause' : 'Start'
  const imgurl =
    isStarted === true
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
  return (
    <div className="start-container">
      <button
        label="play"
        type="button"
        className="button"
        onClick={clickedStart}
      >
        <img src={imgurl} id="play" alt="play icon" className="icons" />
      </button>
      <button>{text}</button>
    </div>
  )
}

export default Start
