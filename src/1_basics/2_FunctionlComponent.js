

function CustomText(){
    //This is a react Functional COmponent
    let text="Hello I am a Functional Component"
    return <h1>{text}</h1>;
}

function MyFunctionlComponent(){
    return (
        <div>
           <CustomText></CustomText> 
        </div>
    );
}

export default MyFunctionlComponent;