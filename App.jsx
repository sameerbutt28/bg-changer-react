import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("black");

  const handleYellow = () => {
    setColor(
      "yellow"
      
    );
  };
  const handleGreen = () => {
    setColor("green");
  };
  const handlRed = () => {
    setColor("red");
  };
  return (
    <div className= "w-full h-screen duration-200 border-solid-black " style={{backgroundColor: color}}  >
      <div className="flex flex-wrap justify-center    ">
        <button
          onClick={handleYellow}
          className=" w-30 text-3xl p-5 m-5 rounded-full"
          style={{backgroundColor: "yellow"}} 
        >
          {" "}
          Yellow{" "}
        </button>
        <button
          onClick={handleGreen}
          className=" w-30 text-3xl p-5  m-5  rounded-full"
          style={{backgroundColor: "green"}} 
        >
          {" "}
          Green{" "}
        </button>
        <button
          onClick={handlRed}
          className=" w-30 text-3xl p-5 m-5 rounded-full"
          style={{backgroundColor: "red"}} 
        >
          {" "}
          Red{" "}
        </button>
      </div>
    </div>
  );
}
