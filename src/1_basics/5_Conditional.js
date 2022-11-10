
function GetWish1(){
    return <h1>Hello Wish1</h1>;
}
function GetWish2(){
    return <h1>Hello Wish2</h1>;
}

//If statement

function IFTestComponent(props){
    if(props.wish1){
        return GetWish1();
    }else{
        return GetWish2();
    } 
}

//Ternary
function TereneryComponent(props){
    return <div>{props.wish1 ?   GetWish1():GetWish2()}</div> 
}

function LogicalAnd(props){
    return <div>{props.team.length>3 && <p>Team is ready to start</p>}</div>
}

function ConditionalTest(){
    //return <IFTestComponent wish1={false}></IFTestComponent>;
    //return <TereneryComponent wish1={false}></TereneryComponent>
    return <LogicalAnd team={["Subbu","Trump","Jack"]}></LogicalAnd>
}



export default ConditionalTest;