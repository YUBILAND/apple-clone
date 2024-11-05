import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SlideShow = () => {
    var items = [
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ed/5d/5c/ed5d5cb1-fb90-aa84-8109-313e8509872e/d37cc6c7-0707-4bf9-a907-c576cfb9cc07.png/980x551.jpg',
            buttonLabel: 'See the schedule',
            genre: null,
            description: "Watch Messi, every club, and every match—live.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Comedy',
            description: "Breakdown. Breakthrough",
        },
    ]
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='text-center my-20'>

        <Carousel
            additionalTransform={-20 * 5}
            customTransition="transform 8000ms linear"
            autoPlay={true}
            autoPlaySpeed={8000}
            arrows={false}
            draggable={false}
            centerMode={true}
            containerClass="container"
            dotListClass=""
            infinite
            itemClass=""
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay={false}
            sliderClass=""
            slidesToSlide={1}
            className='w-full mx-auto slideshow'
            >
                
                <img className=' ' src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                <img className=' ' src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                <img className=' ' src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                <img className=' ' src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                <img className=' ' src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                <img className=' ' src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                {/* <img src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /> */}
        </Carousel>
    
    {/* <Carousel 
    responsive={responsive}
    autoPlay>
                {
                    items.map( (item) => 
                            <div className='relative text-white w-[1250px] mx-auto'> 
                                <img className='w-[1250px] object-fit' src={item.img} alt="" /> 
                                <div className='absolute bottom-10 left-20 text-center'>
                                    <div className='flex items-center justify-center text-xl mt-2 '>
                                        <button className='text-black rounded-full bg-white py-2 px-5 mr-4'>{item.buttonLabel}</button>
                                        {item.genre && <h2 className='font-bold'>{item.genre} •&nbsp;</h2>}      <h2 className='text-shadow-lg shadow-black desc_shadow'>{item.description}</h2>
                                    </div>
                                </div>
                            </div>

                 )
                }
            </Carousel> */}
     {/* <Carousel>
                {
                    groupedItems.map(itemsArray => (
                        <div className='grid grid-cols-[auto_1250px_auto] gap-3' key={itemsArray.id} >
                            {itemsArray.map(item => 
                            
                            <div className='relative text-white'> 
                                <img className='h-[670px] object-cover' src={item.img} alt="" /> 
                                <div className='absolute bottom-10 left-20 text-center'>
                                    <div className='flex items-center justify-center text-lg mt-2'>
                                        <button className='text-black rounded-full bg-white py-2 px-5 mr-4'>{item.buttonLabel}</button>
                                        {item.genre && <h2 className='font-bold'>{item.genre} •&nbsp;</h2>}      <h2>{item.description}</h2>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                ))}
            </Carousel> */}
    
    </div>
  )
}

export default SlideShow