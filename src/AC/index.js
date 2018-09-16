import defaultClients from '../defaultClients';
import {SELECT_CLIENT, FILTER_CLIENTS, LOAD_ALL_CLIENTS_START, LOAD_ALL_CLIENTS_SUCCESS, LOAD_ALL_CLIENTS_FAIL} from '../constants'

export function loadClients(url) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_CLIENTS_START,
    })

    setTimeout(() => {
      fetch(url, {
        method: 'GET',
        mode: "same-origin",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          
          return defaultClients;
          // return response.json();
        })
        .then((response) => {
          dispatch({
            type: LOAD_ALL_CLIENTS_SUCCESS,
            payload: response
          })
        })
        .catch((error) => {
          dispatch({
            type: LOAD_ALL_CLIENTS_FAIL,
            payload: error.message
          })
        })
    }, 1000)
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