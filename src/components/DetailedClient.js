import React from 'react';
import PropTypes from 'prop-types'

export default function DetailedClient(props) {
  const { activeClient, errorLoadMessage } = props;

  if (activeClient === null) {
    return (
      <p className='ui centered header'>
        To get information, select the client on the left.
      </p>
    )
  } else if (errorLoadMessage !== '') {
    return (
      <p className='ui centered header'>
        There was an error loading the file:
        {errorLoadMessage}
        Try reloading the page.
      </p>
    )
  }

  return (
    <div className='ui two column grid'>
      {getGeneral()}
      {getContact()}
      {getAddress()}
    </div>
  )

  function getGeneral() {
    const { firstName, lastName, avatar } = props.client.general
    const { title, company } = props.client.job

    return (
      <section className='row'>
        <div className='five wide column'>
          <img className='ui circular image centered'
            src={avatar}
            width='128'
            height='128'
            alt='Client avatar' />
        </div>
        <div className='eleven wide column'>
          <h1 className='ui header'>
            {firstName} {lastName}
          </h1>
          <h3 className='ui header'>
            {title} - {company}
          </h3>
        </div>
      </section>
    );
  }

  function getContact() {
    const { email, phone } = props.client.contact

    return (
      <section className='row'>
        <div className='eleven wide right floated column'>
          <h3 className='ui header'>Contact</h3>
          <ul className='ui list'>
            <li>Email - {email}</li>
            <li>Phone - {phone}</li>
          </ul>
        </div>
      </section>
    )
  }

  function getAddress() {
    const { zipCode, country, city, street } = props.client.address

    return (
      <section className='row'>
        <div className='eleven wide right floated column'>
          <h3 className='ui header'>Address</h3>
          <p>{zipCode}, {country}, {city}, {street}.</p>
        </div>
      </section>
    )
  }
}

DetailedClient.propTypes = {
  client: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  errorLoadMessage: PropTypes.string,
  activeClient: PropTypes.number
}

DetailedClient.defaultProps = {
  client: {
    general: {},
    job: {},
    contact: {},
    address: {},
  }
}