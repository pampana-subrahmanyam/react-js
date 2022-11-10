/*
Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes.
*/




function CustomText(props){
    //This is a react Functional COmponent
    return <h1>{props.text}</h1>;
}

function SimpleProp(){
    let text="I am a simple prop"
    return (
        <div>
           <CustomText text={text}></CustomText> 
        </div>
    );
}

export default SimpleProp;