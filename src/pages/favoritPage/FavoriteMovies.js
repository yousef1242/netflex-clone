import React from 'react'
import {Container} from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import NavbarOne from '../../component/NavbarOne';
import { removeone } from '../../rtk/DetailsSlice';
export const FavoriteMovies = () => {
    const rr= "https://image.tmdb.org/t/p/w500/"
    const state = useSelector((state) => state.addtofavorite)
    const dispatch = useDispatch()
  return (

    <div className='favoritMovie' style={{background:"#222",minHeight:"100vh"}}>
       <Container>
       <NavbarOne/>
       <br/>
       <br/>
       <Table  hover variant='dark'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>popularity</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {state.map((favorite) => (
        
          <tr>
            <td><img style={{height:"400px"}} className='img-fluid' src={rr+favorite.poster_path} alt=""/></td>
            <td>{favorite.title}</td>
            <td>{favorite.popularity}</td>
            <td>{favorite.vote_average}</td>
            <td><button onClick={() => dispatch(removeone(favorite))}>Delete</button></td>
          </tr>
))}

      </tbody>
    </Table>
       </Container>
    </div>
  )
}
