import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link, Router, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './common/Context';
import Home from './pages/Home';

function App() {
  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState(['bfjbdfbs']);
  const user = {userDetail, setUserDetail,userToken,setUserToken};
  return (
    <div className="App">
    {/* <h1>Welcome to React Router!</h1> */}
    <HashRouter>
    <AuthContext.Provider value = {user}>
      <Routes>
        
       {userToken ? <>
        <Route  path="/" element={<Home/>} />
        </>
          :
        <>
        <Route  path="/" element={<Login/>} />
        <Route  path="/register" element={<Register/>} />
        </>}
      </Routes>
      </AuthContext.Provider>
    </HashRouter>
    
  </div>
  );
}

export default App;
