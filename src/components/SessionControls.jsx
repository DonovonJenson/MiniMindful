import React from 'react';

import whiteNoise from '../sound/white-noise-10-min.mp3';

class SessionControls extends React.Component {
  constructor(props) {
    super(props);
  }

  togglePauseResume() {
    const { paused, startCountdown, pauseSession } = this.props;

    if (paused) {
      return <button id="restart" className="btn btn-light" onClick={e => startCountdown()}>Restart Session</button>;
    }
    return <button id="pause" className="btn btn-light" onClick={e => pauseSession()}>Pause Session</button>;
  }

  render() {
    const { endSession, refocus } = this.props;

    return (
      <div>
        <div className="row justify-content-center">
          <button id="refocus" className="btn btn-light" onClick={e => refocus()}>Refocus</button>
        </div>
        {this.togglePauseResume()}
        <audio autoPlay="true" loop="true" controls="true">
          <source src={whiteNoise} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button id="end-session" className="btn btn-light" onClick={e => endSession()}>End Session</button>
      </div>
    );
  }
}

export default SessionControls;