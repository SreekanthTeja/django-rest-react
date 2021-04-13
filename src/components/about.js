import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {load_users,checkAuthenticated }from '../redux/actions/auth'

class About extends React.Component {
    state = {
        content: []
    }
    
    componentDidMount(){
        // this.props.checkAuthenticated()
        // this.props.load_users()
        // console.log(this.props);
        
        console.log(this.props.isAuthenticated);
        const cuuurent_path=this.props.location.pathname
        // console.log(cuuurent_path)
        if (!this.props.isAuthenticated){
            this.props.history.push({pathname:'/login',state: {message: "You must login to acces this page",next:cuuurent_path}})
        }
        const config = {
            headers:{
                'Authorization':'JWT '+ localStorage.getItem('access')
            }
        }
        axios.get('http://127.0.0.1:8000/accounts/hello/',config)
            .then(res=>{
                console.log(res);
                this.setState({
                    content:res.data
                })
            }).catch(err=>{
                console.log(err);
                
            })
            
        }
        render(){
            const content = this.state.content
            return(
                <div className="container">
                    <h3 className='center'>Content</h3>
                    <p className='center'key={content.id}> {content.message} </p>
                </div>
            )
    }
}
const mapStateToProps = (state) =>{
    // console.log(state);
    return {isAuthenticated:state.isAuthenticated}
    // return isAuthenticated;
}

export default connect(mapStateToProps,{checkAuthenticated,load_users}) (About);