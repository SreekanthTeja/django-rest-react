import React, { Component } from 'react';
import Navbar from './components/navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Blogs from './Data/blogs'
import Post from './Data/posts';
import Login from './components/auth/login';
import {connect} from 'react-redux';
import Layout from './hoc/Layout'
import {load_users,checkAuthenticated }from './redux/actions/auth'
import AllPosts from './components/PostData/allPosts.js'
import singlePostDetails from './components/PostData/singlePost';
class App extends Component {
    componentDidMount(){
        this.props.load_users();
        this.props.checkAuthenticated()
    }
    
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <div className="App">
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/blogs' component={Blogs}/>
                            <Route path='/about' component={About}/>
                            <Route path='/all_posts' component={AllPosts}/>
                            <Route path='/login'  component={Login} />
                            <Route path='/:post_pk' component={singlePostDetails}/>
                            <Route path='/:post_id' component={Post}/>

                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default connect(null,{checkAuthenticated,load_users})(App);