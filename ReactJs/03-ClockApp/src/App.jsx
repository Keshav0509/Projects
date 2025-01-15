import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervervalId = setInterval(()=>{
      setTime(new Date());
    },1000);

    return()=>{
      clearInterval(intervervalId);
    }
  },[])

  function formatTime(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM" ;

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }

  function padZero(num){
    return num = num < 10 ? `0${num}` : num;
  }

  return (
    <>
      <div className='clockContainer'>
        <p className='heading'>My Clock Project</p>
        <div className='clock'>
          <p>{formatTime()}</p>
        </div>
      </div>
    </>
  )
}

export default App
