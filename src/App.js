import {Component} from 'react'

import './App.css'
import Rules from './components/Rules'
import Items from './components/Items'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    playerVal: null,
    computerVal: null,
    playerScore: 0,
    status: '',
    intial: true,
  }

  logic = (id, compChoice) => {
    let auth
    if (id === compChoice) {
      auth = 0
    } else if (
      (id === 'ROCK' && compChoice === 'SCISSORS') ||
      (id === 'SCISSORS' && compChoice === 'PAPER') ||
      (id === 'PAPER' && compChoice === 'ROCK')
    ) {
      auth = 1
    } else {
      auth = -1
    }
    return auth
  }

  onToggleItem = id => {
    const choice = ['ROCK', 'PAPER', 'SCISSORS']
    const compChoice = choice[Math.floor(Math.random() * choice.length)]
    const value = this.logic(id, compChoice)
    if (value === 1) {
      this.setState(prev => ({
        playerVal: id,
        computerVal: compChoice,
        playerScore: prev.playerScore + 1,
        status: 'YOU WON',
      }))
    } else if (value === -1) {
      this.setState(prev => ({
        playerScore: prev.playerScore - 1,
        playerVal: id,
        computerVal: compChoice,
        status: 'YOU LOSE',
      }))
    } else {
      this.setState({
        computerVal: compChoice,
        playerVal: id,
        status: 'IT IS DRAW',
      })
    }
    this.setState(prev => ({intial: !prev.intial}))
  }

  navContainer = () => {
    const {playerScore} = this.state
    return (
      <div className="top-container">
        <div className="heading-container">
          <h1 className="heading">Rock Paper Scissors</h1>
        </div>
        <div className="score-container">
          <p className="heading">Score</p>
          <p className="font-family:Roboto">{playerScore}</p>
        </div>
      </div>
    )
  }

  renderIntialContainer = () => (
    <div>
      <ul className="un-order-list">
        {choicesList.map(each => (
          <Items
            itemDetails={each}
            key={each.id}
            onToggleItem={this.onToggleItem}
          />
        ))}
      </ul>
    </div>
  )

  renderingOpponentImage = () => {
    const {computerVal} = this.state
    let image
    choicesList.filter(each => {
      if (each.id === computerVal) {
        image = each.imageUrl
      }
      return image
    })

    return (
      <>
        <img src={image} alt="opponent choice" className="image" />
      </>
    )
  }

  renderingYoursImage = () => {
    const {playerVal} = this.state
    let image
    choicesList.filter(each => {
      if (each.id === playerVal) {
        image = each.imageUrl
      }
      return image
    })

    return (
      <>
        <img src={image} alt="your choice" className="image" />
      </>
    )
  }

  renderResultContainer = () => {
    const {status} = this.state
    const tryAgainbtn = () => {
      this.setState(prev => ({intial: !prev.intial}))
    }
    return (
      <>
        <div>
          <p>YOU</p>
          {this.renderingYoursImage()}
        </div>
        <div>
          <p>OPPONENT</p>
          {this.renderingOpponentImage()}
        </div>
        <p>{status}</p>
        <button type="button" onClick={tryAgainbtn}>
          PLAY AGAIN
        </button>
      </>
    )
  }

  render() {
    const {intial} = this.state
    return (
      <div className="bg-container">
        {this.navContainer()}
        <div>
          {intial ? this.renderIntialContainer() : this.renderResultContainer()}
        </div>

        <Rules />
      </div>
    )
  }
}

export default App
