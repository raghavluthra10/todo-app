import React, { Component } from 'react'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#D3D3D3',
            textDecoration: this.props.task.completed ?  'line-through' : 'none'
        }
    }


    render() {
        const { title, id } = this.props.task;

        return (
            <div style={ this.getStyle() } >
                <input 
                type='checkBox' 
                onChange={this.props.markComplete.bind( this, id )} 
                />
                {'  '}
                {title}

                <button 
                className='btn_delete'
                onClick={this.props.delete.bind( this, id )}
                > X 
                </button>

            </div>
        )
    }
}

export default TodoItem
