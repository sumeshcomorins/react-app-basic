import React, { useState, useEffect } from 'react'
import '../common/css/login.css'
import '../common/css/login.css'
import { AuthContext } from '../common/Context'
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart,VictoryLine } from 'victory';
import { config } from '../config';
import Axios from 'axios';
import Navbar from '../common/navbar';
import ReactApexChart from 'react-apexcharts'

export default function ReportChart() {

    const User = React.useContext( AuthContext );
  const userId = User.userDetail.id
  const [expenseRecordDatas, setExpenseRecordDatas] = useState( '' )
  console.log('expenseRecordDatasscdssdss', expenseRecordDatas)
const [series, setSeries] = useState('')
const [datearray, setDatearray] = useState([])
const [state, setState] = useState('')
console.log('datearray', datearray)

// let seriesArr = expenseRecordDatas? expenseRecordDatas.map(v => v.amount) : null
  
  
  
  

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
let convertNumber = obj2.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse()
let numofAmount = convertNumber.map(function (item) {
  return parseInt(item.amount, 10);
});
setSeries(numofAmount)
let dateArr = convertNumber.map(v => v.date)
const test =  {
  options:{
  labels:dateArr,
   chart: {
     width: 380,
     type: 'pie',
   },
   responsive: [{
     breakpoint: 480,
     options: {
       chart: {
         width: 200
       },
       legend: {
         position: 'bottom'
       }
     }
   }]
 }}
setState(test)
setDatearray(dateArr)
console.log('ooooooooooooooooooooooooooooo',numofAmount);
          //   User.setUserDetail(response.data.user)
        } else {
          alert( ' no data found' )
        }
      } )
      // .catch( function ( response ) {
      //   alert( 'server problem' )
      // } );
  }, [] )

  return (
    <div>
      <Navbar />
      <div class="main-content">            
          <div style={{margin:15}}>
            <div className="form_box report_shadow">
                <div className="white_bg" style={{marginTop:90}}>
                  <div className="login_box_pad">
                    <h1 className="no-margin padding_top_default text-center">Expense Chart</h1>
                    <h6 className="no-margin padding_top_default text-gray text-center">Your Expense Chart</h6>
                    
        {series && datearray && <ReactApexChart options={state.options} series={series} type="pie" width={500} />}
                  </div>
                </div>
            </div>
          </div>                
      </div>
    </div>
  )
}
