import styled from 'styled-components'

const Box = styled.div`
  display: inline-block;
  background: #b7b7b7;
  padding: 10px;
  border: 2px solid black;
`

const BoxData = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: Nunito;
  margin: 0;
  padding: 0;

  color: ${props => {
    if (props.type === 'score') return 'darkred'
    if (props.type === 'time') return 'darkblue'
    return 'black'
  }};
`

export { Box, BoxData }
