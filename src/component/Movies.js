import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const Movies = () => {
    const [movie,setMovie] = useState([])
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=07068c1414149b277a58d36d38a2dfe4"
    const imgurl = "https://image.tmdb.org/t/p/w500/"
    const getMovie = () => {
        fetch(URL)
        .then(res => res.json())
        .then((data) => setMovie(data.results))
    }
    useEffect(() => {
        getMovie()
    },[])
    
  return (
    <>
       <Container>
       <div className='row'>
       
       {movie.map((product) => {
        return(
            <div style={{marginBottom:"20px"}} className='col-xxl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6'>
            <Link to={`/${product.id}`}  className='title-movie' style={{textDecoration:"none",color:"#fff"}}>
            <Card.Img  src={imgurl+product.poster_path} />
            <Card.Body>
              <Card.Title style={{marginTop:"20px"}}>{product.original_title}</Card.Title>
            </Card.Body>
            </Link>
            </div>
        )
       })}
       </div>
       </Container>
    </>
  )
}
