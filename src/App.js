import React, { Component } from 'react';
import todoList from './todos.json';
import './index.css';
import ToDoList from './ToDoList';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <ToDoList/>
       
        </div>
    );
  }
}

export default App;
