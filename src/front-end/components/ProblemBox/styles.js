import s from 'styled-components'

const BoxContainer = s.div`
  border: 2px solid #666666;
  padding: 5px 0;
  background: #c9daf8;
`

const BoxText = s.p`
  font-size: 40px;
  color: #434343;
  text-align: center;
  position: relative;
  top: 8px;
`

export { BoxContainer, BoxText }