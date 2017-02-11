import React from 'react';
import Contact from './Contact';
import { observer, inject } from 'mobx-react';
import './Layout.css';

@inject(['contacts']) @observer

class Layout extends React.Component {
  componentWillMount() {
    this.props.contacts.fetchAll();
  }


  addContact = (e) => {
    e.preventDefault()

    this.props.contacts.add({
      first_name: this.refs.first_name.value,
      email: this.refs.email.value,
    });

    this.refs.first_name.value = null;
    this.refs.email.value = null;
  };

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <fieldset>
            <legend>New contact</legend>
            <input ref='email' type='email' placeholder='example@example.com'></input>
            <input ref='first_name' type='text' placeholder='Name'></input>
            <button type='submit' className='pure-button pure-button-primary'>
              Add contact
            </button>
          </fieldset>
        </form>
      </div>
    </div>;

  render() {
    return (
      <div id='Layout'>
        {this.newContact()}
        <div className='pure-g'>
          {this.props.contacts.all.map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
