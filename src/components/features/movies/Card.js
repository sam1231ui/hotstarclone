import React from 'react'
import "./Card.css"
import "../../Example/ScrollBar.css"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';




export default function Card(props) {


    const POSTER_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

    // this is to skip null requests
    var show = (props.item.backdrop_path === null) && (props.item.poster_path === null) ? false : true

    
 

  return (
         <div className="card m-3" key={props.item.id}>
            {show && <Link to={'/detail/'+props.item.id} >
                 <img src={POSTER_URL+props.item.poster_path} className="card-img-top poster" alt="..." loading='lazy'/>

            </Link>}
        </div>
  )
}
