import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  ResponsiveContainer,
  HeaderContainer,
  HeadingsContainer,
  Heading,
  ScoreCard,
  ScoreCardHeading,
  Score,
  SelectingContainer,
  Button,
  Image,
  ButtonContainer,
  CustomButton,
  ResultsContainer,
  CardsContainer,
  SelfCardContainer,
  OpponentContainer,
  ResultTextContainer,
  ResultText,
  PopupContainer,
} from './styledComponents'

const RulesImgUrl =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'

const choicesList = [
  {
    id: 'ROCK',
    testId: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    testId: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    testId: 'paperButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPSGame extends Component {
  state = {
    selectedImageObj: {},
    randomImageObj: {},
    isPlaying: true,
    score: 0,
    result: '',
  }

  getRandomImageObject = () => {
    const index = Math.floor(Math.random() * choicesList.length)
    const randomImage = choicesList[index]
    return randomImage
  }

  onClickPlayAgainBtn = () => {
    this.setState({isPlaying: true})
  }

  onClickSelectImage = event => {
    console.log(event.target.id, '--------------------')
    const imageId = event.target.id
    const selectedImgObject = choicesList.find(
      eachItem => eachItem.id === imageId,
    )
    // const {selectedImageObj} = this.state
    const randomImageObj = this.getRandomImageObject()
    let result = ''
    const selectedImgId = selectedImgObject.id
    const randomImgId = randomImageObj.id
    if (selectedImgId === 'PAPER' && randomImgId === 'ROCK') {
      result = 'YOU WON'
    } else if (selectedImgId === 'SCISSORS' && randomImgId === 'ROCK') {
      result = 'YOU LOSE'
    } else if (selectedImgId === 'ROCK' && randomImgId === 'PAPER') {
      result = 'YOU LOSE'
    } else if (selectedImgId === 'SCISSORS' && randomImgId === 'PAPER') {
      result = 'YOU WON'
    } else if (selectedImgId === 'ROCK' && randomImgId === 'SCISSORS') {
      result = 'YOU WON'
    } else if (selectedImgId === 'PAPER' && randomImgId === 'SCISSORS') {
      result = 'YOU LOSE'
    } else {
      result = 'IT IS DRAW'
    }
    let points = 0
    switch (result) {
      case 'YOU WON':
        points = 1
        break
      case 'YOU LOSE':
        points = -1
        break
      default:
        break
    }
    this.setState(preState => ({
      score: preState.score + points,
      result,
      selectedImageObj: selectedImgObject,
      randomImageObj,
      isPlaying: false,
    }))
  }

  renderResultsView = () => {
    const {result, selectedImageObj, randomImageObj} = this.state
    return (
      <ResultsContainer>
        <CardsContainer>
          <SelfCardContainer>
            <Heading>YOU</Heading>
            <Image src={selectedImageObj.imageUrl} alt="your choice" />
          </SelfCardContainer>
          <OpponentContainer>
            <Heading>OPPONENT</Heading>
            <Image src={randomImageObj.imageUrl} alt="opponent choice" />
          </OpponentContainer>
        </CardsContainer>
        <ResultTextContainer>
          <ResultText>{result}</ResultText>
          <CustomButton type="button" onClick={this.onClickPlayAgainBtn}>
            PLAY AGAIN
          </CustomButton>
        </ResultTextContainer>
      </ResultsContainer>
    )
  }

  renderViewBasedOnStatus = () => {
    const {isPlaying} = this.state
    if (isPlaying) {
      return this.renderPlayingView()
    }
    return this.renderResultsView()
  }

  renderPlayingView = () => (
    <SelectingContainer>
      {choicesList.map(eachItem => (
        <Button
          dataTestid
          onClick={this.onClickSelectImage}
          type="button"
          key={eachItem.id}
          id={eachItem.id}
          value={eachItem.id}
          data-testid={eachItem.testId}
        >
          <Image id={eachItem.id} src={eachItem.imageUrl} alt={eachItem.id} />
        </Button>
      ))}
    </SelectingContainer>
  )

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <HeaderContainer>
            <HeadingsContainer>
              <Heading>
                Rock <br /> Paper <br /> Scissors
              </Heading>
            </HeadingsContainer>
            <ScoreCard>
              <ScoreCardHeading>Score</ScoreCardHeading>
              <Score>{score}</Score>
            </ScoreCard>
          </HeaderContainer>
          {this.renderViewBasedOnStatus()}
          <ButtonContainer>
            <Popup
              modal
              trigger={<CustomButton type="button">Rules</CustomButton>}
            >
              {close => (
                <PopupContainer>
                  <Button rules type="button" onClick={() => close()}>
                    <RiCloseLine width={80} height={80} />
                  </Button>
                  <Image src={RulesImgUrl} alt="rules" rules />
                </PopupContainer>
              )}
            </Popup>
          </ButtonContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default RPSGame
