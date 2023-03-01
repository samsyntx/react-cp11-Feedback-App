import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedBack: true,
  }

  onChangeResponse = () => {
    this.setState({isFeedBack: false})
  }

  originPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emojis-container">
        <h1 className="heading-emoji-container">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="unorder-list-emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                onClick={this.onChangeResponse}
                className="emoji-buttons"
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-image"
                />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedBackPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="tq-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji-style" />
        <h1 className="thankyou-heading">Thank You</h1>
        <p className="thankyou-paragraph">
          we will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state
    return (
      <div className="bg-container">
        {isFeedBack ? this.originPage() : this.feedBackPage()}
      </div>
    )
  }
}
export default Feedback
