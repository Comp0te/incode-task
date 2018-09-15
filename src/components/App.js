import React, { Component } from 'react';
import ClientList from './ClientList';
import DetailedClient from './DetailedClient'
import SearchClient from './SearchClient'

class App extends Component {
  render() {
    return (
      <article className='ui grid container'>
        <nav className='six wide column'>
          <SearchClient />
          <ClientList clients={} activeClient={} />
        </nav>
        <article className='ten wide column'>
          <DetailedClient client= {} />
        </article>
      </article>
    );
  }
}

export default App;
