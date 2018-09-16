import { LOAD_ALL_CLIENTS, SELECT_CLIENT, FILTER_CLIENTS } from '../constants'

const defaultClientsState = {
  clientsData: [],
  activeClient: null,
}

export default (clientsState = defaultClientsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_CLIENTS: {
      return {
        ...clientsState,
        clientsData: [].concat(payload)
      }
    }

    case SELECT_CLIENT: {
      return {
        ...clientsState,
        activeClient: payload
      }
    }

    case FILTER_CLIENTS: {
      return {
        ...clientsState,
        activeClient: null,
      }
    }

    default:
      return clientsState
  }
}