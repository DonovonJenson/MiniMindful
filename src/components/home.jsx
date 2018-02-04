import React from 'react';

import SessionControls from './SessionControls.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds - (min * 60);

    if (min < 10) { min = '0' + min; }
    if (sec < 10) { sec = '0' + sec; }

    return `${min}:${sec}`;
  }

  renderControls() {
    const { paused, running, refocus, setSessionLength, startCountdown, pauseSession, endSession } = this.props;

    if (running) {
      return <SessionControls refocus={refocus} paused={paused} startCountdown={startCountdown} setSessionLength={setSessionLength} pauseSession={pauseSession} endSession={endSession} />;
    } else {
      return (
        <div>
          <div className="row justify-content-center">
            <button id="start" className="btn btn-light" onClick={e => startCountdown()}>Start</button>
          </div>
          <div className="row justify-content-center">
            <span>Select Time:</span>
            <button className="btn btn-light" onClick={e => setSessionLength(60)}>1 min</button>
            <button className="btn btn-light" onClick={e => setSessionLength(300)}>5 min</button>
            <button className="btn btn-light" onClick={e => setSessionLength(600)}>10 min</button>
            <button className="btn btn-light" onClick={e => setSessionLength(900)}>15 min</button>
          </div>
        </div>
      );
    }
  }

  render() {
    const { countdown } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <span id="countdown">{this.renderTime(this.props.countdown)}</span>
        </div>
        <div className="row justify-content-center">
          {this.renderControls()}
        </div>
      </div>
    );
  }
}

export default Home;
