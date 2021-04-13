import React from 'react';

class AddData extends React.Component {
  state = {
    
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
    
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    console.log(this.state);
    this.setState({
      content: '',
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add content:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
          
        
        </form>
      </div>
    )
  }
}

export default AddData;
