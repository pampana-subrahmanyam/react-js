import {useReducer} from 'react'

const initialCounter =0;

const reducerFunc=(state,action)=>{
    if (action.type === 'INC_COUNTER') {
        //state is the current value.For that we are adding 1
        return state+1;
    }
    if (action.type === 'DEC_COUNTER') {
         //state is the current value.For that we are sub 1
        return state-1;
    }
    return state;
}


function UseReducerExample(){
     const [counter,dispatch]=useReducer(reducerFunc,initialCounter);
     

     const increment=()=>{
        dispatch({type:"INC_COUNTER"})
     };

    const decrement=()=>{
        dispatch({type:"DEC_COUNTER"})
    };
     return (<div>
        <h1>
            Count = {counter}
        </h1>
        <div>
            <button onClick={()=>increment()}>Increment</button>
        </div>
        <div>
            <button onClick={()=>decrement()}>Decrement</button>
        </div>
     </div>);

}

export default UseReducerExample;