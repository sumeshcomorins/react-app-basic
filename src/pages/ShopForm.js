import React, { useState, useEffect } from 'react'
import '../common/css/login.css'
import { useNavigate, Link } from "react-router-dom";
import { config } from '../config';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import '../common/css/login.css'
import { AuthContext } from '../common/Context'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../common/navbar';

export default function ShopForm () {
  const User = React.useContext( AuthContext );
  const userId = User.userDetail.id
  const ddVal = User.ddContent
  const [shopName, setShopName] = useState( '' );
  const [amount, setAmount] = useState( '' )
  const [token, setToken] = useState( '' )
  const [budgetRec, setBudgetRec] = useState('')
  console.log('budgetRec', budgetRec)
  let navigate = useNavigate();
  const shopSelect = ( { value } ) => {
    setShopName( value )
  }

  useEffect( () => {
    let formData = new FormData();
    formData.append( 'request', 'budgetRecord' )
    formData.append( 'userId', userId )
    Axios( {
      method: 'post',
      url: config.TEST,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    } )
      .then( function ( response ) {
        console.log( 'budgRecorddddddresponse', response )
        if ( response.status ) {
const obj = response.data.records


var sumedUpDates = [];
var amount = [];

function isDateSumedUp(shop) {
    return sumedUpDates.indexOf(shop.substring(0, 10)) !== -1;
}

function sumUpDate(shop) {
    var sum = 0;
    obj.forEach(t => {
        if(t.shop_name.substring(0, 10) === shop.substring(0, 10)) {
            sum += parseInt(t.amount);
        }
    });
    sumedUpDates.push(shop.substring(0, 10));
    amount.push(sum);
}
obj.forEach(t => {
  if(!isDateSumedUp(t.shop_name)) {
      sumUpDate(t.shop_name);
  }
});
var obje = {};
sumedUpDates.forEach((d, i) => obje[d] = amount[i]);
const splitKeyValue = obj => {
    const keys = Object.keys(obj);
    const res = [];
    for(let i = 0; i < keys.length; i++){
       res.push({
          'shop_name': keys[i],
          'amount': obj[keys[i]]
       });
    };
    return res;
 };
 const resultArr = splitKeyValue(obje)
setBudgetRec(resultArr)
        } else {
          alert( ' no data found' )
        }
      } )
  }, [token] )

  const expenseFormHandler = async ( event ) => {
    event.preventDefault();
    if ( amount && shopName ) {
      let formData = new FormData();
      formData.append( 'request', 'budgetRegister' )
      formData.append( 'shopName', shopName )
      formData.append( 'amount', amount )
      formData.append( 'userId', userId )
      Axios( {
        method: 'post',
        url: config.TEST,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      } )
        .then( function ( response ) {
          console.log( 'budgetRegister', response )
          if ( response.data.status == 'success' ) {
            alert( 'Your Budget Details successfully collected' )
            setToken(Math.floor(Math.random() * 100) + 1)
            setShopName('')
            setAmount('')
            // navigate( '/list' )
          } else {
            alert( 'Faild Please Try Again' )
          }
        } )
        // .catch( function ( response ) {
        //   alert( 'server problem' )
        // } );

    } else {
      alert( 'Please Fill All Details' )
    }
  }
  return (
    <div>     
        <Navbar />
        <div class="main-content">          
          <div className='no-padding form_responsive_height' style={{marginTop:15}}>
            <div style={{width:'95%',margin:'auto'}}>
              {/* <div className="no-margin"> */}
                <div className="white_bg form_drop_shadow">
                  <div style={{padding:15}}>
                    <div style={{width:"50%",margin:'auto'}}>
                        <h1 className="no-margin padding_top_default text-center">Budget Form</h1>
                        <h6 className="no-margin padding_top_default text-gray text-center">Fill Your Budget Detail</h6>
                        <Dropdown style={{marginTop:5}}options={ddVal} onChange={shopSelect} value={shopName} placeholder="Select Shop" />
                        <div className="input-group mb-4 padding_top_default">
                        <input className="form-control" type="number" placeholder="Amount" value={amount} required onChange={( e ) => setAmount( e.target.value )} />
                        </div>
                        <div className="padding_top_default text-center">
                        <button className="btn btn-primary px-4 regBtn-color"
                            onClick={( e ) => expenseFormHandler( e )}
                        >Add Details</button>
                        </div>
                    </div>
<div className='row' style={{marginTop:15}}>
{budgetRec &&
budgetRec.map((item,index)=>{
    return(
<div className='col-lg-4 col-md-6 col-sm-12'>
    <div className="card" style={{    backgroundColor: '#6897a1'}}>
    <img style={{padding:15}} src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=2000" class="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
    <div className='text-center'>
        {/* <span>
            Shop Name : 
        </span> */}
        <span style={{color:'#ffa427'}}>
        {item.shop_name}
        </span>
    </div>
    <div className='text-center'>
        <span style={{color:'black'}}>
            Total Amount : 
        </span>
        <span style={{color:'black'}}>
        &nbsp;{item.amount}
        </span>
    </div>
  </div>
</div>
    </div>
    )
})
    }



    {/* <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className="card" >
  <img style={{padding:15}} src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_960_720.jpg" class="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <div>
        <span>
            Shop Name :
        </span>
        <span>
            Shop Name
        </span>
    </div>
    <div>
        <span>
            Amount :
        </span>
        <span>
            Amount
        </span>
    </div>
  </div>
</div>
    </div>


    <div className='col-lg-4 col-md-6 col-sm-12'>
    <div className="card" >
    <img style={{padding:15}} src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_960_720.jpg" class="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <div>
        <span>
            Shop Name :
        </span>
        <span>
            Shop Name
        </span>
    </div>
    <div>
        <span>
            Amount :
        </span>
        <span>
            Amount
        </span>
    </div>
  </div>
</div>
    </div> */}


</div>
                    



                  </div>
                </div>
              {/* </div> */}
            </div>
          </div> 
        </div>
    </div>
  )
}
