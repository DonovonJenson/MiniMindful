import React from 'react';
import ReactDOM from 'react-dom';

class SessionEnd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col-8">
        <p>Yay!</p>
        <p>You completed a session of {this.props.sessionLength}.</p>
        <p>You refocused {this.props.refocusCount} times.</p>
      </div>
    );
  }
}

export default SessionEnd;
