import React, { Component } from 'react';
import Client from './Client';
import {connect} from 'react-redux';
import {selectClient} from '../AC'
import PropTypes from 'prop-types'
class ClientList extends Component {
  static propTypes = {
    clients: PropTypes.shape({
      clientsData: PropTypes.array,
      activeClient: PropTypes.number
    }),
    handleClick: PropTypes.func
  }

  render() {
    const { clientsData, activeClient } = this.props.clients
    const clientElements = clientsData.map(
      (client, index) => <Client key={index}
        client={client}
        selectClient = {this.handleClick(index)}
        resetSelectionClient = {this.handleClick(null)}
        isClientActive={activeClient === index} />
    )

    return (
      <ul className='ui middle aligned selection list'>
        {clientElements}
      </ul>
    );
  }

  handleClick(index) {
    return () => this.props.handleClick(index)
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    handleClick: (index) => {
      dispatch(selectClient(index))
    },
  }
);

export default connect(null, mapDispatchToProps)(ClientList);