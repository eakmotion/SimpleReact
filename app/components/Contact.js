import React from 'react';
import { observer, inject } from 'mobx-react'

@inject(['contacts']) @observer
class Contact extends React.Component {
  removeContact = (e) => {
    e.preventDefault();
    this.props.contacts.remove(this.props.id);
  }

  render() {
    return (
      <div className='pure-u-1-3'>
        <h2>{this.props.first_name}</h2>
        <p>{this.props.email}</p>
        <a href='#' className='pure-button'
           onClick={this.removeContact}>
           remove
        </a>
      </div>
    )
  }
}

export default Contact;
