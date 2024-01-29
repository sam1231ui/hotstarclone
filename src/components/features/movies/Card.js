import React from 'react'
import "./Card.css"
import "../../Example/ScrollBar.css"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';




export default function Card(props) {


    const POSTER_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'
 

  return (

     
         <div className="card m-3" >
         <img src={POSTER_URL+props.item.backdrop_path} className="card-img-top poster" alt="..."/>
         <div className="card-body">
           <h5 className="card-title text-wrap">{props.item.original_title}</h5>
           {/* <Button onClick={handleClick(props.item)} variant="primary">
                    Read More
            </Button> */}
            <Link to={'/detail/'+props.item.id} >
                <Button>View Details</Button>
            </Link>
         </div>
       </div>
  )
}
