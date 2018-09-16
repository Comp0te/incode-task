import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientList from './ClientList';
import DetailedClient from './DetailedClient';
import SearchClient from './SearchClient';
import { loadClients } from '../AC';
import PropTypes from 'prop-types'
import { filter } from '../helper';

class App extends Component {
  static propTypes = {
    loadClients: PropTypes.func,
    clients: PropTypes.shape({
      clientsData: PropTypes.array,
      activeClient: PropTypes.number
    }),
    searchQuery: PropTypes.string
  }

  componentDidMount() {
    this.props.loadClients();
  }

  render() {
    const { activeClient, clientsData } = this.props.clients;
    const { searchQuery } = this.props;
    const filteredClientsData = clientsData.filter(filter(searchQuery))
    console.log(filteredClientsData)
    return (
      <article className='ui grid container'>
        <nav className='ui six wide column segment'>
          <SearchClient />
          <ClientList clientsData={searchQuery !== '' ?
            filteredClientsData :
            clientsData} />
        </nav>
        <article className='ui ten wide column segment'>
          <DetailedClient client={searchQuery !== '' ?
            filteredClientsData[activeClient] :
            clientsData[activeClient]}
            activeClient={activeClient} />
        </article>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
    searchQuery: state.filter.searchQuery
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    loadClients: () => {
      dispatch(loadClients())
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
