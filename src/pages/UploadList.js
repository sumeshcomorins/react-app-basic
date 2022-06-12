import React, { useState, useEffect, useMemo } from "react";
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../common/navbar";
import { config } from "../config";
import Axios from 'axios';
import { COLUMNS } from "../common/column";
import ReactTable from "react-table";
import 'react-table/react-table.css' ;

export default function UploadList () {
    let navigate = useNavigate();
    const User = React.useContext( AuthContext );
    const userName = User.userDetail.name
    const [transRecordDatas, settransRecordDatas] = useState( '' )
    console.log('transRecordDatas', transRecordDatas)

    const formatDate = ( date ) => {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var now = new Date( date );
        return months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear()
      }
  
    const COLUMNS =[
        // {
        //     Header : 'ID',
        //     accessor : 'id',
        //     Cell : (cell) => <p className="no-margin text-center">{cell.original.id}</p>
        // },
        {
            Header : 'Date',
            accessor : 'date',
            Cell : (cell) => <p className="no-margin text-center">{formatDate(cell.original.date)}</p>
        },
        {
            Header : 'Description',
            accessor : 'description'
        },
        {
            Header : () => <>Original <br/>Description</>,
            accessor : 'originalDescription',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.originalDescription}</p>
        },
        {
            Header : 'Amount',
            accessor : 'amount',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.amount}</p>
        },
        {
            Header : () => <>Transaction <br/>type</>,
            accessor : 'transactionType',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.transactionType}</p>
        },
        {
            Header : 'Category',
            accessor : 'category',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.category}</p>
        },
        {
            Header : 'Account Name',
            accessor : 'accountName',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.accountName}</p>
        },
        {
            Header : 'Labels',
            accessor : 'labels',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.labels}</p>
        },
        {
            Header : 'Notes',
            accessor : 'notes',
            Cell : (cell) => <p className="no-margin text-center">{cell.original.notes}</p>
        },
        
    ]

    const NullComponent = () => {
        return(
            <div>
                <p className="no-margin text-center" style={{paddingTop:10, color:'#656d83'}}>No data found</p>
            </div>
        )
    };

        useEffect( () => {
          let formData = new FormData();
          formData.append( 'request', 'transactionsRecord' )
          Axios( {
            method: 'post',
            url: config.TEST,
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
          } )
            .then( function ( response ) {
              console.log( 'response', response )
              if ( response.status ) {
                settransRecordDatas( response.data.records )
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
    <>   
      <Navbar />      
      <div class="main-content">             
        <div className="home_table_box">            
            {transRecordDatas &&
                <div className="home_content_border" style={{width:'95%', margin:'auto'}}>
                    <h3 className="no-margin text-center" style={{paddingTop:15,paddingBottom:15}}><b>Transaction Record</b></h3>           
                    <ReactTable NoDataComponent={NullComponent} showPaginationBottom={true} minRows = {1}  data={transRecordDatas}  
                        columns={COLUMNS} resizable={true} sortable={true} defaultPageSize={10}                
                        />
                </div>
            }
        </div>        
      </div>
    </>
  )
}
