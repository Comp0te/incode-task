import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientList from './ClientList';
import DetailedClient from './DetailedClient';
import SearchClient from './SearchClient';
import { loadClients } from '../AC';
import PropTypes from 'prop-types'
class App extends Component {
  static propTypes = {
    loadClients: PropTypes.func,
    clients: PropTypes.shape({
      clientsData: PropTypes.array,
      activeClient: PropTypes.number
    }),
  }

  componentDidMount() {
    this.props.loadClients();
  }

  render() {
    const { activeClient, clientsData } = this.props.clients;

    return (
      <article className='ui grid container'>
        <nav className='ui six wide column segment'>
          <SearchClient />
          <ClientList clients={this.props.clients} />
        </nav>
        <article className='ui ten wide column segment'>
          <DetailedClient client={clientsData[activeClient]}
            activeClient={activeClient} />
        </article>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients
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
