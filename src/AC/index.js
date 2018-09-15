import defaultClients from '../defaultClients';
import {LOAD_ALL_CLIENTS, SELECT_CLIENT} from '../constants'

export function loadClients() {
  return {
    type: LOAD_ALL_CLIENTS,
    payload: defaultClients
  }
}

export function selectClient(index) {
  return {
    type: SELECT_CLIENT,
    payload: index
  }
}