import React from 'react';

import whiteNoise from '../sound/white-noise-10-min.mp3';

class SessionControls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setSessionLength } = this.props;

    return (
      <div>
        <button id="pause" className="btn btn-light">Pause Session</button>
        <audio loop="true" controls="true">
          <source src={whiteNoise} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button id="end-session" className="btn btn-light">End Session</button>
      </div>
    );
  }
}

export default SessionControls;