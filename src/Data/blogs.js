import React,{Component} from 'react';
import DataList from '../Data/listingData';
import AddData from '../Data/addData.js';
class Blogs extends Component {
    state = {
        
        users: [
        {id:1,content:'sreekanth is python',},
        {id:2,content:'rupesh is django',},
        {id:3,content:'uday is react',},
        ]
    }
    deleteUsers = (id) => {
        const users = this.state.users.filter(u =>{
            return u.id!== id
        });
        this.setState({
            users
        })
    }
    addTodo = (todo) => {
        console.log(todo);
        todo.id = Math.random();
        let todos = [...this.state.users,todo];
        console.log(todos);
        this.setState({
            users:todos
        });
    }
    render(){

        return(
            <div className="container">
                
                <h3 className="red-text"> All blogs</h3>
                <DataList user={this.state.users} deleteUsers={this.deleteUsers}/>
                <AddData addTodo={this.addTodo}/>
            </div>
        )
    }
}
export default Blogs;