import { createSelector } from 'reselect';
import { filter } from '../helper';

const getSearchQuery = (state) => state.filter.searchQuery
const getClientsData = (state) => state.clients.clientsData

export const getFilteredData = createSelector(
  [getSearchQuery, getClientsData],
  (searchQuery, clientsData) => {
    if (searchQuery === '') {
      return clientsData
    } else {
      return clientsData.filter(filter(searchQuery))
    }
  }
)