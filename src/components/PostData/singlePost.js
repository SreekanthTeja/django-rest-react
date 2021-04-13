import React,{Component} from 'react';
import axios from 'axios';
class singlePostDetails extends Component {
    state = {
        post:null
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_pk
        axios.get('http://127.0.0.1:8000/posts/'+id+'/')
            .then(res=>{
                this.setState({
                    post:res.data
                })
            })
            console.log(this.state);
    }
    render() {
        const post = this.state.post ? (
        
            <div className="center">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.description}</p>
            </div>
        ):(
            <div className="center">
                Loading..!
            </div>
        )
        return (
            <div className="container"> 
                {post}
                
            </div>
        );
    }
}
 
export default singlePostDetails;