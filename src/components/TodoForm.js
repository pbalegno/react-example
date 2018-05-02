import React, { Component } from 'react';

class TodoForm extends Component {

constructor () {
  super();
  this.state = {
    first_name:'',
    last_name: '',
    gender: '',
    email: '',
    ip_address :''

  };

  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleInput(e) {
const {value, name} = e.target

this.setState ({
  [name] : value
})

console.log(this.state);
}

handleSubmit(e) {
  e.preventDefault();
  console.log("sending...");
  this.props.onAddTodo(this.state);
}

  render() {
    return (
     <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="first_name" onChange={this.handleInput} className="form-control" placeholder="First Name" />
          </div>
          <div className="form-group">
            <input type="text" name="last_name" onChange={this.handleInput} className="form-control" placeholder="Last name" />
          </div>
          <div className="form-group">
          <select className="form-control" onChange={this.handleInput} name="gender" >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          </div>
          <div className="form-group">
            <input type="text" name="email" onChange={this.handleInput} className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" name="ip_address" onChange={this.handleInput} className="form-control" placeholder="Ip Address" />
          </div>
          <input type="submit" className="btn btn-primary" value = "Guardar"/>
        </form>
    </div>
    );
  }
}

export default TodoForm;
