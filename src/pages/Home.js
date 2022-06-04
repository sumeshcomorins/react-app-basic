import React, { useState } from "react";
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate, Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../common/navbar";


export default function Home () {
  let navigate = useNavigate();
  const User = React.useContext( AuthContext );
  const userName = User.userDetail.name

  return (
    <>   
      <Navbar />      
      <div class="main-content">                        
        <div className="rel_position height-100">
          <div className="login_box home_content_border">
            <h3 className="text-center"><b>welcome</b></h3>
            <h2 className="text-center">{userName}</h2>
          </div>
        </div>        
      </div>
    </>
  )
}
