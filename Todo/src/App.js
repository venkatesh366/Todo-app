import React from 'react'
import './App.css';
import Todo from './component/Todo';




class App extends React.Component{
  render(){
    return(
      <div className='app'>
        
        <Todo/>
      </div>
    )
  }
}



export default App;
