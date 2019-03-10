import {
  STORIES_ENDPOINT,
  COMMENTS_ENDPOINT
} from '../constants'

export const getStories = (page = 1) => {
  return fetch(`${STORIES_ENDPOINT}/${page}`)
    .then(res => res.json())
}

export const getComments = parentId => {
  return fetch(`${COMMENTS_ENDPOINT}/${parentId}`)
    .then(res => res.json())
}


export default {
  getStories,
  getComments
}


