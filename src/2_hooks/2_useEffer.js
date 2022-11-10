

/*
 Syntax:

1.No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
*/

/*
Application:
To fetch data,
Directly updating the DOM, 
and timers.
*/

/*
In simple words, useState allows our functional components which used to be 
stateless become stateful. And useEffect allows our functional components leverage 
the component lifecycle hooks which were, in the past, only supported for class
components.
*/

import {useEffect, useState } from 'react';

function  WithoutUseEffect(){
    let [count,setCounterValue]=useState (1);
    setTimeout(()=>{setCounterValue((currentCount)=>currentCount+1)},1000)
    return( <div>
      <h1>With Use Effect example:</h1>
      <p>{count}</p>
    </div>)
}

function  WithUseEffect(){
    let [count,setCounterValue]=useState (1);
    useEffect(()=>{
        setTimeout(()=>{setCounterValue((currentCount)=>currentCount+1)},1000);
    });
    return( <div>
      <h1>With Use Effect example:</h1>
      <p>{count}</p>
    </div>)
    //useEffect runs on every render.
    // That means that when the count changes, a render happens, which then triggers another effect.
}

function  UseEffectWithEmptyArrayPassed(){
    let [count,setCounterValue]=useState (1);
    useEffect(()=>{
        setTimeout(()=>{setCounterValue((currentCount)=>currentCount+1)},1000);
    },[]);
    return( <div>
      <h1>With Use Effect example:</h1>
      <p>{count}</p>
    </div>)
    //useEffect runs on every render.If you pass empty array it run only once
}

function  UseEffectWithPropsPassedToArray(){
    let [count,setCounterValue]=useState (1);
    let [someLocalVar,changeSomeLocalVar]=useState (1);
    useEffect(()=>{
        setCounterValue((currentCount)=>currentCount+1);
    },[someLocalVar]);
    return( <div>
      <h1>On someLocalVar change UI rerenders</h1>
      <p>{count}</p>
      <button onClick={changeSomeLocalVar}>Change Value</button>
    </div>)
    //useEffect runs on every render.If you pass empty array it run only once
}

function UseEffectEampleExample(){
    //return WithoutUseEffect();
    //return WithUseEffect();
    //return UseEffectWithEmptyArrayPassed();
    return UseEffectWithPropsPassedToArray();
}

export default UseEffectEampleExample;
