import React from 'react';
import Contact from './Contact';
import data from './data';

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout'>
        <a href='#' className='pure-button'>Add contact</a>
        <div className='pure-g'>
          { data.map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
