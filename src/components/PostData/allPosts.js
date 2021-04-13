import React,{Component} from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';
class AllPosts extends Component {
    state={
        allposts:[]
    }
    componentDidMount(){
        // console.log("hello");
        const baseURL='http://127.0.0.1:8000/posts/'
        axios.get(baseURL)
            .then(res=>{
                console.log(res);
                this.setState({
                    allposts:res.data
                })
            })

    }
    render() { 
        const {allposts} = this.state
        const allpostsList = allposts.length ? (
            allposts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            {/* <span className="card-title">{post.title}</span>
                            <img src="{post.image} "alt="pics" className="img-responsive"/>
                            <p>{post.description}</p> */}
                            {/* <img alt="pic">{post.image}</img> */}
                            <Link to={'/'+post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                        </div>
                    </div>
                )
            })
        ):(
            <div className='center'>No posts yet</div>
        )
        return (
            <div className="container">
                {allpostsList}
            </div>
        );
    }
}
 
export default AllPosts;