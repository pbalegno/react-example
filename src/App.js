import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';
//import * as name from './todos.json';
console.log(todos);
class App extends Component {

constructor () {
  super();
  this.state = {
    tareas: todos
  };

    this.handleAddTodo = this.handleAddTodo.bind(this);
}

handleAddTodo (todo) {
  this.setState({
   tareas : [...this.state.tareas, todo]
  })

}

removeTodo (index) {
  if(window.confirm("Desea borrar la tarjeta??")){
    this.setState({
         tareas : this.state.tareas.filter((e,i) => i !== index )

    })
  }
}


  render() {

  const todos =  this.state.tareas.map((todo,i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
                <h4>{todo.first_name}, {todo.last_name}</h4>
                <span className="badge badge-pill badge-danger ml-2">
                    {todo.gender}
                </span>
            </div>
            <div className="card-body">
              <p>{todo.email}</p>
              <p><mark>{todo.ip_address}</mark></p>
            </div>
            <div className="card-footer"><button className="btn btn-danger"  onClick={this.removeTodo.bind(this,i)}>Borrar</button></div>
          </div>
        </div>
      )
  });

  return (
      <div className="App">
        <Navigation alert = {this.state.tareas.length} />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <TodoForm onAddTodo = {this.handleAddTodo}/>
          <div className="row mt-4">
                {todos}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
