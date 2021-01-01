import React, { Component } from 'react'
import './Todo.css'
import TodoList from './TodoList';

class Todo extends Component {
    constructor(props){
        super();
        this.state={
            text:'',
            items:[]
        }
    }
    handleChange=(event)=>{
        this.setState({text:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const tempArr =[...this.state.items]
        tempArr.push({text:this.state.text})
        this.setState({items:tempArr, text:''})
    }
    deleteIcon=(value)=>{
        const newArr= this.state.items.filter((item,index)=>index!==value)
        this.setState({items:newArr})
    }

    render() {
       
        return (
            <div className='head'>
               <form className='todo' onSubmit={this.handleSubmit}>
                   <input className='todo-field' value={this.state.text} title='text' onChange={this.handleChange}/>
                   <button className='submit-button'>Todo!!</button>
               </form>
               <TodoList items={this.state.items} deleteIcon={this.deleteIcon} />
               
            </div>
        )
    }
}

export default Todo
