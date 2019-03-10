
export const getTokenFromURL = () => {
  const url = window.location.href.split('token=')
  let token = false;
  if (url.length > 1) {
    token = url[1]
  }
  return token
}

export const removeTokenFromURL = () => window.history.pushState({}, document.title, "/")

