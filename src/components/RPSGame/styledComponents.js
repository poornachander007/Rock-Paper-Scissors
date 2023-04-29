import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #223a5f;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto';
`

export const ResponsiveContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 85%;
  }
`

export const HeaderContainer = styled.div`
  border: 1px solid white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`

export const HeadingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  margin: 0px 20px 0px 20px;
`
export const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  @media screen (max-width: 767px) {
    font-size: 18px;
  }
`
export const ScoreCard = styled(HeadingsContainer)`
  background-color: white;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
`
export const ScoreCardHeading = styled.p`
  color: #223a5f;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 24px;
  @media screen (max-width: 767px) {
    font-size: 18px;
  }
`

export const Score = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #223a5f;
  font-family: 'Roboto';
`

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  align-self: ${props => (props.rules ? 'flex-end' : '')};
`
// export const Button = styled.button.attrs(props => ({
//   'data-testid': `${props.id.toLowerCase()}Button`,
// }))`
//   border: none;
//   background-color: transparent;
//   align-self: ${props => (props.rules ? 'flex-end' : '')};
// `

export const Image = styled.img`
  width: ${props => (props.rules ? '100%' : '180px')};
  height: ${props => (props.rules ? '' : '180px')};
  @media screen (max-width: 767px) {
    width: ${props => (props.rules ? '100%' : '140px')};
    height: ${props => (props.rules ? '' : '140px')};
  }
`

export const SelectingContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
  //   background-color: red;
  padding: 0;
  margin-top: 30px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'flex-end')};
  width: 100%;
`

export const CustomButton = styled.button`
  background-color: white;
  border: none;
  color: #223a5f;
  font-family: 'Algerian';
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  font-weight: 700;
  box-shadow: 0px 2px 4px 4px yellow;
`

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SelfCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const OpponentContainer = styled(SelfCardContainer)``

export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 35px;
`

export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
