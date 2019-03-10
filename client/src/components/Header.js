import React from 'react'
import styled from 'styled-components'

import {
  DARK_BLUE,
  FONT_COLOR,
  LIGHT_BLUE,
} from '../constants'
import Badge from './Badge'

const Header = styled.header`
  background-color: ${DARK_BLUE}
  color: ${FONT_COLOR}
  height: 40px
  padding: .5rem
  display: flex
  align-items: center
  position: sticky
  top: 0
  box-shadow: 0 1px 0 0 ${LIGHT_BLUE}
`

const Title = styled.span`
  text-transform: uppercase
  font-weight: 600
`

const Container = () => (
  <Header>
    <Badge value="Y" bold />
    <Title>Hacker News</Title>
  </Header>
)

export default Container
