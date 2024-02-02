import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import './HOC.css';
import TMDB from './TmdbAPI';


export default function HOC(WrappedComponent, entity) {
  return class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tmdbData : [],
            page : 1
        }
    }
    fetchData = async () => {
        try {
    
          const { data } = await TMDB.get(`${entity}`,{
            params: {
              page: this.state.page,
            }
          })
          
          if (data.page < data.total_pages) {
            this.setState((prevState) => ({
              tmdbData: [...prevState.tmdbData, ...data.results],
              page: prevState.page + 1,
            }));
          } else {
            this.setState({ tmdbData: data.results });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    componentDidMount(){
        this.fetchData();
    }
    fetchMoreData = ()=>{
        this.fetchData()
    }
    
    render(){
        return(
            <>
              
                <div className='horizontal-scroll'>
                     <div className='scroll-container' id='scroll-container'>
                     
                        <InfiniteScroll
                            dataLength={this.state.tmdbData.length}
                            next={this.fetchMoreData}
                            hasMore={true}
                            scrollableTarget="scroll-container"
                            className="horizontal-scroll"
                            >
                            <WrappedComponent allMovies = {this.state.tmdbData}></WrappedComponent>
                        </InfiniteScroll>
                    </div>
                </div>
            </>
        )
    }
  }
}