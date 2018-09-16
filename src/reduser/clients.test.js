import clients from './clients'

describe('Reducers --- Test', () => {
  let state

  beforeEach(() => {
    state = {
      clientsData: [{ a: 1 }, { b: 3 }, { c: 'ds' }],
      activeClient: 1,
      loading: false,
      loaded: false,
      errorLoadMessage: 'aq'
    }
  });

  it('reducer for LOAD_ALL_CLIENTS_START', () => {
   
    const newState = clients(state, { type: 'LOAD_ALL_CLIENTS_START' })
    expect(newState).toEqual({
      ...state,
      loading: true
    })
  });

  it('reducer for LOAD_ALL_CLIENTS_SUCCESS', () => {
    const newState = clients(state, { type: 'LOAD_ALL_CLIENTS_SUCCESS', payload: [{ adf: 'dfd' }, { dfj: 12 }] })
    expect(newState).toEqual({
      ...state,
      clientsData: [{ adf: 'dfd' }, { dfj: 12 }],
      loading: false,
      loaded: true
    })
  });

  it('reducer for LOAD_ALL_CLIENTS_FAIL', () => {
    const newState = clients(state, { type: 'LOAD_ALL_CLIENTS_FAIL', payload: 'error' })
    expect(newState).toEqual({
      ...state,
      errorLoadMessage: 'error'
    })
  });

  it('reducer for SELECT_CLIENT', () => {
    const newState = clients(state, { type: 'SELECT_CLIENT', payload: 3 })
    expect(newState).toEqual({
      ...state,
      activeClient: 3
    })
  });

  it('reducer for FILTER_CLIENTS', () => {
    const newState = clients(state, { type: 'FILTER_CLIENTS', payload: 'dfsdf' })
    expect(newState).toEqual({
      ...state,
      activeClient: null
    })
  });
  
  it('reducer for FILTER_CLIENTS', () => {
    const newState = clients(state, { type: 'FdfdfdRTS', payload: 'dfsdf' })
    expect(newState).toEqual(state)
  });

});