import React from 'react';

class SessionEnd extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSessionLength() {
    const { sessionLength, countdown } = this.props;
    const activeSessionLength = sessionLength - countdown;

    if (activeSessionLength === 60) {
      return '1 minute';
    } else {
      return `${Math.floor(activeSessionLength / 60)} minutes`;
    }
  }

  renderRefocusCount() {
    const { focusTimestamps } = this.props;

    if (focusTimestamps.length - 1 === 1) {
      return '1 time';
    } else {
      return `${focusTimestamps.length - 1} times`;
    }
  }

  render() {
    return (
      <div className="container center">
        <p>Yay!</p>
        <p>You completed a session of {this.renderSessionLength()}.</p>
        <p>You refocused {this.renderRefocusCount()}.</p>
        <button className="btn btn-light" onClick={e => this.props.changeTab('New Session')}>New Session</button>
      </div>
    );
  }
}

export default SessionEnd;
