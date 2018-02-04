import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Home from './components/Home.jsx';
import Header from './components/header.jsx';
import Instructions from './components/instructions.jsx';
import SessionEnd from './components/SessionEnd.jsx';
import endSound from './sound/din_don_don.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 50,
      refocusCount: 0,
      sessionLength: 50,
      view: 'Home',
      interval: null,
      running: false,
      paused: false,
      maxFocus: 0,
      focusTimestamps: [],
    };

    this.setSessionLength = this.setSessionLength.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.refocus = this.refocus.bind(this);
    this.pauseSession = this.pauseSession.bind(this);
    this.endSession = this.endSession.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  setSessionLength(seconds) {
    this.setState(prevState => {
      return {
        sessionLength: seconds,
        countdown: seconds,
        interval: null
      };
    });
    clearInterval(this.state.interval);
  }

  startCountdown() {
    if (this.state.countdown <= 0) {
      this.setState({countdown: this.state.sessionLength});
    }

    if (this.state.countdown === this.state.sessionLength) {
      this.setState({focusTimestamps: [this.state.sessionLength]});
    }

    if (!this.state.running || this.state.paused) {
      const countdownFunction = setInterval(() => {
        this.setState(prevState => ({countdown: prevState.countdown - 1}));
        if (this.state.countdown <= 0) {
          clearInterval(this.state.interval);
          this.setState({running: false });
          this.endSession();
        }
      }, 1000);

      this.setState({interval: countdownFunction, running: true, paused: false});
    }
  }

  refocus() {
    //Need to refactor focus count to just print length of focus
    this.setState(prevState => ({ refocusCount: prevState.refocusCount + 1 }) );
    const focusLength = this.state.focusTimestamps[this.state.focusTimestamps.length - 1] - this.state.countdown;
    if (this.state.maxFocus < focusLength) {
      this.setState({maxFocus: focusLength});
    }
    this.setState({focusTimestamps: this.state.focusTimestamps.concat([this.state.countdown])});
  }

  pauseSession() {
    console.log('pausing');
    this.setState({ paused: true });
    clearInterval(this.state.interval);
  }

  endSession() {
    let endSoundPlay = new Audio(endSound);

    endSoundPlay.play();
    this.setState({view: 'SessionEnd'});
  }

  changeTab(view) {
    this.setState({view: view});
  }

  renderView() {
    const { view, countdown, refocusCount, sessionLength, running, paused } = this.state;

    if (view === 'Home') {
      return <Home countdown={countdown} refocusCount={refocusCount} sessionLength={sessionLength} running={running}
        paused={paused} setSessionLength={this.setSessionLength} pauseSession={this.pauseSession}
        startCountdown={this.startCountdown} refocus={this.refocus} endSession={this.endSession} />;
    }
    if (view === 'SessionEnd') {
      return <SessionEnd refocusCount={refocusCount} countdown={countdown} sessionLength={sessionLength} />;
    }
    if (view === 'Instructions') {
      return <Instructions/>;
    }
  }

  render() {

    return (
      <div>
        <Header changeTab={this.changeTab}/>
        <div className="container main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));