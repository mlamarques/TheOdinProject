import './App.css';
import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
      console.log(prevState.todos)
      console.log(updatedTodos)
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem 
                                                      key={item.id}
                                                      item={item}
                                                      handleChange={this.handleChange}
                                                      />)

    return (
      <div className="todo-list">
        <h1>TODO List</h1>
        {todoItems}
      </div>
      
    )
  }
  
}

export default App;
