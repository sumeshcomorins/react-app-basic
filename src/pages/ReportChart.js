import React, { useState, useEffect } from 'react'
import '../common/css/login.css'
import { useNavigate, Link } from "react-router-dom";
import '../common/css/login.css'
import { AuthContext } from '../common/Context'
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart,VictoryLine } from 'victory';
import { config } from '../config';
import Axios from 'axios';

export default function ReportChart() {
   
    let navigate = useNavigate();
    const User = React.useContext( AuthContext );
  const userId = User.userDetail.id
  const [expenseRecordDatas, setExpenseRecordDatas] = useState( '' )
  console.log('expenseRecordDatasscdssdss', expenseRecordDatas)

//   const obj = [
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P2', 'value': 200 },
//     { 'name': 'P3', 'value': 450 }
// ];

// const holder = {};

// obj.forEach(function(d) {
//   if (holder.hasOwnProperty(d.name)) {
//     holder[d.name] = holder[d.name] + d.value;
//   } else {
//     holder[d.name] = d.value;
//   }
// });

// const obj2 = [];

// for (let prop in holder) {
//   obj2.push({ name: prop, value: holder[prop] });
// }

// console.log(obj2);

  useEffect( () => {
    let formData = new FormData();
    formData.append( 'request', 'expenseRecord' )
    formData.append( 'userId', userId )
    Axios( {
      method: 'post',
      url: config.TEST,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    } )
      .then( function ( response ) {
        console.log( 'response', response )
        if ( response.status ) {

          // setExpenseRecordDatas( response.data.records)
const obj = response.data.records
          const holder = {};

obj.forEach(function(d) {
  if (holder.hasOwnProperty(d.date)) {
    holder[d.date] = holder[d.date] + d.amount;
  } else {
    holder[d.date] = d.amount;
  }
});

const obj2 = [];

for (let prop in holder) {
  obj2.push({ date: prop, amount: holder[prop] });
}
setExpenseRecordDatas( obj2.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse())
console.log('ooooooooooooooooooooooooooooo',obj2);
          //   User.setUserDetail(response.data.user)
        } else {
          alert( ' no data found' )
        }
      } )
      .catch( function ( response ) {
        alert( 'server problem' )
      } );
  }, [] )

  const logoutHandler = () => {
    User.setUserToken( null )
    navigate( '/' )
  }

  return (
    <div>
      <div className='row no-margin'>
      <div className='col-md-2 col-sm-12 no-padding d-none d-md-block'>
          <div class="sidenav">
            <Link to={'/'}>Home</Link>
            <Link to={'/form'}>Form</Link>
            <Link to={'/list'}>List</Link>
          <Link to={'/reportChart'}>Chart Report</Link>
            <div className="text-center" style={{ marginTop: 50, marginRight: 10, marginLeft: 10 }}>
              <button className="w-100 logoutlinks" onClick={() => logoutHandler()}>Log Out</button>
            </div>
          </div>
        </div>
        <div className='col-md-10 col-sm-12 no-padding report_responsive_height' style={{position:'relative',backgroundColor:'#d3d3d3'}}>
          <div className="form_box">
              <div className="col-md-12 no-padding white_bg">
                <div className="login_box_pad">
                  <h1 className="no-margin padding_top_default text-center">Expense Chart</h1>
                  <h6 className="no-margin padding_top_default text-gray text-center">Your Expense Chart</h6>
                  {expenseRecordDatas && <VictoryChart
                   domainPadding={25}
                   style={{ data: { fill: "#c43a31" } }}
                   alignment="start"
                   >
        <VictoryBar
          data={expenseRecordDatas}
          x="date"
          y="amount"
        />


         {/* <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={
      expenseRecordDatas.map(({ date, amount }) => ({ x: date, y: amount }))
    }
  />  */}


      </VictoryChart>}
                </div>
              </div>
          </div>
        </div>
        <div className='col-md-2 col-sm-12 no-padding d-sm-block d-md-none'>
          <div class="sidenav">
            <Link to={'/'}>Home</Link>
            <Link to={'/form'}>Form</Link>
            <Link to={'/list'}>List</Link>
          <Link to={'/reportChart'}>Chart Report</Link>
            <div className="text-center logout_btn_responsive_margin" style={{ marginTop: 50, marginRight: 10, marginLeft: 10 }}>
              <button className="w-100 logoutlinks" onClick={() => logoutHandler()}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
