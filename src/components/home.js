import React,{Component} from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';
// import Login from './auth/login';
import {connect} from 'react-redux'


class Home extends Component {
    state = {
        posts : []
        
    }
    componentDidMount(){
        console.log(this.props.isAuthenticated);
        const cuuurent_path=this.props.location.pathname
        if (!this.props.isAuthenticated){
            
            this.props.history.push({pathname:'/login',state:{message:"You must login to acces this page",next:cuuurent_path}})
        }

        // this.props.history.push('/login')
        const config = {
            headers:{
                'Authorization':'JWT '+ localStorage.getItem('token_access')
            }
        }
        axios.get('https://jsonplaceholder.typicode.com/posts',config)
            .then(res =>{
                // console.log(res)
                this.setState({
                    posts:res.data.slice(0,10)
                })
                // console.log(this.state);
            })
    }
    
    render(){
        
        const {posts} = this.state;
        const postList =posts.length ? (
            posts.map(p =>{
                return(

                    <div className="post card" key={p.id}>
                        <div className="card-content">
                            <Link to={'/'+p.id}>
                                <span className="card-title">{p.title}</span>
                            </Link>
                            <p>{p.body}</p>
                        </div>
                        

                    </div>
                )

                
            })
        ):(
            <div className='center'>No posts yet</div>
        )
        return(
            <div className="container">
                
                <h3 className="red-text center"> Home</h3>
                {postList}
                
            </div>
        )
    }
        
}
const mapStateToProps = (state) =>{
    // console.log(state);
    return {isAuthenticated:state.isAuthenticated}
    // return isAuthenticated;
}

export default connect(mapStateToProps) (Home);