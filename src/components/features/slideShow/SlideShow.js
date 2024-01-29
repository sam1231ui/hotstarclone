import React from 'react'
import image1 from '../../pictures/pic1.jpg'
import image2 from '../../pictures/pic2.jpg'
import image3 from '../../pictures/pic3.jpg'
import { 
  CarouselControl, 
  Carousel, 
  CarouselItem, 
  CarouselIndicators, 
} from 'reactstrap'; 



export default function SlideShow() {

  // state to track active index
  const [activeIndex, setIndex] = React.useState(0)
  const [animation, setAnimation] = React.useState(false)

  // items used to cycle through
  const items = [
  {
    caption: "img1",
    src: image1,
    alt: "img1"

  },
  {
    caption: "img2",
    src: image2,
    alt: "img2"

  },
  {
    caption: "img3",
    src: image3,
    alt: "img3"

  },
]

  // initial index
  const itemLength = items.length-1

  // previous and next button
  const previousButton = () =>{

    if(animation)return
    
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1
    setIndex(nextIndex)

  }

  const nextButton = () =>{

    if(animation)return

    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1
    setIndex(nextIndex)
  }

  // set active index and image
  const carouselItemData = items.map((item) => { 
    return ( 
        <CarouselItem 
            key={item.src} 
            onExited={() => setAnimation(false)} 
            onExiting={() => setAnimation(true)} 
        > 
        <div className="carousel-item active">
            <img src={item.src} className="img-fluid" alt="..."/>
        </div>
        </CarouselItem> 
      
    ); 
}); 


// actuall slide show design to render on app
return (
    <div  className='Slideshow'> 
       <div className="container-fluid carousel-inner ">
        <Carousel previous={previousButton} next={nextButton} activeIndex={activeIndex}> 
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={(newIndex) => { 
                    if (animation) return; 
                    setIndex(newIndex); 
                }} /> 
            {carouselItemData} 
            <CarouselControl directionText="Prev" direction="prev" onClickHandler={previousButton} /> 
            <CarouselControl directionText="Next" direction="next" onClickHandler={nextButton} /> 
        </Carousel> 
      </div>
  </div > 
  )
}
