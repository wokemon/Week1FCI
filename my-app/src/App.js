import logo from './logo.svg';
import './App.css';
import { MyButton } from './components/MuiButtons';
import { MyTextfield } from './components/MuiTextfield';
import { Fetch } from './components/MuiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        <div>
          <MyButton />
          <MyHeadings />
        </div> */}
        <div>
          <MyButton />
          <MyTextfield />
          <Fetch/>
        </div>
      </header>
    </div>
  );
}

export default App;