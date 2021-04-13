import React, { useEffect } from 'react';
// import Navbar from '../components/navbar'
import { connect } from 'react-redux';
import { checkAuthenticated, load_users } from '../redux/actions/auth';

const Layout = ({ checkAuthenticated, load_users, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_users();
    });
    return (
        <div>
            {children} 
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_users })(Layout);