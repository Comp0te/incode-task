import React, { Component } from 'react';

class Client extends Component {
  render() {
    return (
      <li className="item">
        {this.getBody()}
      </li>
    );
  }

  getBody() {
    const { avatar, firstName, lastName } = this.props.general;
    const { title } = this.props.job;
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