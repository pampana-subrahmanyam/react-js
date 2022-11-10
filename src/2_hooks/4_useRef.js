import {useState,useRef} from 'react';

/*
Differences between references and state:
1.Updating a reference doesn't trigger re-rendering, but updating the state makes the component re-render.
2.The reference update is synchronous (the updated reference value is available right away), 
while the state update is asynchronous (the state variable is updated after re-rendering).
*/
function UseState(){
  const [counter,setCounter]=useState(0);
  console.log("Component rendered")
  return (<div>
    <h1>{counter}</h1>
   <button onClick={()=>{setCounter((count)=>count+1)}}>Update State</button>
  </div>);
  //If we use useState,Componnet rerenders evertime we update state changes
}

function UseRef(){
    const countRef=useRef(0);
    const setCounter=()=>{
        countRef.current++;
        console.log(countRef.current)
    }
    console.log("Component rendered")
    return (<div>
      <h1>{countRef.current}</h1>
     <button onClick={()=>{setCounter()}}>Update State</button>
    </div>);
    //If we use useState,Componnet re-renders evertime we update state changes
}

/////////////////////////////
///Accessing DOM elements////

function AccessingDOMElement(){
    const domElementRef=useRef();

    const focusOnInput=()=>{
        domElementRef.current.focus();
    }
    return <div>
        <input ref={domElementRef}></input>
        <div>
        <button onClick={focusOnInput}>Focus on Input</button>
        </div>
    </div>
}

function UseRefExample(){
    //return <UseState></UseState>
    //return <UseRef></UseRef>
    return AccessingDOMElement()
}

export default UseRefExample;