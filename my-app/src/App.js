/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import AppNav from './components/Navbar';
import SignIn from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNav />
        <Routes>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/login/signup" element={<SignUp />}></Route>
          <Route path="/login/reset" element={<ResetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;