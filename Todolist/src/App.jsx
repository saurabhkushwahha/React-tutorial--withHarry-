import React, { useEffect, useState } from 'react'
import TodoForm from './Components/TodoForm'
import TodoItem from'./TodoItem'
import { todoprovider } from './Context/TodoContext'

function App() {
    const [todos, setTodos] = useState([])
    const addTodo=(todo)=>{
          setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    }
    const updateTodo=(id,todo)=>{

         /* prev is a old todos:[ {},{},{}....]
         prev.map((item,index)=>{
                  item:{
                  id:1,
                  todo: "Todo msg",
                  completed: false,
                  }
              })

          */

        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo:prevTodo)))
    }
    const deleteTodo=(id)=>{
    //    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? "s" : prevTodo)))
         setTodos((prev)=>prev.filter((todo)=> todo.id!== id))
    }
    const toggleComplete=(id)=>{
        setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }
// Now we want to use the local storage


useEffect( ()=>{
   const todos=JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length>0){
     setTodos(todos)
   }
  })



 useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])



    return (
        <todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo)=>(
                         <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo}/>
                         </div>
                      ))}
                    </div>
                </div>
            </div>
        </todoprovider>
    )
}

export default App