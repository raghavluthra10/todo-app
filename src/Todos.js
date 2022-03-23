import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {

    render() {
        return this.props.todos.map((task) => (
            <TodoItem 
            task={task} 
            key={task.id} 
            markComplete={this.props.markComplete}
            delete={this.props.delete}
            />
        ))
    }
}

export default Todos
