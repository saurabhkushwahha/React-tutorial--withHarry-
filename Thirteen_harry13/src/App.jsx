import { useState } from 'react'
import './App.css'
import {useForm} from'react-hook-form'

function App() {
const{ register, handleSubmit,watch, setError,formState:{errors,isSubmitting},}=useForm()
 
const delay=(d)=>{
     return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve()
         }, d*1000);
     })
}

//  function delay(d){
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve()
//        }, d*1000);
//    })
      
   
//  }
   const onSubmit= async (data) =>{
      //  await delay(2)  
       let r= await fetch("http://localhost:3000/" , {method: "POST",headers: {
         "Content-Type": "application/json",
       }, body: JSON.stringify(data)})
       let res= await r.text()
       console.log(data,res)
       // due to delay we wait until 2seconds till function completed
       // simulating network delay and you can also add loding......
    // setError("myform", {message:"Your credentials are not valid!"})
    // if(data.username=="aniket"){
    //     setError("aniket",{message:"Sorry you are blocked!"})
    // }
    // if(data.username=="ashutosh"){
    //   setError("ashutosh",{message:"Weclome to website Ashutosh!"})
    // }
  }
  return (
    <>
       {isSubmitting && <div>Loading.......</div>}
         <form action="" onSubmit={handleSubmit(onSubmit)}>
           <input autoFocus type="text" placeholder='username' {...register("username",{required: {value:true,message:'this field is required'}, minLength:{value:3,message:"minlength is 3"},maxLength:{value:15,message:"maxlength is 15"}})} />
          <br />
          {errors.username && <span className='red'>{errors.username.message}</span>}
          <br />
           <input type="password" placeholder='password' {...register("password",{required:true,minLength:{value:4,message:"password smaller than 4"}})} />
           <br />
           {errors.password && <span className='
           red'>{errors.password.message}</span>}
          <br />
           <input disabled={isSubmitting} type="submit" value="submit" />
           <br />
           {errors.myform && <div className='red'> {errors.myform.message} </div>}
           {errors.aniket && <div className='red white'>{errors.aniket.message}</div>}
           {errors.ashutosh && <div className='white'>{errors.ashutosh.message}</div>}
          </form>      
    </>
  )
}

export default App
