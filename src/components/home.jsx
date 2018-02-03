import React from 'react';

import whiteNoise from '../sound/white-noise-10-min.mp3';

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
    if (this.props.running) {
      return (
        <audio autoplay="true" loop="true" controls="true">
          <source src={whiteNoise} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    } else {
      return <button id="start" className="btn btn-light" onClick={e => this.props.startCountdown()}>Start</button>;
    }
  }

  render() {
    const { setSessionLength } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <span id="countdown">{this.renderTime(this.props.countdown)}</span>
        </div>
        <div className="row justify-content-center">
          <button id="refocus" className="btn btn-light" onClick={e => this.props.refocus()}>Refocus</button>
        </div>
        <div className="row justify-content-center">
          <span>Select Time:</span>
          <button className="btn btn-light" onClick={e => setSessionLength(60)}>1 min</button>
          <button className="btn btn-light" onClick={e => setSessionLength(300)}>5 min</button>
          <button className="btn btn-light" onClick={e => setSessionLength(600)}>10 min</button>
          <button className="btn btn-light" onClick={e => setSessionLength(900)}>15 min</button>
        </div>
        <div className="row justify-content-center">
          {this.renderControls()}
        </div>
      </div>
    );
  }
}

export default Home;
