import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        <div className="pure-u-1-3"><p>First</p></div>
        <div className="pure-u-1-3"><p>Second</p></div>
        <div className="pure-u-1-3"><p>Third</p></div>
      </div>
    );
  }
}

export default Layout;
