import React from 'react'
import styled from 'styled-components'
import {
  ORANGE,
  WHITE,
} from '../constants'

const Badge = styled.div`
  background-color: ${ORANGE}
  color: ${WHITE}
  width: 30px
  height: 30px
  display: flex
  align-items: center
  justify-content: center
  flex: 0 0 30px;
  margin-right: 10px
  font-weight: bold
  border-radius: 2px
`

const Container = ({ value }) => (
  <Badge>{value}</Badge>
)

export default Container
