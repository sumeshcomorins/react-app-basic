import React,{useState} from 'react'
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate } from "react-router-dom"; 
import { fetchApi } from '../common/css/api';
import { config } from '../config';
import axios from 'axios';


export default function Login() {
  let navigate = useNavigate();
  const User = React.useContext(AuthContext);
  const [UserEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState()
console.log('User', User)
console.log('UserEmail', UserEmail)
console.log('password', password)


const onLogin = async() => {
  alert('inProgress')
//   if(UserEmail && password){
//     const data={
//       "request":"loginUser",
//       "username" : UserEmail,
//       "password" : password,
//   }
//   console.log('data', data)
//   const response = await fetchApi(config.TEST+'loginUser',data);
// console.log('response.data', response)
//   if (response?.data?.status == 'success'){
//   User.setUserToken(response.data.user.id)
//   User.setUserDetail(response.data.user)
//   }else{
//     alert(' Email or Password wrong.')
//   }
//    }
//   else{
//     alert('Wrong Input! Email or password field cannot be empty.')
//   }
}


const activateLasers = () =>{
// alert('bdd')
navigate('/register')
}


  return (
    <div className="rel_position">
        <div className="login_box">
            <div className="row no-margin">
                <div className="col-md-6 no-padding white_bg">
                    <div className="login_box_pad">
                        <h1 className="no-margin padding_top_default">Login</h1>
                        <h6 className="no-margin padding_top_default text-gray">Sign In Your Account</h6>
                        {/* <div className="padding_top_default">
                            <input className="w-100 input_style" placeholder="User Name"/>
                        </div>
                        <div className="padding_top_default">
                            <input type="password" className="w-100 input_style" placeholder="Password"/>
                        </div> */}
                        <div className="input-group mb-4 padding_top_default">
                          <input  class="form-control" placeholder="Use Email" required onChange={ (e)=> setUserEmail(e.target.value)}/>
                          </div>
                        <div className="input-group mb-4 padding_top_default">
                          <input type="password" class="form-control" placeholder="Password" required onChange={ (e)=> setPassword(e.target.value)}/>
                          </div>
                        <div className="padding_top_default text-center">
                            <button className="btn btn-primary px-4" onClick={()=> onLogin()}>Login</button>                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6 no-padding register_bg">
                    <div className="login_box_pad padding_top_default">
                        <div className="text-center">
                            <h1 className="no-margin padding_top_default padding_top_default text-white">Sign up</h1>
                            <p className="no-margin padding_top_default text-white">For Register Your Free Account Please Register here.</p>
                            <button className="margin_top_default btn btn-primary mt-3 active regBtn-color" 
                            onClick={()=> activateLasers()}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
