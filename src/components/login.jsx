import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
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
        <div>
          Username:
          <input type="text" onChange={(e) => this.setState({username: e.target.value})}/>
          <br/>
          Password: 
          <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
        </div>
        <div>
          <button onClick={() => this.props.sendLogin({username: this.state.username, password: this.state.password})}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;