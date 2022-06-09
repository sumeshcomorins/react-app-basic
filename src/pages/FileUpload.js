import React, { useState } from "react";
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
console.log('file', file)
    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = async() => {
      alert('in progress')
      //   const formData = new FormData()
      // formData.append( 'request', 'fileUploadRegister' )
      // formData.append("myFile",file)

      //   console.log(file)
      //   // axios.post(config.TEST, formData);
      //   Axios({
      //       method: 'post',
      //       url:config.TEST,
      //       data: formData,
      //       config: { headers: {'Content-Type': 'multipart/form-data' }}
      //   })
      //   .then( function ( response ) {
      //       console.log( 'response', response )
      //       if ( response.data.status == 'success' ) {
      //         alert( 'success' )
      //       } else {
      //         alert( 'Faild Please Try Again' )
      //         console.log('response', response)
      //       }
      //     } )
      //     .catch( function ( response ) {
      //       alert( 'server problem' )
      //     } );
      };

  return (
    <>   
      <Navbar />      
      <div className="main-content">                        
        <div className="rel_position height-100">
          <div className="login_box home_content_border">
            {/* <h3 className="text-center"><b>FileUpload</b></h3>
            <h2 className="text-center">{userName}</h2> */}
            <div id="wrap">
        <div className="container">
            {/* <div className="row">
                <form className="form-horizontal" action="functions.php" method="post" name="upload_excel" enctype="multipart/form-data">
                    <fieldset>
                        <legend>Form Name</legend>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="filebutton">Select File</label>
                            <div className="col-md-4">
                                <input type="file" name="file" id="file" className="input-large"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="singlebutton">Import data</label>
                            <div className="col-md-4">
                                <button type="submit" id="submit" name="Import" className="btn btn-primary button-loading" data-loading-text="Loading...">Import</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div> */}

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


            
        </div>
    </div>
          </div>
        </div>        
      </div>
    </>
  )
}
