import React,{useState,useEffect} from 'react'
import { config } from '../config';
import Axios from 'axios';
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate,Link } from "react-router-dom"; 


export default function List() {
    const User = React.useContext(AuthContext);
  let navigate = useNavigate();
    const userId = User.userDetail.id
    const [expenseRecordDatas, setExpenseRecordDatas] = useState('')
if(expenseRecordDatas){
  const sortArray = expenseRecordDatas.sort((a,b)=>{
    return new Date(b.date) - new Date(a.date);
})
console.log('sortArray', sortArray)
}

const logoutHandler = () => {
  User.setUserToken(null)
  navigate('/')
}

    useEffect(() => {
        let formData = new FormData();
  formData.append('request', 'expenseRecord')
  formData.append('userId', userId)
        Axios({
            method: 'post',
            url:config.TEST,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
          console.log('response', response)
            if(response.status){
                setExpenseRecordDatas(response.data.records)
            //   User.setUserDetail(response.data.user)
            }else{
                alert(' no data found')
            }
        })
        .catch(function (response) {
            alert('server problem')
        });
    }, [])
    
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
        <div className="expenseList_box">
            <div className="no-margin">
                <div className="col-md-6 no-padding white_bg">
                    <div className="expenseList_box_pad">
                        <h1 className="no-margin padding_top_default text-center">Expense Records</h1>
                        <h6 className="no-margin padding_top_default text-gray text-center">For Your Expense Record</h6>
                        
                        

                        
        <table class="table table-striped">
  <thead>
    <tr className='text-center'>
      {/* <th scope="col">#</th> */}
      <th scope="col">Date</th>
      <th scope="col">Expense Amount</th>
      <th scope="col">Expense Type</th>
      {/* <th scope="col">Action</th> */}
    </tr>
  </thead>
  <tbody>
    { expenseRecordDatas &&
        expenseRecordDatas.map((item, index) => {
          return (
            <tr className='text-center'>
      <td>{item.date}</td>
      <td>{item.amount}</td>
      <td>{item.type}</td>
      {/* <td>
        <div className='d-flex align-items-center justify-content-evenly'>

          <i class="fa-solid fa-pen-to-square" style={{cursor:'pointer'}} onClick={()=>alert('edit')}></i>
          <i class="fa-solid fa-trash-can" style={{cursor:'pointer'}} onClick={()=>alert('delete')}></i>
        </div>
      </td> */}

    </tr>
          );
        })
      }
    
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}

  </tbody>
</table>




                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
