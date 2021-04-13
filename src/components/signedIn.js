import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import logout from '../redux/actions/auth'

const SignedInLinks = (props) => {

    return (
        <div>
        <ul className="right">
            <li><NavLink  to='/'>Home</NavLink></li>
            <li><NavLink  to='/blogs'>Blogs</NavLink></li>
            <li><NavLink to='/about' >About</NavLink></li>
            {/* <li><NavLink to='/allposts' >About</NavLink></li> */}
            <li><Link to='/login' onClick={props.signOut}>Log Out</Link></li>
        </ul>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(logout())
    }
  }

export default connect(null,mapDispatchToProps)(SignedInLinks)