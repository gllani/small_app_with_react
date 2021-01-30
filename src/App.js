import React from 'react';
import logo from './logo.svg';
import Studenti from './components/studenti';
import './App.css';

class App extends React.Component{
  
  state={
    studentet:[],
    student:''
  }
  
  render(){
    const Studenta=()=>{
     return  this.state.studentet.map(
         (x)=>{
           return <Studenti name={x}/>
         }
       )
  }
  const onClickStudentHandler=()=>this.setState({studentet:[...this.state.studentet,this.state.student]})

   const onChangeStudentHandler =(event)=>{
    console.log(event) 
    this.setState({
     student:event
   })}

  return (
    <div className="App">
     <Studenta/>
     <input type={'text'} onChange={(e)=>onChangeStudentHandler(e.target.value) } />
<button style={{borderRadius:"90px"}} onClick={onClickStudentHandler} >Add Student</button>
    </div>
    )
    
  }
  
  
}

export default App;
