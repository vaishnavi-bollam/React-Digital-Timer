const Reset = props => {
  const {value, onresetClicked} = props
  const resetClicked = () => {
    onresetClicked()
  }

  return (
    <div className="start-container">
      <button
        label="reset"
        type="button"
        className="button"
        onClick={resetClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
          id="reset"
          alt="reset icon"
          className="icons"
        />
      </button>
      <h1>Reset</h1>
    </div>
  )
}

export default Reset
