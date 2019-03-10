import React from 'react'
import styled from 'styled-components'
import TimeAgo from 'timeago-react'

import { LIGHT_BLUE, FONT_COLOR } from '../constants'

import CommentsLink from './CommentsLink'

const Box = styled.div`
  background-color: ${LIGHT_BLUE}
  color: ${FONT_COLOR}
  padding: 1rem;
  margin: .5rem 0 .5rem 2rem
  max-width: 100%
  word-break: break-word
`

const BoxHead = styled.div`
  font-size: .7rem
  margin-bottom: 1rem
`


const BoxContent = styled.div`
  font-size: .9rem

  p {
    margin: .5rem 0 .5rem 0
  }

`

const renderTimeAgo = time => {
  const datetime = new Date(time * 1000)
  return <TimeAgo datetime={datetime} />
}

const Container = (props) => (
  <Box>
    <BoxHead>
      {props.by} - {renderTimeAgo(props.time)}
    </BoxHead>
    <BoxContent dangerouslySetInnerHTML={{ __html: props.text}} />

    <CommentsLink onClick={() => props.onToggleComments(props.id)}>
      {props.kids && `${props.kids.length} replies`}
    </CommentsLink>

    {props.children}
  </Box>
)

export default Container
