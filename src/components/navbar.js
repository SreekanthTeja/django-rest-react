import React from 'react'
import { Link,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './signedIn'
import SignedOutLinks from './sinedOut';

const Navbar = (props) => {
  const { isAuthenticated } = props;
  console.log(isAuthenticated);
  const links = isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Sreekanth</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
//   console.log(state);
  return{
      isAuthenticated:state.isAuthenticated
    
  }
}

export default connect(mapStateToProps)(withRouter(Navbar))