import React, { Component } from 'react';
import Client from './Client';
import Loader from './Loader';
import { connect } from 'react-redux';
import { selectClient } from '../AC';
import PropTypes from 'prop-types';

class ClientList extends Component {
  static propTypes = {
    clientsData: PropTypes.array,
    activeClient: PropTypes.number,
    handleClick: PropTypes.func,
    isLoading: PropTypes.bool
  }

  render() {
    const { clientsData, activeClient, isLoading } = this.props;

    const clientElements = clientsData.map(
      (client, index) => <Client key={index}
        client={client}
        selectClient={this.handleClick(index)}
        resetSelectionClient={this.handleClick(null)}
        isClientActive={activeClient === index} />
    )

    if (isLoading) {
      return (
        <ul className='ui middle aligned selection list'>
          <li className= 'item'>
            <Loader />
          </li>
        </ul>
      )
    } else {
      return (
        <ul className='ui middle aligned selection list'>
          {clientElements}
        </ul>
      );

    }
  }

  handleClick(index) {
    return () => this.props.handleClick(index)
  }
}

const mapStateToProps = (state) => {
  return {
    activeClient: state.clients.activeClient
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    handleClick: (index) => {
      dispatch(selectClient(index))
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);