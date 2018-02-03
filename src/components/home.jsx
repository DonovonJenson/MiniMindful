import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTime(seconds) {
    let min = seconds / 60;
    let sec = seconds - (min * 60);

    if (min < 10) { min = '0' + min; }
    if (sec < 10) { sec = '0' + sec; }

    return `${min}:${sec}`;
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <span id="countdown">{this.renderTime(this.props.countdown)}</span>
        </div>
        <div className="row justify-content-center">
          <button id="refocus" className="btn btn-light" onClick={e => this.props.refocus()} >Refocus</button>
        </div>
        <div className="row justify-content-center">
          <button id="start" className="btn btn-light" onClick={e => this.props.startCountdown()} >Start</button>
        </div>
      </div>
    );
  }
}

export default Home;
