import React from 'react'
import { NavLink ,Link} from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><Link to='/all_posts'>Posts</Link></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks