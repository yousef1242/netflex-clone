
import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import { useNavigate } from 'react-router-dom'
import img2 from "./20995572_640x640.webp"


export const SecondComponent = (props) => {
  const navigate = useNavigate()
  const handle = () => {
    navigate("/home")
  }
  return (
    <div className="NamePage">
    <Container>
    <h1>Hello {props.third}</h1>
    <img src={img2} alt=""/>
    <button onClick={handle}>Continue</button>
    </Container>
    </div>
  )
}
