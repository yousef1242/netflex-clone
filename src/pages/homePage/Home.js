

import React from 'react'
import { Movies } from '../../component/Movies'
import NavbarOne from '../../component/NavbarOne'




export const Home = (props) => {
  return (
    <div className='HomePage' style={{background:"#111"}}>
    <NavbarOne profile={props.profile}/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Movies/>
    </div>
  )
}
