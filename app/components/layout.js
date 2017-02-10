import React from 'react';
import Contact from './Contact';
import { observer, inject } from 'mobx-react';
import './Layout.css';

@inject(['contacts']) @observer

class Layout extends React.Component {

  addContact = (e) => {
    e.preventDefault()

    const contacts = this.props.contacts.all.slice()
    const newId = contacts[contacts.length - 1].id + 1
    this.props.contacts.add({
      id: newId,
      name: this.refs.name.value,
      email: this.refs.email.value,
    });

    this.refs.name.value = null;
    this.refs.email.value = null;

    console.log(contacts);
    console.log('clicked!');
  };

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <fieldset>
            <legend>New contact</legend>
            <input ref='email' type='email' placeholder='example@example.com'></input>
            <input ref='name' type='text' placeholder='Name'></input>
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
          {this.props.contacts.all.slice().map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
