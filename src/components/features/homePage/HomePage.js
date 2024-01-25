import React from 'react';
import SlideShow from '../slideShow/SlideShow';
import DisplayCards from '../../displayCards/DisplayCards';
import PopularMoviesScroll from '../movies/PopularMoviesScroll';
import TopRated from '../movies/TopRated';
import Upcoming from '../movies/Upcoming';



const Home = () =>{

    return(
        <>
        
        <div className="container-fluid">
        <SlideShow/>
            <DisplayCards/>


            {/* <Example1></Example1> */}
            
            <h4 className="movie-heading p-3">Popular</h4>
                <PopularMoviesScroll/>
                 
                {/* <Suspense fallback = { <div> Please Wait... </div> }> */}
                
                {/* </Suspense> */}
            <h4 className="movie-heading p-3">Top- Rated</h4>

                <TopRated/>


            <h4 className="movie-heading p-3">Upcoming</h4>
                <Upcoming/>


            
                 
 
                 
                


                

            
        </div>
    </>
    )
}

export default Home;