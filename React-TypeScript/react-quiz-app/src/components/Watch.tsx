import { useEffect, useState } from 'react'
import style from '../styles/Style.module.css'

const Watch = () => {
  const [time, setTime] = useState(new Date());
  // const now: Date = new Date();
  const formatTime = (): string =>{
    const hours: number = time.getHours();
    const minutes:number = time.getMinutes();
    const seconds:number = time.getSeconds();

    return `${addPadding(hours)}:${addPadding(minutes)}:${addPadding(seconds)}`
  }
  const addPadding = (num: number): string | number => {
    return (num < 10 ? "0" + num : num )
  }
  
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return ()=>{
      clearInterval(intervalId)
    }
  },[])

  return (
    <div>
      <p className={style.watch}>{formatTime()}</p>
    </div>
  )
}

export default Watch
