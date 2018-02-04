import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <h1> Sign Up Here! </h1>
        <div>
          Username:
          <input type="text" onChange={(e) => this.setState({username: e.target.value})}/>
          <br/>
          Password: 
          <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
        </div>
        <div>
          <button onClick={() => this.props.sendSignup({username: this.state.username, password: this.state.password})}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Signup;