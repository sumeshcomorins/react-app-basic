import React, { useState } from "react";
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate } from "react-router-dom"; 
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function Home() {
  let navigate = useNavigate();
  const User = React.useContext(AuthContext);
  const userName = User.userDetail.name
  const [startDate, setStartDate] = useState(new Date());
  console.log('startDate', startDate)

  const handleChange = (date) => {
console.log('date', date)
  }
  const logoutHandler = () => {
    User.setUserToken(null)
  }

  return (
    // <div className="hom_position">
    //   <div className="ali">
    //   <h1>welcome {userName}</h1>
    //   <button className="margin_top_default btn btn-primary mt-3 active regBtn-color" onClick={()=> logoutHandler()}>LogOut</button>
    //   </div>
    // </div>
    <div>
    <h2>Expense Traker</h2>
    <div className="homContainer">
    <div className="tab">
  {/* <button className="tablinks">London</button> */}
  <button className="tablinks" onClick={()=> navigate('/form')} >Form</button>
  <button className="tablinks" onClick={()=> navigate('/list')}>expense List</button>
  <button className="tablinks logoutlinks" onClick={()=> logoutHandler()}>Log Out</button>
</div>

<div className="tabcontent">
  <h3>welcome</h3>
  <h2>{userName}</h2>
</div>
</div>
</div>
  )
}
