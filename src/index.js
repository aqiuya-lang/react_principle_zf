import React from "react";
import ReactDOM from "react-dom/client";

// import React from "./handwrite/react";
// import ReactDOM from "./handwrite/react-dom/client";



function Element() {

  const handleParentCapture = () => {
    console.log("react--parent--capture")
  }
  const handleChildCapture = () => {
    console.log("react--child--capture")
  }

  const handleParentBubble = () => {
    console.log("react--parent--bubble")
  }
  const handleChildBubble = () => {
    console.log("react--child--bubble")
  }
  return (
    <div id="parent" onClickCapture={handleParentCapture} onClick={handleParentBubble}>

      <button id="child" onClickCapture={handleChildCapture}  onClick={handleChildBubble}>
          react中的合成事件
      </button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element/>
);


setTimeout(() => {
  document.getElementById('parent').addEventListener('click',() => {
    console.log("native--parent--capture")
  }, true)
  document.getElementById('child').addEventListener('click',() => {
    console.log("native--child--capture")
  }, true)
  document.getElementById('parent').addEventListener('click',() => {
    console.log("native--parent--bubble")
  })
  document.getElementById('child').addEventListener('click',() => {
    console.log("native--child--bubble")
  })

}, 2000)