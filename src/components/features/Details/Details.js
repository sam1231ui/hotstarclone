import React from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import play from '../../pictures/play-icon-black.png';
import grp from '../../pictures/group-icon.png';
import axios from 'axios'




function Detail(props) {

  
    const { id } = useParams();
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
       {display && <div className="container-fluid">
            {/* <Background>
                <img alt="..." src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`} />
            </Background> */}
          <div className='row p-3'>
              <div className='col-lg-6'>
                <img alt="..." src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}  className='img-thumbnail'/>
              </div>
              <div className='col-lg-6'>
                 <Titlle>{data.title}</Titlle>
             
            <SubTitle>{data.tagline}</SubTitle>
            <SubTitle className=''>{data.release_date} </SubTitle>
            <SubTitle className=''>{data.runtime} min</SubTitle>
            <Description className=''>{data.overview}</Description>
          
           
              <div className='p-3'>
                <img src={grp} alt="" />
                <h4>{data.popularity}</h4>
              </div>
              <div className='p-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
              </svg><h4>{data.budget}$</h4>
              </div>

              <div className='mt-3 pt-3'>
              <Player className='p-3'>
                <img src={play} alt="" />
                <a href={data.homepage}>Visit website</a>
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