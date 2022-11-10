
////IN react js ,we can create componect by using functions

function singleElement() {
    /*
    JSX stands for JavaScript XML.
    JSX allows us to write HTML in React.
    JSX makes it easier to write and add HTML in React.
    */
    //If you want to return one statement then you can use on line
    return <h1>Hello Boss!!!!</h1>;
    //This stament is adding <h1> tag inside the JavaScript
}

function useVarible() {
    return <div>
        <h1>Hello World!!!!</h1>
        <h1>How are you</h1>
    </div>;
}

function multipleElemenmts() {
    //If multiple statements are there you can use div.Place all the elements inside that
    return <div>
        <h1>Hello World!!!!</h1>
        <h1>How are you</h1>
    </div>;
}

function varibles() {
    let name = "Subbu";
    return <div>
        <h1>How are you</h1>
        <h1>{name}</h1>
    </div>;
}

function TestFile1() {
    //return singleElement();
    // return multipleElemenmts();
    return varibles();
}

export default TestFile1;
