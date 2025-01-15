// import React from 'react'
import './App.css';
import { useEffect, useState } from "react"

const CounterApp = () => {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState();
  useEffect(()=>{
    if(count>0){
      setColor("green");
    }else if(count<0){
      setColor("red");
    }else{
      setColor("black");
    }
  },[count])

  function addCount(){
    setCount(c => c + 1);
  }
  function substractCount(){
    setCount(c => c - 1);
  }
  function resetCount(){
    setCount(0)
  }

  return (
    <>
      <div className='container'>
        <div className='container'>
          <h1 id="heading" style={{color: color}}>my counter app</h1>
          <div>
            <span>count: {count}</span>
          </div>
          <div>
            <button onClick={substractCount}>substract</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={addCount}>add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CounterApp
