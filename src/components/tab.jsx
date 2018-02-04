import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span
        name={this.props.title}
        className="tab"
        onClick={e => this.props.changeTab(this.props.title)}
      >
        {this.props.title}
      </span>
    );
  }
}

export default Tab;