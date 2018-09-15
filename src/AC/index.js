import defaultClients from '../defaultClients';
import {LOAD_ALL_CLIENTS} from '../constants'

export function loadClients() {
  console.log("экшен криатор")
  return {
    type: LOAD_ALL_CLIENTS,
    payload: defaultClients
  }
}