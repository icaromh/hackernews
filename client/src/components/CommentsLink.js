import React from 'react'
import styled from 'styled-components'

import { FONT_COLOR } from '../constants'

const CommentsLink = styled.button`
  background: transparent
  margin: 0
  padding: 0
  border: 0
  color: ${FONT_COLOR}
  font-weight: bold
  cursor: pointer

  :hover {
    text-decoration: underline
  }
`

const Container = (props) => (
  <CommentsLink {...props}>
    {props.children}
  </CommentsLink>
)

export default Container
