import {useState } from 'react';


/*
 let [count,setCounterValue]=useState (4);
 where count is the varible that we want to change
 setCounterValue is the function that changes the "count" value
 useState(4) ,heare 4 is the initial value of the "counter".
 useState() function returs array and we are using array destruring
*/


function  WithoutSetState(){
    //Without set state value of counter increase but it won't reflect in the UI
    let count= 4;
    function setCounterValue(value){
        count=count+value; 
        console.log(count)   
    }
  return( <div>
    <h1>Set State example:</h1>
    <p>{count}</p>
    <button onClick={()=>setCounterValue(10)} > Click Me to change state </button>
  </div>)
}

function WithSetState(){
    let [count,setCounterValue]=useState (4);
  return( <div>
    <h1>Set State example:</h1>
    <p>{count}</p>
    <button onClick={()=>setCounterValue(10)} > Click Me to change state </button>
  </div>)
}

function SetStateExample(){
    //return WithSetState();
    return WithoutSetState();
}

export default SetStateExample;
