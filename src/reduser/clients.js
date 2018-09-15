import { LOAD_ALL_CLIENTS } from '../constants'

export default (clientsState = [], action) => {
  const { type } = action
  switch (type) {
    case LOAD_ALL_CLIENTS:
      console.log("редусер")
      return action.payload

    default:
      return clientsState
  }
}