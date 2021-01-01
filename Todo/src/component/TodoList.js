import React from 'react'
import './TodoList.css'

class TodoList extends React.Component{
    handleFasIcon=(index)=>{
        this.props.deleteIcon(index)
    }
    render(){
        console.log(this.props.items);
        return(
            <div>
                {this.props.items.map((value,index)=>{
                    return(
                        <div key={index} className='list'>
                               <p>
                                {value.text} || {index}
                                <i className="fas fa-trash-alt" onClick={()=>this.props.deleteIcon(index)}></i>
                                </p>
                            </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoList