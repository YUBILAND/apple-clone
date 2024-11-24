import React, { useContext, useEffect, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CarouselContext } from '../contexts/CarouselContext';
import './TestStoreCarousel.css'

const TestStoreCarousel = (props) => {

    let finalSlideIndex = null;

    // const [slideIndex, setSlideIndex] = useState(0);
    const slideIndex = useRef(0);

    useEffect(() => {
        //get index of last item ( you would see only 1 item), on very last arrow you should see 3 items so lastIndex - 2 (t display 1+2 = 3 slides), this wil give you the amount of times you have to click right arrow to see the last slides. To simplify i just did length - items in responsive var.
        finalSlideIndex = props.items.length - props.itemsToShow;
        
        //disable left arrow since you start on index 0

        const handleLoad = () => { // run after DOM loads
            const arrows = document.querySelectorAll('.carouselContainer > .react-multiple-carousel__arrow')
            
            arrows.forEach(item => {
                item.style.opacity = 0; 
            });

            const hoverCarousel = document.querySelector('.carouselContainer')

            hoverCarousel.addEventListener('mouseenter', () => {
                // make arrows visible
                arrows.forEach((item, itemNum) => {
                    if (slideIndex.current !== 0 ) {
                        item.style.opacity = 1; 
                    } else {
                        if (itemNum === 1) {
                            item.style.opacity = 1; 
                        } 
                    }
                });
            })
    
            hoverCarousel.addEventListener('mouseleave', () => {
                // make arrows invisible when you unhover container
                arrows.forEach(item => {
                    item.style.opacity = 0; 
                });
            })

            handleSlideChange(0); // set left arrow opacity to 0 on index 0 on mount
        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);

    }, [])

    const handleSlideChange = (slideInd) => {
        // handles left and right arrow visibility after first button press since it doesn't trigger on mount
        slideIndex.current = slideInd;

        const leftButton = document.querySelector('.carouselContainer > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left');

        const rightButton = document.querySelector('.carouselContainer > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right');

        if (leftButton) {
            console.log(slideInd)
            if (slideInd > 0) {
                setTimeout(() => {
                    leftButton.removeAttribute('disabled');
                    leftButton.style.display = 'block';
                    leftButton.style.opacity = 1;
                }, 0)
            } else {
                setTimeout(() => {
                    leftButton.style.display = 'none';
                    leftButton.style.opacity = 0;
                }, 0)
            }
        }

        if (rightButton) {
            if (slideInd < finalSlideIndex) {
                setTimeout(() => {
                    rightButton.removeAttribute('disabled');
                    rightButton.style.display = 'block';
                    rightButton.style.opacity = 1;
                }, 0)
            } else {
                setTimeout(() => {
                    rightButton.style.display = 'none';
                    rightButton.style.opacity = 0;
                }, 0)
            }
        }

    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: props.itemsToShow,
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
    <Carousel
        customTransition="transform 500ms ease"
        arrows={true}
        draggable={false}
        keyBoardControl
        renderArrowsWhenDisabled={true}
        renderDotsOutside={true}
        responsive={responsive}
        className='pt-8'
        ssr={true}
        // itemClass='interesting'
        containerClass='carouselContainer'
        // containerClass='weird'
        partialVisible={true}
        beforeChange={handleSlideChange}
        > 
        {props.items.map((item, itemNum) => {
            return (
                <div className={`cursor-pointer relative  transition-transform duration-300 hover:scale-[1.02] shadow-lg rounded-3xl ${item.textColor === 'white' && 'text-white'} w-fit`}>
                    <img className='rounded-3xl w-[480px] h-[500px] object-cover object-bottom' src={item.img} alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 w-[340px]'>

                    {/* TopText */}
                        <div className='text-[12px] pb-2 font-semibold text-[#B64400]'>
                        {item.topText}
                        </div>

                    {/* MiddleText */}
                        <h1 className={`w-[60%] font-semibold text-[28px] leading-[2.1rem]`}>{item.middleText}</h1>

                    {/* BottomText */}
                        <div className='text-[17px]'>
                        {item.bottomText}
                        </div>
                    </div>

                    <div className='absolute bottom-0 right-0 mr-4 mb-4'>
                        <div className='group relative'>
                            <AddCircleRoundedIcon className=' relative text-[#343436] z-20' sx={{fontSize: '2.7rem'}} />
                            <div className='group-hover:bg-white transition-colors duration-300 absolute w-5 h-5 bg-[#D6D6D7] top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10'/>
                        </div>
                    </div>
                </div>
            )
        })}
    </Carousel>
  )
}

export default TestStoreCarousel