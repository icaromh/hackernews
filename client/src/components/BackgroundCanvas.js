import React from 'react'
import styled from 'styled-components'

import {
  LIGHT_BLUE,
} from '../constants'


const Background = styled.main`
  padding: 5px;
  background-color: ${LIGHT_BLUE}
  min-height: 100vh
`

const Container = ({children}) => (
  <Background>{children}</Background>
)

export default Container
