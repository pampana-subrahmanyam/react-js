/*
Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.
*/


function simpleEvent(){
    const onButtonClick=()=>{alert("I am an event!!!")}
    return <button onClick={onButtonClick}>Click Me!! I am an event</button>;
    //In HTML it looke like this
    //<button onclick="shoot()">Take the Shot!</button>
}

function UsingThisKeywordInEvent(){
    const onButtonClick=()=>{alert("Using This keyword in Event")}
    return <button onClick={this.onButtonClick}>Click Me!! I am an event</button>;
    //It won't work
}

function PassingDataToEvent(){
    const onButtonClick=(text)=>{alert(text)}
    return <button onClick={()=>onButtonClick("I am passing a simple text")}>Click Me!! I am an event</button>;
    //It won't work
}

function MyEventTest(){
   //return simpleEvent();
   //return UsingThisKeywordInEvent();
   return PassingDataToEvent();
}


export default MyEventTest;