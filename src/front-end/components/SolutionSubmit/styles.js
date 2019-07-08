import s from 'styled-components'

const BoxContainer = s.button`
  background: #0412eb;
  position: relative;
  border-radius: 5px;
`

const Submit = s.div`
  width: 0; 
  height: 0; 
  border-top: 17px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 17px solid white;
  position: relative;
  left: 43%;
`

export { BoxContainer, Submit }
