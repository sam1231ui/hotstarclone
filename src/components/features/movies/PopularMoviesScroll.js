// import '../../HOC/HOC.css';
import Card from '../../features/movies/Card';
import HOC from '../../HOC/HOC';


function HorizontalScroll({allMovies = []}){
   

  return (
    <>
    
    <div className="scroll-content">
        {allMovies.map((item,index) => {
              return <Card key={index} item={item}></Card>
            })
        }
    </div>
    </>
  );
};
const PopularMoviesScroll = HOC(HorizontalScroll, '/discover/movie')
export default PopularMoviesScroll;