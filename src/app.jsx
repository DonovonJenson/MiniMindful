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

    };
  }

  startCountdown() {
    // if !countdown, countdown = session length
    // else, countdown = countdown
    // set interval, every second, decrement countdown

    // if coundown = 0, stop the interval
    // call endSession()
  }

  refocus() {
    this.setState(prevState => ({ refocusCount: prevState.refocusCount + 1 }) );
  }

  endSession() {
    // countdown = 0 if not already
    // display user's results with the SessionEnd component
  }

  render() {
    const { countdown, refocusCount, sessionLength } = this.state;

    return (
      <div>
        <Header />
        <div className="container row main">
          <Home countdown={countdown} refocusCount={refocusCount} sessionLength={sessionLength} />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));