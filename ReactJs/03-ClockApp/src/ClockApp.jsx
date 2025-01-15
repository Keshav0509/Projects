import { useEffect, useState } from 'react'
import './App.css';
const ClockApp = () => {

  const [time, setTime] = useState(new Date());
  
  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridium = hours >= 12 ? "PM" : "AM" ;
    hours = hours % 12 || 12;
    return `${paddingZero(hours)}:${paddingZero(minutes)}:${paddingZero(seconds)} ${meridium}`
  }

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000)

    return()=>{
      clearInterval(intervalId);
    }
  },[]);

  function paddingZero(num){
    return num = num < 10 ? `0${num}` : num ;
  }

  return (
    <>
      <div className='clockContainer'>
        <p className='heading'>this is my clock Project</p>
        <div className='clock'>
          <p>{formatTime()}</p>
        </div>
      </div>
    </>
  )
}

export default ClockApp
