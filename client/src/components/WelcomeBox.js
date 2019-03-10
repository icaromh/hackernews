import React from 'react'
import styled from 'styled-components'

const BoxedContainer = styled.div`
  padding: 1rem
  text-align: center

  p {
    line-height: 1.5
  }

  h1 {
    text-transform: uppercase
    font-weight: 600
    font-size: 1rem
  }
`

const Container = () => (
  <BoxedContainer>
    <h1>Welcome to HackerNews App</h1>
    <p>To read the hottest stories in HackerNews please log-in bellow</p>
  </BoxedContainer>
)

export default Container
