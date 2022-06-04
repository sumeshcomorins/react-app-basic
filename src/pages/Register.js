import React, { useState } from 'react'
import '../common/css/login.css'
import { useNavigate } from "react-router-dom"; 
import { config } from '../config';
import Axios from 'axios';

export default function Register() {
  const [UserEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

const regHandle=async(event)=>{
  event.preventDefault();
  if(UserEmail!='' && password!=''){
  let formData = new FormData();
  formData.append('request', 'registerUser')
  formData.append('username', UserEmail)
  formData.append('password', password)
  Axios({
      method: 'post',
      url:config.TEST,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
console.log('response', response)
      if(response.data.status=='success'){
          alert('success')
    navigate('/')
      }else{
          alert('faild')
      }
  })
  // .catch(function (response) {
  //     alert('server problem')
  // });
}else{
  alert('please fill all field')
}

}

  return (
    <div style={{position:'relative',height:"100vh"}}>
        <div className="reg_box">
            <div className="no-margin">
                <div className="white_bg register_box">
                    <div className="login_box_pad">
                        <h1 className="no-margin padding_top_default text-center">Register</h1>
                        <h6 className="no-margin padding_top_default text-gray text-center">Create Your Account</h6>
                        <div className="input-group mb-4 padding_top_default">
                          <input  className="form-control" placeholder="Email" required onChange={ (e)=> setUserEmail(e.target.value)}/>
                          </div>
                        <div className="input-group mb-4 padding_top_default">
                          <input className="form-control" placeholder="Password" required onChange={ (e)=> setPassword(e.target.value)}/>
                          </div>
                        <div className="padding_top_default text-center">
                            <button className="btn btn-primary px-4 regBtn-color"
                             onClick={(e)=>regHandle(e)}
                             >Create Account</button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
