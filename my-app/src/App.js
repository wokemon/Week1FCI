/* eslint-disable react/jsx-no-comment-textnodes */
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
        // have to put this in here for homepage
        <AppNav />
        <Routes>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;