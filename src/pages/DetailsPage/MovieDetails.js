import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import NavbarOne from '../../component/NavbarOne'
import { AddTofavorite } from '../../rtk/DetailsSlice'

export const MovieDetails = (props) => {
    const [details,setDetails] = useState({})
    const dispatch = useDispatch()
    

    const rr= "https://image.tmdb.org/t/p/w500/"
    const URL = "https://api.themoviedb.org/3/movie/"

    const params = useParams()
    const DetailsPage = () => {
      fetch(`${URL}/${params.movieId}?api_key=07068c1414149b277a58d36d38a2dfe4`)
      .then(res => res.json())
      .then((details) => setDetails(details))
    }
    useEffect(() => {
DetailsPage()
    },[])
  return (
    <>
    
    <div className='DetailsPage' style={{background:"#111"}}>
    <NavbarOne profile={props.profile}/>
    <br/>
    <br/>
    <Container>
       <Row>
          <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
          <img alt="" src={rr+details.poster_path} className="img-fluid" style={{height:"700px",marginBottom:"20px"}}/>
          </div>
          <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{color:"#fff"}}>
          <h1 style={{color:"#e50914"}}>{details.title}</h1>
          <br/>
          <p style={{color:"#777"}}>{details.overview}</p>
          <h5>Language : {details.original_language}</h5>
          <br/>
          <h5>Vote : {details.vote_count}</h5>
          <br/>
          <h5>Date : {details.release_date}</h5>
          <br/>
          <button onClick={() => dispatch(AddTofavorite(details))}>Add To Favorit</button>
          </div>
       </Row>
    </Container>
    </div>
    </>
  )
}
