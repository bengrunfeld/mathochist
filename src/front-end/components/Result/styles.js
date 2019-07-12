import s from 'styled-components'

const BoxContainer = s.div`
  padding-top: 50px;
  padding-left: 45px;
`

const Box = s.div`
  width: 105px;
  height: 90px;
  border-radius: 5px;
  background: ${props => {
    if (props.result === 'correct') return '#40af98'
    if (props.result === 'wrong') return '#990000'
    return '#40af98'
  }};
`

const BoxText = s.p`
  position: relative;
  left: 37px;
  top: 17px;
  color: white;
  font-size: 40px;
`

const Caption = s.p`
  font-size: 22px;
  color: #434343;
  width: 105px;
  text-align: center;
  padding-top: 8px;
`

export { BoxContainer, Box, BoxText, Caption }
