import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col-8">
        <span>{this.props.countdown}</span>
        <button onClick={e => this.props.refocus()} >Refocus</button>
        <button onClick={e => this.props.startCountdown()} >Start</button>
      </div>
    );
  }
}

export default Home;
