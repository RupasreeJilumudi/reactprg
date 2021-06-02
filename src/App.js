import React, { Component } from 'react';
import './App.css';
import Content from '../src/mock/MockContent'
import Addtodo from './component/Addtodo';
  class App extends Component {
  state = {
    todos: [],
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      })
  }  
   render(){
      return(<div className="container">
       <div>
        <h2>   {this.props.heading}</h2>
        </div>
      <div>
    <Addtodo addtodo={this.addtodo} /></div>
     </div>
    );
      }
  }
  App.defaultProps = Content
    
    
 
  export default App;