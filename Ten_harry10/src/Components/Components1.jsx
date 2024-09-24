import React from 'react'
import { countContext } from '../Context/Context'
import { useContext } from 'react'
//useContext
// Purpose: useContext is a React Hook that allows you to consume or access the value stored in a Context object. It simplifies the process of consuming context data within functional components.

// Usage: You use useContext inside a functional component to access the current context value that was provided by the nearest Provider in the component tree.

function Components1() {
    const counter=useContext(countContext);
  return (
    <div>
        Components   {counter.count}
   </div>
  )
}

export default Components1