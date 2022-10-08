import logo from './logo.svg';
import './App.css';




////IN react js ,we can create componect by using functions
function getLogo(){
  let wishName="Subbu"
  ///This is a simple component that return Logo
  return (<div>
<h1>{wishName}</h1>
<img src={logo} className="App-logo" alt="logo" />

  </div>);
}
function App() {
  return getLogo();
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
