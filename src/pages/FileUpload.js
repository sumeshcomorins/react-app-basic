import React, { useState, useEffect } from "react";
import { AuthContext } from '../common/Context'
import '../common/css/login.css'
import { useNavigate, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../common/navbar";
import { config } from "../config";
import Axios from 'axios';


export default function FileUpload () {
  let navigate = useNavigate();
  const User = React.useContext( AuthContext );
  const userName = User.userDetail.name

  const [file, setFile] = useState();
    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = async() => {
        const formData = new FormData()
      formData.append( 'request', 'fileUploadRegister' )
      formData.append("myFile",file)

        console.log(file)
        // axios.post(config.TEST, formData);
        Axios({
            method: 'post',
            url:config.TEST,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then( function ( response ) {
            console.log( 'response', response )
            if ( response.data.status == 'success' ) {
              alert( response.data.message )
              navigate('/uploadtable')
            } else {
              alert( response.data.message )
              console.log('response', response)
            }
          } )
          // .catch( function ( response ) {
          //   alert( 'server problem' )
          // } );
      };

  return (
    <>   
      <Navbar />      
      <div className="main-content">                        
        <div className="rel_position transTableHeight">
          <div className="login_box home_content_border">
            {/* <h3 className="text-center"><b>FileUpload</b></h3>
            <h2 className="text-center">{userName}</h2> */}
            <div id="wrap">
        <div className="container">
<div style={{ textAlign: "center" }}>
            <h3 className="text-center" style={{marginTop:10}}><b>FileUpload</b></h3>
            <form>
                <input
                className="form-control"
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={(e)=>handleOnChange(e)}
                />
                <div className="mb-4" id="popoverDemo" title="Make Dashkit Your Own!" data-bs-content="Switch the demo to   Dark Mode or adjust the navigation layout, icons, and colors!" style={{marginTop:15}}>
              <a class="btn w-30 btn-primary" data-bs-toggle="offcanvas" aria-controls="offcanvasDemo" onClick={(e)=> onFileUpload(e)}>
              <i class="fa-solid fa-file-arrow-up"></i> Upload
              </a>
            </div>
            </form>
        </div>

        {/* <div className='list_responsive_height' style={{ position: 'relative' }}>
          <div>
            <div className="list_table_box white_bg">
              <div className="expenseList_box_pad list_table_responsive_scroll">
                <h1 className="no-margin padding_top_default text-center">Transcations Records</h1>
                <h6 className="no-margin padding_top_default text-gray text-center">For Your Transcations Record</h6>
                <table class="table table-striped">
                  <thead>
                    <tr className='text-center'>
                      <th scope="col">Date</th>
                      <th scope="col">Description</th>
                      <th scope="col">Original Description</th>
                      <th scope="col">Amount</th>
                      <th scope="col">transactionType</th>
                      <th scope="col">Category</th>
                      <th scope="col">Account Name</th>
                      <th scope="col">labels</th>
                      <th scope="col">notes</th>
                    </tr>
                  </thead>
                  <tbody>
                  {transRecordDatas &&
                      transRecordDatas.map( ( item, index ) => {
                        return (
                  <tr className='text-center'>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td>{item.originalDescription}</td>
                            <td>{item.amount}</td>
                            <td>{item.transactionType}</td>
                            <td>{item.category}</td>
                            <td>{item.accountName}</td>
                            <td>{item.labels}</td>
                            <td>{item.notes}</td>
                          </tr>
                          );
                        } )
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}


            
        </div>
    </div>
          </div>
        </div> 
        </div>
        
    </>
  )
}
