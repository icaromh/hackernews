import React from 'react'
import styled from 'styled-components'
import {
  FONT_COLOR,
} from '../constants'

const Loading = styled.div`
  color: ${FONT_COLOR}
  padding: 1rem
  text-align: center
  height: 20vh
`

const Container = () => (
  <Loading>Loading ...</Loading>
)

export default Container
