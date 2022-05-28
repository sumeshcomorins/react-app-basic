import React from 'react'
import { AuthContext } from '../common/Context'
import '../common/css/login.css'

export default function Home() {
  const User = React.useContext(AuthContext);
  const userName = User.userDetail.name

  const logoutHandler = () => {
    User.setUserToken(null)
  }

  return (
    <div className="hom_position">
      <div className="ali">
      <h1>welcome {userName}</h1>
      <button className="margin_top_default btn btn-primary mt-3 active regBtn-color" onClick={()=> logoutHandler()}>LogOut</button>
      </div>
    </div>
  )
}
