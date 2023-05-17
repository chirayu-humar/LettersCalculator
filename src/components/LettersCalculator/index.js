// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  inputTextChanged = event => {
    const newInputText = event.target.value
    this.setState({
      inputText: newInputText,
    })
  }

  render() {
    const {inputText} = this.state
    const {length} = inputText

    return (
      <div className="bg-container">
        <div className="innerDiv">
          <div className="first">
            <h1>Calculate the letters you enter</h1>
            <label htmlFor="only-input">Enter the phrase</label>
            <div>
              <input
                id="only-input"
                onChange={this.inputTextChanged}
                type="text"
                placeholder="Enter the phrase"
              />
            </div>
            <div>
              <div className="button">
                <p>No.of letters: {length}</p>
              </div>
            </div>
          </div>
          <div className="second">
            <img
              alt="letters calculator"
              className="image"
              src="https://gratisography.com/wp-content/uploads/2023/04/gratisography-neon-lightbulb-free-stock-photo-800x525.jpg"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
