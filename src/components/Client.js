import React, { Component } from 'react';

class Client extends Component {
  render() {
    const { avatar, firstName, lastName } = this.props.client.general;
    const { title } = this.props.client.job;
    // const { activeClient } = this.props.activeClient;

    // if (activeClient) return (
    //   <li className="active item">
    //     {this.getBody()}
    //   </li>
    // )

    return (
      <li className="item">
        <img
          className="ui avatar image"
          src={avatar}
          alt='Client avatar'
        />
        <div className="content">
          <b className="header">
            {`${firstName} ${lastName}`}
          </b>
          {title}
        </div>
      </li>
    );
  }

}

export default Client;