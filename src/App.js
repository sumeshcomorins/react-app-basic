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
import UploadList from './pages/UploadList';
import TransactionForm from './pages/TransactionForm';
import ShopForm from './pages/ShopForm';
import ExpenseFileUpload from './pages/ExpenseFileUpload';

function App() {
  const [userToken, setUserToken] = useState(null)
  const [userDetail, setUserDetail] = useState(['bfjbdfbs']);
  const [ddContent, setddContent] = useState([]);
  const user = {userDetail, setUserDetail,userToken,setUserToken,ddContent, setddContent};
  return (
    <div >
    {/* <h1>Welcome to React Router!</h1> */}
    <HashRouter>
    <AuthContext.Provider value = {user}>
      <Routes>
        
       {userToken ? <>
        {/* <Route  path="/home" element={<Home/>} /> */}
        <Route  path="/" element={<ReportChart/>} />
        <Route  path="/form" element={<Form/>} />
        <Route  path="/expenseFileUpload" element={<ExpenseFileUpload/>} />
        <Route  path="/list" element={<List/>} />
        <Route  path="/transactionForm" element={<TransactionForm/>} />
        <Route  path="/fileUpload" element={<FileUpload/>} />
        <Route  path="/uploadtable" element={<UploadList/>} />
        <Route  path="/shopForm" element={<ShopForm/>} />
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
