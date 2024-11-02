import {useState,useEffect} from 'react'

export const UseEffect = () => {
    useEffect(()=>{
        console.log("hello")
    })

    const [count,setCount]=useState(0)
  return (
<>
<h3>Count:{count}</h3>
<button onClick={()=>setCount((value)=>value-1)}>-</button>
<button  onClick={()=>setCount((value)=>value+1)}>+</button>
</>
  )
}
