import React from 'react'
import HoverVideoPlayer from 'react-hover-video-player';
import video1 from '../videos/disney.mp4'
import video2 from '../videos/geographic.mp4'
import video3 from '../videos/marvel.mp4'
import video4 from '../videos/pixar.mp4'
import video5 from '../videos/star-wars.mp4'
import image1 from '../pictures/viewers-disney.png'
import image2 from '../pictures/viewers-national.png'
import image3 from '../pictures/viewers-marvel.png'
import image4 from '../pictures/viewers-pixar.png'
import image5 from '../pictures/viewers-starwars.png'



export default function DisplayCards() {

    // data array
    const displayData = [
        {
            id: '1',
            vid: video1,
            image: image1
        },
        {
            id: '2',
            vid: video2,
            image: image2
        },
        {
            id: '3',
            vid: video3,
            image: image3
        },
        {
            id: '4',
            vid: video4,
            image: image4
        },
        {
            id: '5',
            vid: video5,
            image: image5
        }
    ]


    // set active index and image
  const DisplayItemData = displayData.map((item) => { 
    return ( 
        <div className="col-lg-2 col-md-6 p-4" key={item.id}>
            <div className="card main-card p-3">
                <HoverVideoPlayer
                            key={item.id}
                            className='hovervideoplayer'
                            videoSrc={item.vid}
                            overlayTransitionDuration={5000}
                            pausedOverlay={
                                    <img key={item.id} src={item.image} alt="" className='card-img-top'/>
                                }
                            loadingOverlay={
                                    <div className="loading-spinner-overlay" key={item.id}>
                                        Loading
                                    </div>
                                    }
                            />
            </div>
        </div>
      
        ); 
    }); 

  return (
    <div className="row">
        {DisplayItemData}         
    </div>
  )
}
