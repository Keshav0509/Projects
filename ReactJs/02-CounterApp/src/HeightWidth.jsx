import { useEffect, useState } from "react";

function HeightWidth(){

  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    console.log("event listener added...");

    return()=>{
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed...");
    }
  },[])

  function handleResize(){
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return(
    <>
      <div className="border border-black border-solid text-center capitalize">
        <span>height: {height}px</span>&nbsp;
        <span>width: {width}px</span>
      </div>
    </>
  );
}
export default HeightWidth;