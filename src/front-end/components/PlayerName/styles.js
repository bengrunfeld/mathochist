import s from 'styled-components'

const PlayerNameContainer = s.div`
  padding-left: 45px !important;
`

const Title = s.h5`
  font-size: 18px;
  font-weight: 300;
`

const Name = s.p`
  font-size: 40px;
  color: #3c78d8;
  text-transform: uppercase;
  margin-left: -2px;
`

export { PlayerNameContainer, Title, Name }
