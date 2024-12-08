import React from 'react'
import { useState } from 'react'
const Counter = () => {

    const [count ,setcount] = useState(0)

    let meassage ;
    let remainingCount = 10 - count;
    function increase(){
        setcount((prevcount)=> prevcount +1)
    }

    if(count < 10){
        meassage =(<div>
            <h1>You Have clicked {count} times</h1>
            <p>Still you have {remainingCount} remaining Counts</p>
            </div>)
    }
    else if(count === 10){
        meassage =(
            <div><h1>you have clicked {count } times
            <p>you have unlocked 10% discount</p>
            </h1></div>
        )
    }

  

  return (
    <>
    <div>Counter = {count}</div>
    <button onClick={ increase}>Increase</button>
    {meassage}
    </>
  )
}

export default Counter