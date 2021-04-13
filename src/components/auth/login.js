import React,{Component} from 'react';
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import login from '../../redux/actions/auth';


class  Login  extends Component{
    
    state = {
        email : '',
        password : '',
        
    }
    
    handleChange = (e) =>{
        // console.log(e)
        this.setState({
            [e.target.id ]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.login(this.state)
        this.props.history.push('/')
    }
    
    render(){
        const {Error} =this.props
        
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    
                    <h5 className="grey-text text-darken-3">Login</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type='email' id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type='password' id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>

                    <div className="red-text center">
                        {Error ? <p>{Error}</p> :null}
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        isAuthenticated:state.isAuthenticated,
        Error:state.error
    }
            
}
export default connect(mapStateToProps,{login}) (Login) ;