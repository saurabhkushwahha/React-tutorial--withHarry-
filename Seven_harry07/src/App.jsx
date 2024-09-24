import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {

const [list, setList]=useState([])
const [task,setTask]=useState('')
 const handleChange=(e)=>{
     setTask(e.target.value)
 };
const handleClick=()=>{
   if(task.trim()!==''){
     setList([...list,task])
     setTask('')
    }
    console.log(list)
};
  return (
    <>
    <input 
    type="text" 
    autoFocus
    value={task}
    onChange={handleChange} />
    <button onClick={handleClick}>Add + </button>
   {list.map( (item,index)=>(
        <Card item={item}/>
   ))}
       
    </>
  )
}

export default App;
