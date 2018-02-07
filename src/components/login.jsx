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
      <div className="container center">
        <h1> Log In Here </h1>
        <div>
          <input type="text" placeholder="username" onChange={(e) => this.setState({username: e.target.value})}/>
          <br/>
          <input type="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
        </div>
        <div>
          <button className="btn btn-light" onClick={() => this.props.sendLogin({username: this.state.username, password: this.state.password})}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;