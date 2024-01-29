import React, {Suspense}from 'react';
import SlideShow from '../slideShow/SlideShow';
import DisplayCards from '../../displayCards/DisplayCards';
import ContinueWatch from '../movies/ContinueWatch';
import { ToastContainer } from 'react-toastify';


// Lazy loading
const Upcoming = React.lazy(() => import ('../movies/Upcoming'))
const TopRated = React.lazy(() => import ('../movies/TopRated'))
const Popular = React.lazy(() => import ('../movies/PopularMoviesScroll'))



const Home = () =>{

    // to check if user is logged
    const [renderContnent, setRenderContent] = React.useState("");
    setInterval(() => {
        localStorage.getItem('my-key') ? setRenderContent(<div><h4 className="movie-heading p-3">Continue Watching</h4><ContinueWatch/></div>) : setRenderContent("")
    }, 3000)

    return(
        <>
        <ToastContainer/>
        
        <div className="container-fluid">
        {/* carousel */}
        <SlideShow/>

        {/* Brand display */}
        <DisplayCards/>

        
        {/* Continue Watching div */}
            {renderContnent}
            
            
        {/* movie scroll divs */}
        <Suspense fallback={<h4 className='movie-heading p-3'>Loading...</h4>}>
            <h4 className="movie-heading p-3">Top- Rated</h4>
                <TopRated/>
        </Suspense>

        <Suspense fallback={<h4 className='movie-heading p-3'>Loading...</h4>}>
            <h4 className="movie-heading p-3">Popular</h4>
                <Popular/>
        </Suspense>
        <Suspense fallback={<h4 className='movie-heading p-3'>Loading...</h4>}>
            <h4 className="movie-heading p-3">Upcoming</h4>
                <Upcoming/>
        </Suspense>
        </div>
    </>
    )
}

export default Home;