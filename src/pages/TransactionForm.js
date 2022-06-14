import React, { useState } from 'react'
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

export default function TransactionForm () { 
  const User = React.useContext( AuthContext );
  const userId = User.userDetail.id
  const [startDate, setStartDate] = useState()
  const [description, setDescription] = useState( '' )
  const [ogDescription, setOgDescription] = useState( '' )
  const [amount, setAmount] = useState( '' )
  const [transType, setTransType] = useState( '' )
  const [category, setCategory] = useState( '' )
  const [acName, setAcName] = useState( '' )
  const [label, setLabel] = useState( '' )
  const [notes, setNotes] = useState('')
  let navigate = useNavigate();
  function convert ( str ) {
    var date = new Date( str ),
      mnth = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 ),
      day = ( "0" + date.getDate() ).slice( -2 );
    return [mnth, day, date.getFullYear()].join( "-" );
  }

  const expenseFormHandler = async ( event ) => {
    event.preventDefault();
    if ( startDate && description && ogDescription && amount && transType && category && acName && label && notes ) {
      const fullDateFormat = convert( startDate )
      let formData = new FormData();
      formData.append( 'request', 'transRecordRegister' )
      formData.append( 'transDate', fullDateFormat )
      formData.append( 'description', description )
      formData.append( 'ogDescription', ogDescription )
      formData.append( 'amount', amount )
      formData.append( 'transType', transType )
      formData.append( 'category', category )
      formData.append( 'acName', acName )
      formData.append( 'label', label )
      formData.append( 'notes', notes )
      formData.append( 'userId', userId )
      Axios( {
        method: 'post',
        url: config.TEST,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      } )
        .then( function ( response ) {
          console.log( 'response', response )
          if ( response.data.status == 'success' ) {
            alert( 'Your Transaction Details successfully collected' )
            navigate( '/uploadtable' )
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
          <div className='no-padding form_responsive_height' style={{position:'relative'}}>
            <div className="form_position">
              {/* <div className="no-margin"> */}
                <div className="white_bg form_drop_shadow">
                  <div style={{padding:15}}>
                    <h1 className="no-margin padding_top_default text-center">Transaction Form</h1>
                    <h6 className="no-margin padding_top_default text-gray text-center">Fill Your Transaction Details</h6>
                    <div className="input-group mb-4 padding_top_default datePicker text-center">
                      <label for="fname">choose date</label>
                      <DatePicker selected={startDate} onChange={( date ) => setStartDate( date )} placeholderText='MM/DD/YYYY' />
                    </div>

                    <div class="row padding_top_default">
    <div class="col">
      <input type="text" class="form-control" placeholder="Amount" required onChange={( e ) => setAmount( e.target.value )} />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Transaction Type" onChange={( e ) => setTransType( e.target.value )}/>
    </div>
  </div>

  <div class="row padding_top_default">
    <div class="col">
      <input type="text" class="form-control" placeholder="Category" onChange={( e ) => setCategory( e.target.value )}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Account Name" onChange={( e ) => setAcName( e.target.value )}/>
    </div>
  </div>

  <div class="row padding_top_default">
    <div class="col">
      <input type="text" class="form-control" placeholder="Label" onChange={( e ) => setLabel( e.target.value )}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Description" onChange={( e ) => setDescription( e.target.value )}/>
    </div>
  </div>
  <div class="row padding_top_default">
    <div class="col">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Orginal Description" onChange={( e ) => setOgDescription( e.target.value )} ></textarea>
    </div>
    <div class="col">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Notes" onChange={( e ) => setNotes( e.target.value )} ></textarea>
    </div>
  </div>
                    
                    
                    <div className="padding_top_default text-center">
                      <button className="btn btn-primary px-4 regBtn-color"
                        onClick={( e ) => expenseFormHandler( e )}
                      >Add Details</button>
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
