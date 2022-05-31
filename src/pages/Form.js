import React, { useState } from 'react'
import '../common/css/login.css'
import { useNavigate,Link } from "react-router-dom"; 
import { config } from '../config';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import '../common/css/login.css'
import { AuthContext } from '../common/Context'

import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
    const User = React.useContext(AuthContext);
    const userId = User.userDetail.id
    const [expenseType, setExpenseType] = useState('');
    const [amount, setAmount] = useState('')
    let navigate = useNavigate();
    const [startDate, setStartDate] = useState();

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join("-");
  }

  const logoutHandler = () => {
    User.setUserToken(null)
    navigate('/')
  }

  const expenseFormHandler = async(event) => {
  event.preventDefault();
      if(startDate && amount && expenseType ){
        const fullDateFormat = convert(startDate)
        let formData = new FormData();
  formData.append('request', 'expenseRegister')
  formData.append('expenseType', expenseType)
  formData.append('amount', amount)
  formData.append('expansedate', fullDateFormat)
  formData.append('userId', userId)
  Axios({
      method: 'post',
      url:config.TEST,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
console.log('response', response)
      if(response.data.status=='success'){
          alert('Your Expense Details successfully collected')
    navigate('/list')
      }else{
          alert('Faild Please Try Again')
      }
  })
  .catch(function (response) {
      alert('server problem')
  });   

      }else{
          alert('Please Fill All Details')
      }
  }
  return (
    <div className="rel_position">
      <div class="sidenav">
  <Link to={'/'}>Home</Link>
  <Link to={'/form'}>Form</Link>
  <Link to={'/list'}>List</Link>
  <div className="text-center" style={{marginTop:50,marginRight:10,marginLeft:10}}>

  <button className="w-100 logoutlinks" onClick={()=> logoutHandler()}>Log Out</button>
  </div>
</div>
        <div className="form_box">
            <div className="no-margin">
                <div className="col-md-6 no-padding white_bg">
                    <div className="login_box_pad">
                        <h1 className="no-margin padding_top_default text-center">Expense Form</h1>
                        <h6 className="no-margin padding_top_default text-gray text-center">Fill Your Expense Details</h6>
                        <div className="input-group mb-4 padding_top_default datePicker text-center">
                        <label for="fname">choose date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='MM/DD/YYYY' />

                          </div>
                        <div className="input-group mb-4 padding_top_default">
                          <input  className="form-control" placeholder="Expense Type" required onChange={ (e)=> setExpenseType(e.target.value)}/>
                          </div>
                        <div className="input-group mb-4 padding_top_default">
                          <input className="form-control" type="number" placeholder="Amount" required onChange={ (e)=> setAmount(e.target.value)}/>
                          </div>
                        <div className="padding_top_default text-center">
                            <button className="btn btn-primary px-4 regBtn-color"
                             onClick={(e)=>expenseFormHandler(e)}
                             >Add Details</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
