import React, { Component } from 'react';

class Client extends Component {
  render() {
    const { activeClient } = this.props.activeClient;

    if (activeClient) return (
      <li className="active item">
        {this.getBody()}
      </li>
    )

    return (
      <li className="item">
        {this.getBody()}
      </li>
    );
  }

  getBody() {
    const { avatar, firstName, lastName } = this.props.client.general;
    const { title } = this.props.client.job;
    return (
      <img
        className="ui avatar image"
        src={avatar}
      >
        <div className="content">
          <b className="header">
            {`${firstName} ${lastName}`}
          </b>
          {title}
        </div>
      </img>
    )
  }
}

export default Client;