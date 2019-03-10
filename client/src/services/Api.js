import {
  STORIES_ENDPOINT,
  COMMENTS_ENDPOINT
} from '../constants'

import TokenManager from './TokenManager'

const prepareRequest = () => {
  const token = TokenManager.get()
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  return {
    method: 'GET',
    headers: headers,
    mode: 'cors',
  };
}


export const getStories = (page = 1) => {
  return fetch(`${STORIES_ENDPOINT}/${page}`, prepareRequest())
    .then(res => res.json())
}

export const getComments = parentId => {
  return fetch(`${COMMENTS_ENDPOINT}/${parentId}`, prepareRequest())
    .then(res => res.json())
}


export default {
  getStories,
  getComments
}


