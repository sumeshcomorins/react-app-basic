import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from '../common/Context'

export default function Navbar() {
  const User = React.useContext( AuthContext );
  let navigate = useNavigate();

  console.log('Userjhcjdcgskjhgsj', User)

  const logoutHandler = () => {
    User.setUserToken(null)
    navigate('/')
  }

  return (
    <nav class="navbar navbar-vertical fixed-start navbar-expand-md navbar_dropshadow" id="sidebar" style={{border:'none'}}>
        <div class="container-fluid">
          <i class="fa-solid fa-bars navbar-toggler-icon d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation"></i>         
          <a class="navbar-brand" href="index.html">
            <div class="navbar-brand-img mx-auto">Expense App</div>
          </a>          
          <div class="collapse navbar-collapse" id="sidebarCollapse">
            <ul class="navbar-nav">                
              <li class="nav-item">
                <Link to={'/'} className="nav-link"> 
                        <i class="fe fe-home"></i> Home                    
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/form'} className="nav-link">                    
                    <i class="fe fe-file"></i>Form                    
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/list'} className="nav-link">
                  <i class="fe fe-grid"></i>List
                </Link>                
              </li>
              <li class="nav-item">
                <Link to={'/reportChart'} className="nav-link">
                <i class=" fa-solid fa-chart-column" style={{paddingRight:13}}></i> Chart Report
                </Link>                
              </li>              
            </ul>
            <hr class="navbar-divider my-3" />
            <div class="mt-auto"></div>
            <div class="mb-4" id="popoverDemo" title="Make Dashkit Your Own!" data-bs-content="Switch the demo to   Dark Mode or adjust the navigation layout, icons, and colors!">
              <a class="btn w-100 btn-primary" data-bs-toggle="offcanvas" aria-controls="offcanvasDemo" onClick={()=> logoutHandler()}>
                <i class="fe fe-sliders me-2"></i> Logout
              </a>
            </div>
          </div>
        </div>
      </nav> 
  )
}
