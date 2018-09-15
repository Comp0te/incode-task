import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientList from './ClientList';
import DetailedClient from './DetailedClient';
import SearchClient from './SearchClient';
import { loadClients } from '../AC';
import defaultClients from '../defaultClients';

class App extends Component {
  componentDidMount() {
    this.props.loadClients();
  }

  render() {
    console.log("----", this.props.clients)
    return (
      <article className='ui grid container'>
        <nav className='ui six wide column segment'>
          <SearchClient />
          <ClientList clients={this.props.clients}  />
        </nav>
        <article className='ui ten wide column segment'>
          <DetailedClient client={defaultClients[0]}/>
        </article>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("dfsfsdf", state)
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
