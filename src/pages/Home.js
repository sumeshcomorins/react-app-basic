import React, { useState } from "react";
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate,Link } from "react-router-dom"; 
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function Home() {
  let navigate = useNavigate();
  const User = React.useContext(AuthContext);
  const userName = User.userDetail.name

  const logoutHandler = () => {
    User.setUserToken(null)
  }

  return (
    
    <div>
    <div class="sidenav">
  <Link to={'/'}>Home</Link>
  <Link to={'/form'}>Form</Link>
  <Link to={'/list'}>List</Link>
  <div className="text-center" style={{marginTop:50,marginRight:10,marginLeft:10}}>

  <button className="w-100 logoutlinks" onClick={()=> logoutHandler()}>Log Out</button>
  </div>
</div>
    <div className="main">
      <div className="rel_position height-100">
        <div className="login_box home_content_border">

  <h3 className="text-center"><b>welcome</b></h3>
  <h2 className="text-center">{userName}kfdjbgkbkfjkg</h2>
        </div>
      </div>
</div>
</div>
  )
}
