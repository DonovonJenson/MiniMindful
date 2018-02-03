import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Home from './components/Home.jsx';
import SessionEnd from './components/SessionEnd.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 0,
      refocusCount: 0,
      sessionLength: 60,
      view: 'Home',
      interval: null,
    };

    this.startCountdown = this.startCountdown.bind(this);
    this.refocus = this.refocus.bind(this);
    this.endSession = this.endSession.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  startCountdown() {

    var countdownFunction = setInterval(() => {
      this.setState(prevState => ({countdown: prevState.countdown - 1}));
      if (this.state.countdown <= 0) {
        clearInterval(this.state.interval);
      }
    }, 1000);

    if (this.state.countdown === 0) {
      this.setState({countdown: this.state.sessionLength});
    }  
    this.setState({interval: countdownFunction});

    // if !countdown, countdown = session length
    // else, countdown = countdown
    // set interval, every second, decrement countdown

    // if coundown = 0, stop the interval
    // call endSession()
  }

  refocus() {
    console.log('i refocused!');
    this.setState(prevState => ({ refocusCount: prevState.refocusCount + 1 }) );
  }

  endSession() {
    // countdown = 0 if not already
    // display user's results with the SessionEnd component
  }

  renderView() {
    const { view, countdown, refocusCount, sessionLength } = this.state;

    if (view === 'Home') {
      return <Home countdown={countdown} refocusCount={refocusCount} sessionLength={sessionLength}
        startCountdown={this.startCountdown} refocus={this.refocus} endSession={this.endSession} />;
    }
    if (view === 'SessionEnd') {
      return <SessionEnd refocusCount={refocusCount} sessionLength={sessionLength} />;
    }
  }

  render() {

    return (
      <div>
        <div className="container row main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));