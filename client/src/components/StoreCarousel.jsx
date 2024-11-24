import React, { useContext, useEffect, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CarouselContext } from '../contexts/CarouselContext';
import './StoreCarousel.css'


const StoreCarousel = (props) => {

    const [translateBy, setTranslateBy] = useState(0);
    const translateByRef = useRef(0);

    useEffect(() => {

        const handleLoad = () => {

            const itemsArr = document.querySelectorAll('.react-multi-carousel-track')
            itemsArr &&
            itemsArr.forEach(items => {
                items.querySelectorAll('li').forEach(item => {
                    item.style.width = '500px'; 
                });

            });
    
            const leftButton = document.querySelector('.buttonInteresting > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left');
    
            const rightButton = document.querySelector('.buttonInteresting > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right');
    
            let isDelaying = false;
    
            if (leftButton && rightButton) {
                leftButton.addEventListener('click', () => {
                    if (!isDelaying) {
                        setTranslateBy(prev => prev > 0 ? prev - 1 : prev)
                        isDelaying = true;
                        setTimeout(() => {
                            isDelaying = false;
                        }, 400)
                    }
                });
                rightButton.addEventListener('click', () => {
                    if (!isDelaying) {
                        setTranslateBy(prev => prev < 9 ? prev + 1 : prev)
                        isDelaying = true;
                        setTimeout(() => {
                            isDelaying = false;
                        }, 400)
                    }
                });
            }
    
            const arrows = document.querySelectorAll('.buttonInteresting > .react-multiple-carousel__arrow')
    
            arrows.forEach(item => {
                item.style.opacity = 0; 
            });
    
            const hoverCarousel = document.querySelector('.buttonInteresting')
            
            if(hoverCarousel) {
                const arrows = document.querySelectorAll('.buttonInteresting > .react-multiple-carousel__arrow')
    
                hoverCarousel.addEventListener('mouseenter', () => {
                    // make arrows visible
                    console.log(translateByRef.current)
                    arrows.forEach((item, itemNum) => {

                        if (translateByRef.current !== 0 ) {
                            item.style.opacity = 1; 
                        } else {
                            if (itemNum === 1) {
                                item.style.opacity = 1; 
                            } 
                        }
                    });
                })
        
                hoverCarousel.addEventListener('mouseleave', () => {
                    // make arrows invisible
                    arrows.forEach(item => {
                        item.style.opacity = 0; 
                    });
                })
            }
        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, [])

    const firstLoad = useRef(false);

    useEffect(() => {

        const handleLoad = () => {
            

            const leftButton = document.querySelector('.buttonInteresting > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left');

            const rightButton = document.querySelector('.buttonInteresting > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right');

            if (rightButton && translateBy < 9) {
                setTimeout(() => {
                    rightButton.removeAttribute('disabled');
                }, 0)
            }

            if (leftButton) {
                console.log("HERE")
                if (translateBy > 0) {
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
                if (translateBy < 9) {
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

            translateByRef.current = translateBy;
            const transform = document.querySelector('.react-multi-carousel-track');
            setTimeout(() => {
                transform.style.transform = `translate3d(${-500*translateBy}px, 0px, 0px)`
            }, 0)
        }

        if (!firstLoad.current) {
            setTimeout(() => {
                window.addEventListener('load', handleLoad);

                firstLoad.current = true;

                return () => window.removeEventListener('load', handleLoad);
            }, 0)
            
        } else {
            handleLoad();
        }

    }, [translateBy])


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
    <Carousel
        customTransition="transform 500ms cubic-bezier(.46,1.14,1,1)"
        arrows={true}
        draggable={false}
        keyBoardControl
        renderArrowsWhenDisabled={true}
        renderDotsOutside={true}
        responsive={responsive}
        className='pt-8'
        ssr={true}
        itemClass='interesting'
        containerClass='buttonInteresting'
        
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

export default StoreCarousel