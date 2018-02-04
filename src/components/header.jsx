import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tab.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <span className="tabs row justify-content-center">
          <Tab title={'Instructions'} changeTab={this.props.changeTab} />
          <Tab title={'Login'} changeTab={this.props.changeTab}/>
          <Tab title={'Home'} changeTab={this.props.changeTab}/>
        </span>
      </div>
    );
  }
}

export default Header;