import {useMemo, useState} from 'react';


/*Without MEMO*/
const highTimeComplexitySum = (num) => {
    console.log("High Time Complexity function.....");
    let sum=0;
    for (let i = 0; i < 500000000; i++) {
        sum = sum+1;
    }
    return sum;
};

function WithOutMemo(){
    const [count,setCount]=useState(0);
    return( <div>
        <h1>Sum = {highTimeComplexitySum()}</h1>
        <div>
            <h1>Counter = {count}</h1>
            <button onClick={()=>setCount((count)=>count+1)}> Increse Count</button>
        </div>
    </div>);
}
//In the above program when counter value changes highTimeComplexitySum() function also 
//calls.This is very expansive function.Because of this page renders very slow.
//comment highTimeComplexitySum and check ,page rerenders very fast when counter changes


/*
We can wrap the high Time Complexity   calls with useMemo hook.

The useMemo hook accepts a second parameter to declare its' dependencies. 

The high Time Complexity  function will only run when its dependencies have changed.

In the following example, the expensive function will only run when count2 is changed and 
not when but not for counter1.
*/
function WithMemo(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    const getHighFunValue=useMemo(()=>{highTimeComplexitySum()},[count2])
    return( <div>
        <h1>Sum = {getHighFunValue}</h1>
        <div>
            <h1>Counter1 = {count1}</h1>
            <button onClick={()=>setCount1((count)=>count+1)}> Increse Counter 1</button>
        </div>
        <div>
            <h1>Counter2 = {count2}</h1>
            <button onClick={()=>setCount2((count)=>count+1)}> Increse Counter 2</button>
        </div>
    </div>);
}
function UseMemoExample(){
    ///return <WithOutMemo></WithOutMemo>
    return <WithMemo></WithMemo> 
}

export default UseMemoExample;