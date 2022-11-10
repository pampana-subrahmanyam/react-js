import { createStore } from 'redux'

//Create Store create a store for us.It will store the varibles

function test1() {
    const rootReducer = (state, action) => {
        return state;
    };
    //Root reducer should contain state and action that we need to apply on it
    //Pass the function rootReducer to store 
    const store = createStore(rootReducer);
    console.log("State value is = ")
    console.log(store.getState());
    return store.getState();
}


function test2() {
    const initialState = 10;
    //assign inital value 0 to state
    const rootReducer2 = (state = initialState, action) => {
        return state;
    };
    const store = createStore(rootReducer2);
    console.log("State value is = ")
    console.log(store.getState());
    return store.getState();
}



function test3() {
    const initialState = {
        counter: 0
    }
    //assign inital value 0 to state
    const rootReducer2 = (state = initialState, action) => {
        return state;
    };
    const store = createStore(rootReducer2);
    console.log("State value is = ")
    console.log(store.getState());
    return store.getState();
}

function test4() {
    //Action intro
    const counterObject = {
        counter: 0
    }
    const rootReducer = (state = counterObject, action) => {
        if (action.type === 'INC_COUNTER') {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        return state;
    };
    const store = createStore(rootReducer);
    console.log("State value is = ")
    console.log(store.getState());
    //dispatch method will action 
    store.dispatch({ type: 'INC_COUNTER' });
    console.log("State value  after increment (After dispatch actio ) is = ")
    console.log(store.getState());
    return store.getState();
}

function test5() {
    const initialState5 = {
        counter: 0
    }
    const rootReducer5 = (state = initialState5, action) => {
        if (action.type === 'INC_COUNTER') {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        if (action.type === 'ADD_COUNTER') {
            return {
                ...state,
                counter: state.counter + action.value
            };
        }
        return state;
    };

    const store5 = createStore(rootReducer5);
    console.log("State value is = ")
    console.log(store5.getState());
    store5.dispatch({ type: 'INC_COUNTER' });
    console.log("State value after increment is = ")
    console.log(store5.getState());
    store5.dispatch({ type: 'ADD_COUNTER', value: 10 });
    console.log("State value after add is = ")
    console.log(store5.getState());

    return store5.getState();

}

function test6() {
    console.log("******* Subscription  ***************")

    const initialState6 = {
        counter: 0
    }
    const rootReducer6 = (state = initialState6, action) => {
        if (action.type === 'INC_COUNTER') {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        if (action.type === 'ADD_COUNTER') {
            return {
                ...state,
                counter: state.counter + action.value
            };
        }
        return state;
    };

    const store6 = createStore(rootReducer6);
    console.log("State value is = ")
    console.log(store6.getState());
    // Subscription
    store6.subscribe(() => {
        console.log('[Subscription]', store6.getState());
    });

    // Dispatching Action
    store6.dispatch({ type: 'INC_COUNTER' });
    console.log("State value after increment is = ")
    console.log(store6.getState());
    store6.dispatch({ type: 'ADD_COUNTER', value: 10 });
    console.log(store6.getState());
    console.log("State value after add  is = ")
    console.log(store6.getState());
    return store6.getState();
}


function ReduxTest() {
    return (<div>
        <h1>Redux Test</h1>
        <p>{test6().toString()}</p>
    </div>)
}

export default ReduxTest;


