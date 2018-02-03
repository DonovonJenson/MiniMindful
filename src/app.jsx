import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import Home from './components/Home.jsx';
import SessionEnd from './components/SessionEnd.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 60,
      refocusCount: 0,
      sessionLength: 60,
      view: 'Home',
      interval: null,
      running: false,
    };

    this.startCountdown = this.startCountdown.bind(this);
    this.refocus = this.refocus.bind(this);
    this.endSession = this.endSession.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  startCountdown() {

    if (this.state.countdown <= 0) {
      this.setState({countdown: this.state.sessionLength});
    }  

    if (!this.state.running) {

      const countdownFunction = setInterval(() => {
        this.setState(prevState => ({countdown: prevState.countdown - 1}));
        if (this.state.countdown <= 0) {
          clearInterval(this.state.interval);
          this.setState({running: false });
          this.endSession();
        }
      }, 1000);

      this.setState({interval: countdownFunction});
      this.setState({running: true});
    }
  }

  refocus() {
    this.setState(prevState => ({ refocusCount: prevState.refocusCount + 1 }) );
  }

  endSession() {
    this.setState({view: 'SessionEnd', countdown: 0});
    this.renderView();
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
        <div className="container main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));