import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';

const Navbar = (props) => {
  const navlink = props.auth.uid ? <SignedInLinks profile={props.profile}/> : <SignedOutLinks />
  return (
    <nav className="nav-wraper blue-grey darken-4">
      <div className="container">
        <Link to='/' className="brand-logo left">LetsBlog</Link>
        {navlink}
      </div>
    </nav>
  )
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
