import { FILTER_CLIENTS } from '../constants'

const defaultFiltersState = {
  searchQuery: ''
}

export default (filterState = defaultFiltersState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_CLIENTS: {
      return {
        searchQuery: payload
      }
    }

    default:
      return filterState
  }
}