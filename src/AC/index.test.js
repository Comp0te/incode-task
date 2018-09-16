import { selectClient, filterClients } from './index';

describe('Action - test', () => {

  it('selectClient', () => {
    const index = selectClient(10)
    expect(index).toEqual({
      type: 'SELECT_CLIENT',
      payload: 10
    })
  });

  it('filterClients', () => {
    const index = filterClients('abcde1')
    expect(index).toEqual({
      type: 'FILTER_CLIENTS',
      payload: 'abcde1'
    })
  });
});