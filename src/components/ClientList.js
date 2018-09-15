import React, { Component } from 'react';
import Client from './Client';

class ClientList extends Component {
  render() {
    const { clients } = this.props
    const clientElements = clients.map(
      (client, index) => <Client key={index}
      client = {client}
      activeClient = {this.props.activeClient} />
      )

    return (
      <ul className = 'ui middle aligned selection list'>
        {clientElements}
      </ul>
    );
  }
}

export default ClientList;