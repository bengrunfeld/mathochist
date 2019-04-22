import styled from 'styled-components'

const Box = styled.div`
  background: #b7b7b7;
  padding: 10px;
  border: 2px solid black;
`

const BoxData = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: Nunito;

  color: ${props => {
    if (props.type === 'score') return 'darkred'
    if (props.type === 'time') return 'darkblue'
    return 'black'
  }};
`

export { Box, BoxData }
