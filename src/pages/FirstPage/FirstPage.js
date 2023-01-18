

import React, { useState } from 'react'
import { NavbarFake } from '../../component/NavbarFake'
import  { FirstComponent }  from './firstComponent/FirstComponent'
import { SecondComponent } from './SecondComponent/SecondComponent'


export const FirstPage = (props) => {
    
    const [change,setChange] = useState("FristComponent")

    const toggleSwitch = (forName) => {
        setChange(forName)
    }

  return (
    <div className='Firstpage'>
    <NavbarFake/>
      {change === "FristComponent"  ?  <FirstComponent first={props.dd} second={props.tt} inFormSwitch={toggleSwitch}/> : <SecondComponent third={props.dd} inFormSwitch={toggleSwitch}/>}
    </div>
  )
}
