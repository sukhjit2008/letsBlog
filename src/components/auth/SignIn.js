import React, { Component } from 'react'
import { connect  }from 'react-redux';
import{ signIn }  from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';


class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    });
    }
   handleSubmit = (e)=>{
     e.preventDefault();
    this.props.signIn(this.state)
    
    this.setState({
      email:'',
      password:''
    });
  }
  render() {
    const { auth } = this.props;
    if(auth.uid){
      return <Redirect to='/' />
    }
    return (
      <div className="container Signin section">
        <form onSubmit={this.handleSubmit} className="white ">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <br/>
        <div className="input-field">
            <input type="email" id="email" 
            onChange={this.handleChange}
            value={this.state.email}/>
            <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
            <input type="password" id="password" 
            onChange={this.handleChange}
            value={this.state.password}/>
            <label htmlFor="password">Password</label>
        </div>
        <div className="input-field section">
        <button type="submit" className="btn pink lighten-1 z-depth-0 waves-effect waves-light">Sign In</button>
          <div className="red-text center">
          { this.props.authError ?<p>{this.props.authError}</p>:null}
          </div>
        </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return{
    authError:state.auth.authError,
    auth:state.firebase.auth
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    signIn: (cred)=> dispatch(signIn(cred))
  }

  
}
export default connect( mapStateToProps,mapDispatchToProps)(SignIn);
