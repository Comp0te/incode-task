import defaultClients from '../defaultClients';
import {LOAD_ALL_CLIENTS, SELECT_CLIENT, FILTER_CLIENTS} from '../constants'

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

export function filterClients(searchQuery) {
  return {
    type: FILTER_CLIENTS,
    payload: searchQuery
  }
}