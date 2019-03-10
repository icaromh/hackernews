import React from 'react'
import styled from 'styled-components'
import TimeAgo from 'timeago-react'

import Badge from './Badge'
import { OpenExternalIcon } from './Icons'

import {
  DARK_BLUE, FONT_COLOR,
} from '../constants'


const Article = styled.article`
  padding: 5px;
  background-color: ${DARK_BLUE}
  margin: 5px 0px 5px 0px
  display: flex
`

const Content = styled.div`
  span {
    color: ${FONT_COLOR};
    font-size .7rem
  }
`

const Title = styled.a`
  color: ${FONT_COLOR}
  font-size: 1rem
  font-weight: 600
  margin: 0
  display: block
  text-decoration: none;
  margin-bottom: 10px;

  :hover {
    text-decoration: underline
  }

`

const Divider = styled.span`
  display: inline-block;
  height: 10px
  border-left: 1px solid ${FONT_COLOR}
  margin: 0 5px;
`

const Icon = styled.span`
  display: inline-block
  margin-left: 3px
`

const Container = ({data, n}) => {
  const datetime = new Date(data.time * 1000)
  const ExternalIcon = (
    <Icon>
      <OpenExternalIcon height={10} width={10} fill={FONT_COLOR} />
    </Icon>
  )

  return (
    <Article>
      <Badge value={n + 1} />
      <Content>
        <Title href={data.url} target="_blank" rel="noopener">
          {data.title}
          {data.url && ExternalIcon}
        </Title>

        <span>{data.score} point</span>
        <Divider />

        <span><b>{data.descendants} comments</b></span>
        <Divider />

        <span>
          <TimeAgo datetime={datetime} /> ago by <b>{data.by}</b>
        </span>
      </Content>
    </Article>
  )
}

export default Container
