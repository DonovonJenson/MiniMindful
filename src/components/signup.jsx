import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signupFailed: 'hidden',
    };
  }

  trySignup(signUpObject) {
    axios.post('/signup', signUpObject)
      .then((response) =>{
        this.props.sendSignup(response.data.user_id);
      }).catch( (error) => {
        this.setState({loginFailed: 'flash'});
        setTimeout( ()=> {
          this.setState({loginFailed: 'hidden'});
        }, 1000);
      });
  }

  render() {
    return (
      <div className="container center">
        <h1> Sign Up Here </h1>
        <div>
          <input type="text" placeholder="username" onChange={(e) => this.setState({username: e.target.value})}/>
          <br/>
          <input type="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})} />
        </div>
        <div>
          <button className="btn btn-light" onClick={() => this.trySignup({username: this.state.username, password: this.state.password})}>Submit</button>
        </div>
        <div className={this.state.signupFailed}> Signup Failed! </div>
      </div>
    );
  }
}

export default Signup;