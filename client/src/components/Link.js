import React from 'react'
import styled from 'styled-components'

import {
  DARK_BLUE,
  FONT_COLOR,
  WHITE,
} from '../constants'

const Button = styled.a`
  display: flex
  background-color: ${DARK_BLUE}
  color: ${FONT_COLOR}
  padding: .5rem
  margin: 10px auto
  border-radius: 5px
  text-decoration: none;
  align-items: center;
  width: fit-content;

  :hover {
    color: ${WHITE}
  }

  svg {
    margin-right: .5rem;
  }
`


const Container = (props) => (
  <Button {...props} />
)

export default Container
