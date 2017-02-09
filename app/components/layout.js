import React from 'react';
import Contact from './Contact';
import data from './data';

import './Layout.css';

class Layout extends React.Component {
  componentWillMount() {
    this.setState({
      contacts: data,
    });
  }

  addContact = (e) => {
    e.preventDefault()

    const contacts = this.state.contacts
    const newId = contacts[contacts.length - 1].id + 1
    this.setState({
      contacts: contacts.concat({ id: newId,
                                  name: `New contact ${newId}`,
                                  email: `${newId}@example.com` })
    });

    console.log('clicked!');
  }

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form'>
          <fieldset>
            <legend>New contact</legend>
            <input type='email' placeholder='example@example.com'></input>
            <input type='text' placeholder='Name'></input>
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
          {this.state.contacts.map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
