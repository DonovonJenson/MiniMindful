import React from 'react';

class SessionEnd extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSessionLength() {
    const { sessionLength } = this.props;

    if (sessionLength === 60) {
      return '1 minute';
    } else {
      return `${sessionLength / 60} minutes`;
    }
  }

  renderRefocusCount() {
    const { refocusCount } = this.props;

    if (refocusCount === 1) {
      return '1 time';
    } else {
      return `${refocusCount} times`;
    }
  }

  render() {
    return (
      <div className="container center">
        <p>Yay!</p>
        <p>You completed a session of {this.renderSessionLength()}.</p>
        <p>You refocused {this.renderRefocusCount()}.</p>
      </div>
    );
  }
}

export default SessionEnd;
