import logo from './logo.svg';
import './App.css';
import AppNav from './components/Navbar';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNav/>
        <Routes>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </div>
      </header> */}
      {/* <AppNav />
      <MyTextfield /> */}
    </div>
  );
}

export default App;