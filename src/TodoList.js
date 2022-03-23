import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { v4 as uuidv4 } from 'uuid'

export class TodoList extends Component {

    state = {
        todos: []
    }
    
    // function for marking the task completed
    markComplete = (id) => {
        this.setState( {todos: this.state.todos.map( (todo) => {
            if(todo.id === id ) {
                todo.completed = !todo.completed
            } 
            return todo
        } )} )
    }

    //function for deleting a task
    delete = (id) => {
        // some code
        this.setState({ todos: [...this.state.todos.filter((todo => todo.id !== id))] });

    }

    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        // some code
        this.setState({ todos: [...this.state.todos, newTodo] })
    }


    render() {
        return (
            <div className='container'>
            <AddTodo 
            addTodo={this.addTodo}
            />
    
            <Todos 
            todos={this.state.todos} 
            completed={this.state.todos.completed}  
            key={this.state.todos.id}
            markComplete={this.markComplete}
            delete={this.delete}
            />     
    
            </div> 
        )

    }
}

export default TodoList
