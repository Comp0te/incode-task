import { getFilteredData } from './index';

describe('Selector - test', () => {

  it('getFilteredData - wrong query', () => {
    const state = {
      clients: {
        clientsData: [{
          general: {
            firstName: 'Liana',
            lastName: 'Crooks',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
          },
          job: {
            company: 'Ledner, Johnson and Predovic',
            title: 'Investor Functionality Coordinator'
          },
          contact: {
            email: 'Gerry_Hackett77@gmail.com',
            phone: '(895) 984-0132'
          },
          address: {
            street: '1520 Zemlak Cove',
            city: 'New Devon',
            zipCode: '42586-7898',
            country: 'Guinea-Bissau'
          }
        }],
        activeClient: 1,
        loading: false,
        loaded: false,
        errorLoadMessage: 'aq'
      },
      filter: { searchQuery: 'aaaaaaaaaaaaaaaa' }
    }

    expect(getFilteredData(state)).toEqual([])

  });

  it('getFilteredData - empty query', () => {
    const state = {
      clients: {
        clientsData: [{
          general: {
            firstName: 'Liana',
            lastName: 'Crooks',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
          },
          job: {
            company: 'Ledner, Johnson and Predovic',
            title: 'Investor Functionality Coordinator'
          },
          contact: {
            email: 'Gerry_Hackett77@gmail.com',
            phone: '(895) 984-0132'
          },
          address: {
            street: '1520 Zemlak Cove',
            city: 'New Devon',
            zipCode: '42586-7898',
            country: ''
          }
        }],
        activeClient: 1,
        loading: false,
        loaded: false,
        errorLoadMessage: 'aq'
      },
      filter: { searchQuery: '' }
    }

    expect(getFilteredData(state)).toEqual(state.clients.clientsData)
  });

  it('getFilteredData - matching query', () => {
    const state = {
      clients: {
        clientsData: [{
          general: {
            firstName: 'Liana',
            lastName: 'Crooks',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
          },
          job: {
            company: 'Ledner, Johnson and Predovic',
            title: 'Investor Functionality Coordinator'
          },
          contact: {
            email: 'Gerry_Hackett77@gmail.com',
            phone: '(895) 984-0132'
          },
          address: {
            street: '1520 Zemlak Cove',
            city: 'New Devon',
            zipCode: '42586-7898',
            country: 'Guinea-Bissau'
          }
        }],
        activeClient: 1,
        loading: false,
        loaded: false,
        errorLoadMessage: 'aq'
      },
      filter: { searchQuery: 'ohnson' }
    }

    expect(getFilteredData(state)).toEqual(state.clients.clientsData)
  });
});