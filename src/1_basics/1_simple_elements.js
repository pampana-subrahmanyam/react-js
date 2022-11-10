
////IN react js ,we can create componect by using functions

function singleElement() {
    //If you want to return one statement then you can use on line
    return <h1>Hello Boss!!!!</h1>;
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
  
  function TestFile1() {
   //return singleElement();
   return multipleElemenmts();
  }
  
  export default TestFile1;
  