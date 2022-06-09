import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link, Router, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './common/Context';
import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import ReportChart from './pages/ReportChart';
import FileUpload from './pages/FileUpload';

function App() {
  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState(['bfjbdfbs']);
  const user = {userDetail, setUserDetail,userToken,setUserToken};
  return (
    <div >
    {/* <h1>Welcome to React Router!</h1> */}
    <HashRouter>
    <AuthContext.Provider value = {user}>
      <Routes>
        
       {userToken ? <>
        <Route  path="/" element={<Home/>} />
        <Route  path="/form" element={<Form/>} />
        <Route  path="/list" element={<List/>} />
        <Route  path="/reportChart" element={<ReportChart/>} />
        <Route  path="/fileUpload" element={<FileUpload/>} />
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
