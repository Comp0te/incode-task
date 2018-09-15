import React from 'react';
import PropTypes from 'prop-types'

export default function Client(props) {
  const { avatar, firstName, lastName } = props.client.general;
  const { title } = props.client.job;
  const { isClientActive, selectClient, resetSelectionClient } = props;

  return (
    <li className={isClientActive ? 'active item' : 'item'}
      onClick={!isClientActive ? selectClient : resetSelectionClient}>
      <img
        className='ui avatar image'
        src={avatar}
        alt='Client avatar'
      />
      <div className='content'>
        <b className='header'>
          {firstName} {lastName}
        </b>
        {title}
      </div>
    </li>
  );
}

Client.protoType = {
  client: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  isClientActive: PropTypes.bool,
  selectClient: PropTypes.func,
  resetSelectionClient: PropTypes.func
}