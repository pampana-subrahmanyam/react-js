/*
React Context:
We can  manage state globally.
*/

import { useState,createContext, useContext } from "react";

//State should be held by the highest parent component 
//in the stack that requires access to the state.
//To do this without Context, we will need to pass the state as "props" 
//through each nested component. 
//This is called "prop drilling".
//Problem with propDrilling
function WithOutContext(){
    /*MyComponent1 */
    const [student,setStudent] = useState("Subbu");
    return( <div>
        <h1>Welome {student}</h1>
        <MyComponent2 student={student} ></MyComponent2>
    </div>)
    //We are passing student props to  MyComponent2
}

function MyComponent2(props){
    return( <div>
        <MyComponent3 student={props.student} ></MyComponent3>
    </div>)
    //We did not used the prop in MyComponent2 but
    //We are passing student props to  MyComponent3.
}


function MyComponent3(props){
    return( <div>
        <MyComponent4 student={props.student} ></MyComponent4>
    </div>)
    //We did not used the prop in MyComponent3 but
    //We are passing student props to  MyComponent4.
}
function MyComponent4(props){
    return( <div>
        <MyComponent5 student={props.student} ></MyComponent5>
    </div>)
    //We did not used the prop in MyComponent4 but
    //We are passing student props to  MyComponent5.
}
function MyComponent5(props){
    return( <div>
        <h1>Bye {props.student}</h1>
    </div>)
    //This student prop travelled from MyComponent1 to MyComponent2,
    //MyComponent3,MyComponent4 and then finally MyComponent5
}

//Use Context to avoide this long travel of props


///////With Context///////

const StudentContext=createContext();

function WithContext(){
    /*MyComponent1 */
    const [student,setStudent] = useState("Subbu");
    return( <div>
        <StudentContext.Provider value={student}>
        <h1>Welome {student}</h1>
        <MyComponentV2></MyComponentV2>
        </StudentContext.Provider>
    </div>)
}

function MyComponentV2(){
    return( <div>
        <MyComponentV3  ></MyComponentV3>
    </div>)
}

function MyComponentV3(){
    return( <div>
        <MyComponentV4  ></MyComponentV4>
    </div>)
}
function MyComponentV4(){
    return( <div>
        <MyComponentV5  ></MyComponentV5>
    </div>)
    //We did not used the prop in MyComponent4 but
    //We are passing student props to  MyComponent5.
}
function MyComponentV5(){
    const student=useContext(StudentContext);
    return( <div>
        <h1>Bye {student}</h1>
    </div>)

}

function ContextExample(){
   //return <WithOutContext></WithOutContext>;
    return <WithContext></WithContext>;
}


export default ContextExample;