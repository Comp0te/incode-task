import React, { Component } from 'react';


class DetailedClient extends Component {
  render() {
    return (
      <div className='ui two column grid'>
        {this.getGeneral()}
        {this.getContact()}
        {this.getAddress()}
      </div>
    )
  }

  getGeneral() {
    const { firstName, lastName, avatar } = this.props.client.general
    const { title, company } = this.props.client.job

    return (
      <section className='row'>
        <div className='five wide column'>
          <img className='ui circular image centered'
            src={avatar}
            width='128'
            height='128'
            alt = 'Client avatar'/>
        </div>
        <div className='eleven wide column'>
          <h1 className='ui header'>
            {firstName} {lastName}
          </h1>
          <h2 className='ui header'>
            {title} - {company}
          </h2>
        </div>
      </section>
    );
  }

  getContact() {
    const { email, phone } = this.props.client.contact

    return (
      <section className='row'>
        <div className='eleven wide right floated column'>
          <h2 className='ui header'>Contact</h2>
          <ul className='ui list'>
            <li>Email - {email}</li>
            <li>Phone - {phone}</li>
          </ul>
        </div>
      </section>
    )
  }

  getAddress() {
    const { zipCode, country, city, street } = this.props.client.address

    return (
      <section className='row'>
        <div className='eleven wide right floated column'>
          <h2 className='ui header'>Address</h2>
          <p>{zipCode}, {country}, {city}, {street}.</p>
        </div>
      </section>
    )
  }
}

export default DetailedClient;