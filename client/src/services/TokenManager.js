
export const save = token => window.localStorage.setItem('TOKEN', token)

export const get = () => window.localStorage.getItem('TOKEN')

export default {
  save,
  get
}
