import React from 'react'
import "./Card.css"
import "../../Example/ScrollBar.css"
import { Link } from 'react-router-dom';
import Detail from '../Details/Details';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter,Routes , Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Details/DetailsSlice';




export default function Card(props) {


    const POSTER_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

    const navigate = useNavigate()
    const dispatch = useDispatch()
 

  return (

     
         <div className="card m-3" >
         <img src={POSTER_URL+props.item.backdrop_path} className="card-img-top poster" alt="..."/>
         <div className="card-body">
           <h5 className="card-title text-wrap">{props.item.original_title}</h5>
           <button className='button p-2'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment(props.item))}
                >
                    Increment
                </button>
         </div>
       </div>
     
    // // <div className="col-lg-3 col-md-6 col-6">
    // // <div className="card" >
    //         {/* <Link to={'/detail/'+movie.id} >
    //             <img src={movie.cardImg} class="card-img-top" alt="..." id={movie.id}/>
    //         </Link> */}
  
    //     // </div> 
    // // </div>
  )
}
