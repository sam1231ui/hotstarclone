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
  const TopRated = HOC(HorizontalScroll, '/movie/top_rated')
  export default TopRated;