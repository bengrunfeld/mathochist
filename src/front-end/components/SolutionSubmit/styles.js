import s from 'styled-components'

const BoxButton = s.button`
  background: #0412eb;
  position: relative;
  border-radius: 5px;
  padding: 28px 40px 28px 30px;
  right: 0;
`

const BoxContainer = s.div`
  postition: relative;
`

const Triangle = s.div`
  width: 0; 
  height: 0; 
  border-top: 17px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 17px solid white;
  position: relative;
  left: 43%;
`

export { BoxContainer, BoxButton, Triangle }
