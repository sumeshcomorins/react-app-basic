import React,{useState,useEffect} from 'react'
import { config } from '../config';
import Axios from 'axios';
import { AuthContext } from '../common/Context'
import '../common/css/login.css'


export default function List() {
    const User = React.useContext(AuthContext);
    const userId = User.userDetail.id

//     useEffect(async() => {
//         let formData = new FormData();
//   formData.append('request', 'expenseRecord')
//   formData.append('userId', userId)
//         Axios({
//             method: 'post',
//             url:config.TEST,
//             data: formData,
//             config: { headers: {'Content-Type': 'multipart/form-data' }}
//         })
//         .then(function (response) {
//       console.log('response', response.data)
//             // if(response.data.status=='success'){
//             //     console.log('response.data', response.data)
//             // //   User.setUserDetail(response.data.user)
//             // }else{
//             //     alert(' no data found')
//             // }
//         })
//         .catch(function (response) {
//             alert('server problem')
//         });
//     }, [])
    
  return (
<div className="rel_position">
        <div className="expenseList_box">
            <div className="no-margin">
                <div className="col-md-6 no-padding white_bg">
                    <div className="expenseList_box_pad">
                        <h1 className="no-margin padding_top_default">Expense Records</h1>
                        <h6 className="no-margin padding_top_default text-gray">For Your Expense Record</h6>
                        
                        

                        
        <table class="table table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Date</th>
      <th scope="col">Expense Amount</th>
      <th scope="col">Expense Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      {/* <th scope="row">2</th> */}
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      {/* <th scope="row">3</th> */}
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>




                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
