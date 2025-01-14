import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [fontColor, setFontColor] = useState();

  useEffect(()=>{
    if(count > 0){
      setFontColor("green")
    }else if(count === 0){
      setFontColor("white");
    }else{
      setFontColor("red");
    }
  },[count]);
  // setFontColor("red");

  function addCount(){
    setCount(c => c+1);
  }
  function substractCount(){
    setCount ( c => c-1);
  }
  function resetCount (){
    setCount(0);
  }

  return (
    <>
      <div className='w-fit mx-auto my-24 flex items-center justify-center flex-col capitalize'>
        <span style={{color: fontColor}}>
          count: {count}&nbsp;
          color: {fontColor}
        </span>
        <button 
          onClick={addCount}
          className="border border-black border-solid px-5 py-1 rounded-md mt-1 capitalize"
          >
          add value
        </button>
        <button
          className="border border-black border-solid px-5 py-1 rounded-md mt-1 capitalize"
          onClick={substractCount}
        >
          substract value
        </button>
        <button
          className="border border-black border-solid px-5 py-1 rounded-md mt-1 capitalize"
          onClick={resetCount}
        >
          reset count
        </button>
      </div>
    </>
  )
}

export default App
