import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientList from './ClientList';
import DetailedClient from './DetailedClient';
import SearchClient from './SearchClient';
import { loadClients } from '../AC';
import PropTypes from 'prop-types';
import {getFilteredData} from '../selectors'

class App extends Component {
  static propTypes = {
    loadClients: PropTypes.func,
    clients: PropTypes.shape({
      clientsData: PropTypes.array,
      activeClient: PropTypes.number,
      loading: PropTypes.bool,
      loaded: PropTypes.bool,
      errorLoadMessage: PropTypes.string
    }),
    clientsData: PropTypes.array
  }

  componentDidMount() {
    const { loading, loaded } = this.props.clients
    if (!loaded && !loading) {
      this.props.loadClients('/src/clients');
    }
  }

  render() {
    const { activeClient, loading, errorLoadMessage } = this.props.clients;
    const { clientsData } = this.props;
    
    return (
      <article className='ui grid container'>
        <nav className='ui six wide column segment'>
          <SearchClient isLoading={loading} />
          <ClientList clientsData={clientsData}
            isLoading={loading} />
        </nav>
        <article className='ui ten wide column segment'>
          <DetailedClient client={clientsData[activeClient]}
            activeClient={activeClient}
            errorLoadMessage = {errorLoadMessage} />
        </article>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
    clientsData: getFilteredData(state)
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    loadClients: (url) => {
      dispatch(loadClients(url))
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
