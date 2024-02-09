const SetTimer = props => {
  const {value, onPlusCLiked, onMinusClicked} = props
  const plusClick = () => {
    onPlusCLiked()
  }
  const minusCLick = () => {
    onMinusClicked()
  }
  return (
    <div>
      <p>Set Timer Limit</p>
      <div className="plusminus">
        <button onClick={minusCLick}>-</button>
        <p className="plusminusbtn">{value}</p>
        <button onClick={plusClick}>+</button>
      </div>
    </div>
  )
}

export default SetTimer
