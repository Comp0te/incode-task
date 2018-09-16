import { LOAD_ALL_CLIENTS_START, LOAD_ALL_CLIENTS_SUCCESS, LOAD_ALL_CLIENTS_FAIL, SELECT_CLIENT, FILTER_CLIENTS } from '../constants'

const defaultClientsState = {
  clientsData: [],
  activeClient: null,
  loading: false,
  loaded: false,
  errorLoadMessage: ''
}

export default (clientsState = defaultClientsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_CLIENTS_START: {
      return {
        ...clientsState,
        loading: true
      }
    }

    case LOAD_ALL_CLIENTS_SUCCESS: {
      return {
        ...clientsState,
        clientsData: payload,
        loading: false,
        loaded: true
      }
    }

    case LOAD_ALL_CLIENTS_FAIL: {
      return {
        ...clientsState,
        errorLoadMessage: payload
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