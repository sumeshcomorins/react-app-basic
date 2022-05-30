import React,{useState} from 'react'
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate } from "react-router-dom"; 
import { config } from '../config';
import Axios from 'axios';


export default function Login() {
  let navigate = useNavigate();
  const User = React.useContext(AuthContext);
  const [UserEmail, setUserEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('goodluck')


const loginHandle=async(event)=>{
  event.preventDefault();
  if(UserEmail!='' && password!=''){
  let formData = new FormData();
  formData.append('request', 'loginUser')
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
        User.setUserToken(response.data.user.id)
        User.setUserDetail(response.data.user)
      }else{
          alert(' Email or Password wrong.')
      }
  })
  .catch(function (response) {
      alert('Email or Password wrong')
  });
}else{
  alert('please fill all field')
}

}


const activateLasers = () =>{
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
                          <input  className="form-control" placeholder="Use Email" required onChange={ (e)=> setUserEmail(e.target.value)}/>
                          </div>
                        <div className="input-group mb-4 padding_top_default">
                          <input type="password" className="form-control" placeholder="Password" required onChange={ (e)=> setPassword(e.target.value)}/>
                          </div>
                        <div className="padding_top_default text-center">
                            <button className="btn btn-primary px-4" 
                            // onClick={()=> onLogin()}
                            onClick={(e)=>loginHandle(e)}
                            >Login</button>                            
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
