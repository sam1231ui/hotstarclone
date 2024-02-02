import React from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import play from '../../pictures/play-icon-black.png';
import grp from '../../pictures/group-icon.png';
import axios from 'axios'
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function Detail(props) {

    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d266ddfd5671ae6c7ffd466d6764cec1`

    const [data, setData] = React.useState(null);
    const [display, setDisplay] = React.useState(false);
     
  
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
      setDisplay(true)
     };

    React.useEffect( () => {
      fetchData()
    }, []);
  
    // if (!data) return null;

    console.log(data)

     
    

    


    return(
        <>
       {display && 
       
      //  whole details of the movie
       <div className="container-fluid pt-3"> 

            {/* button for back      */}
            <Button  className=""onClick={() => navigate(-1)}>back</Button>

          {/* each col is display of info from api */}
          <div className='row p-3'>
              {/* poster img */}
              <div className='col-lg-6'>
                <img alt={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.backdrop_path}`}  className='img-thumbnail'/>
              </div>
              {/* movie title */}
              <div className='col-lg-6'>
                 <Titlle>{data.title}</Titlle>
            {/* tagline and descriptions */}
            <SubTitle>{data.tagline}</SubTitle>
            <SubTitle>{data.release_date} </SubTitle>
            <SubTitle>{data.runtime} min</SubTitle>
            <Description>{data.overview}</Description>
            {/* icons and ratings */}
            <div className='row p-4'>
              <div className='col-lg-4 p-3'>
                <img src={grp} alt="" />
                <h4 className='movie-heading'>{data.popularity}</h4>
              </div>
              <div className='col-lg-4 p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-cash-stack" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
              </svg>
              <h4 className='movie-heading'>${data.budget}</h4>
              </div>
              <div className='col-lg-4 p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-ticket-perforated-fill" viewBox="0 0 16 16">
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z"/>
              </svg>
              <h4 className='movie-heading'>{data.vote_average}</h4>
              </div>
              </div>
              {/* link to movie website */}
              <div className='mt-3 pt-3'>
              <Player className='p-3'>
                <img src={play} alt="" />
                <a className='link-dark' href={data.homepage}>Visit website</a>
              </Player>
              </div>
            </div>
          </div>
      </div>}
      </>

     )
}


const Titlle = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
 
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 30px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;



export default Detail;