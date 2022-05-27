import React, { useState } from 'react'
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate } from "react-router-dom"; 
import { fetchApi } from '../common/css/api';
import { config } from '../config';
import axios from 'axios';

export default function Register() {
  const [UserEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState()
  let navigate = useNavigate();
  const User = React.useContext(AuthContext);
console.log('User', User)

const onRegister = async() => {
  alert('inProgress')
  // if(UserEmail && password){
  //   const data={
  //     "request":"registerUser",
  //     "username" : UserEmail,
  //     "password" : password,
  // }
  // console.log('data', data)
  // const response = await fetchApi(config.TEST+'registerUser',data);
  // console.log('first', response)
  // if (response?.data?.status == 'success'){
  //   navigate('/')
  // }else{
  //   alert("Already Email is there.")
  // }
  //  }
  // else{
  //   alert('Wrong Input! Email or password field cannot be empty.')
  // }
}

  return (
    <div className="rel_position">
        <div className="reg_box">
            <div className="no-margin">
                <div className="col-md-6 no-padding white_bg">
                    <div className="login_box_pad">
                        <h1 className="no-margin padding_top_default">Register</h1>
                        <h6 className="no-margin padding_top_default text-gray">Create Your Account</h6>
                        <div className="input-group mb-4 padding_top_default">
                          <input  className="form-control" placeholder="Email" required onChange={ (e)=> setUserEmail(e.target.value)}/>
                          </div>
                        <div className="input-group mb-4 padding_top_default">
                          <input className="form-control" placeholder="Password" required onChange={ (e)=> setPassword(e.target.value)}/>
                          </div>
                        <div className="padding_top_default text-center">
                            <button className="btn btn-primary px-4 regBtn-color"
                             onClick={()=> onRegister()}
                             >Create Account</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
