import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='pure-u-1-3'>
        <h2>{this.props.first_name}</h2>
        <p>{this.props.email}</p>
      </div>
    )
  }
}

export default Contact;
