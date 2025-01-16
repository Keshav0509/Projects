
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  
  useEffect(()=>{
    if(isRunning){
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return ()=>{
      clearInterval(intervalRef.current);
    }
  },[isRunning]);

  function startWatch(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stopWatch(){
    setIsRunning(false);
  }

  function resetWatch(){
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime(){
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    miliseconds = String(miliseconds).padStart(2,"0");

    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <>
      <div className='container'>
        <div className='watchContainer'>
          <div className='watch'>
            <span>{formatTime()}</span>
          </div>
          <div className='btnContainer'>
            <button onClick={startWatch}>start</button>
            <button onClick={stopWatch}>stop</button>
            <button onClick={resetWatch}>reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
