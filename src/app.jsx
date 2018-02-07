import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Home from './components/Home.jsx';
import Header from './components/header.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Instructions from './components/instructions.jsx';
import SessionEnd from './components/SessionEnd.jsx';
import endSound from './sound/din_don_don.mp3';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: 60,
      sessionLength: 60,
      view: 'Login',
      interval: null,
      running: false,
      paused: false,
      maxFocus: 0,
      focusTimestamps: [],
      user_id: null,
    };

    this.setSessionLength = this.setSessionLength.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.refocus = this.refocus.bind(this);
    this.pauseSession = this.pauseSession.bind(this);
    this.endSession = this.endSession.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.sendLogin = this.sendLogin.bind(this);

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
    const focusLength = this.state.focusTimestamps[this.state.focusTimestamps.length - 1] - this.state.countdown;
    if (this.state.maxFocus < focusLength) {
      this.setState({maxFocus: focusLength});
    }
    this.setState({focusTimestamps: this.state.focusTimestamps.concat([this.state.countdown])});
  }

  pauseSession() {
    this.setState({ paused: true });
    clearInterval(this.state.interval);
  }

  endSession() {
    let endSoundPlay = new Audio(endSound);
    endSoundPlay.play();
    clearInterval(this.state.interval);
    this.setState({view: 'SessionEnd', running: false});
    axios.post('/session', {
      //Placeholder ID until we add users correctly
      user_id: this.state.user_id || null,
      focusTimestamps: this.state.focusTimestamps,
      duration: this.state.sessionLength - this.state.countdown,
      maxFocus: this.state.maxFocus,
    }).then(function (response) {
      //Placeholder if we want a response when something comes back
    }).catch(function (error) {
      console.log(error);
    });
  }

  changeTab(view) {
    this.setState({view: view});
  }

  sendLogin(loginObject) {
    axios.post('/login', loginObject)
      .then((response) =>{
        if (response.status === 200) {
          this.setState({user_id: response.data.user_id, view: 'New Session'});
        }
      }).catch( (error) => {
        console.log(error);
      });
  }

  sendSignup(signUpObject) {
    axios.post('/signup', signUpObject)
      .then((response) =>{
        this.setState({user_id: response.data.user_id});
      }).catch( (error) => {
        console.log(error);
      });
  }

  renderView() {
    const { view, countdown, focusTimestamps, sessionLength, running, paused } = this.state;

    if (view === 'New Session') {
      return <Home countdown={countdown} sessionLength={sessionLength} running={running}
        paused={paused} setSessionLength={this.setSessionLength} pauseSession={this.pauseSession}
        startCountdown={this.startCountdown} refocus={this.refocus} endSession={this.endSession} />;
    }
    if (view === 'SessionEnd') {
      return <SessionEnd changeTab={this.changeTab} focusTimestamps={focusTimestamps} countdown={countdown} sessionLength={sessionLength} />;
    }
    if (view === 'Instructions') {
      return <Instructions/>;
    }
    if (view === 'Login') {
      return <Login sendLogin = {this.sendLogin}/>;
    }

    if (view === 'Signup') {
      return <Signup sendSignup= {this.sendSignup}/>;
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