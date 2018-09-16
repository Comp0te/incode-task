import filter from './filter'

describe('Reducers --- Test', () => {

  it('reducer for FILTER_CLIENTS', () => {
    let state = { searchQuery: 'aaa' }
    const newState = filter(state, { type: 'FILTER_CLIENTS', payload: 'aaaw23' })
    expect(newState).toEqual({ searchQuery: 'aaaw23' })
  });

  it('reducer for FILTER_CLIENTS', () => {
    let state = { searchQuery: 'aaa' }
    const newState = filter(state, { type: 'FILdfdf', payload: 'aaaw23' })
    expect(newState).toEqual({ searchQuery: 'aaa' })
  });

});