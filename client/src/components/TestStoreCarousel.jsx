import React, { useContext, useEffect, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CarouselContext } from '../contexts/CarouselContext';
import './TestStoreCarousel.css'
import BackgroundCard from './cards/BackgroundCard';
import ProductCard from './cards/ProductCard';

const TestStoreCarousel = (props) => {

    let finalSlideIndex = null;

    // const [slideIndex, setSlideIndex] = useState(0);
    const slideIndex = useRef(0);

    useEffect(() => {
        //get index of last item ( you would see only 1 item), on very last arrow you should see 3 items so lastIndex - 2 (t display 1+2 = 3 slides), this wil give you the amount of times you have to click right arrow to see the last slides. To simplify i just did length - items in responsive var.
        finalSlideIndex = props.cards.length - props.itemsToShow;
        
        //disable left arrow since you start on index 0

        const handleLoad = () => { // run after DOM loads
            const arrows = document.querySelectorAll(`.carouselContainer${props.Key} > .react-multiple-carousel__arrow`)
            
            arrows.forEach((item, itemNum) => {
                if (itemNum == 0) {
                    item.style.display = 'none';
                }
                item.style.opacity = 0; 
            });

            const hoverCarousel = document.querySelector(`.carouselContainer${props.Key}`)

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
            
        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);

    }, [])

    const handleSlideChange = (slideInd) => {
        // handles left and right arrow visibility after first button press since it doesn't trigger on mount
        slideIndex.current = slideInd;

        const leftButton = document.querySelector(`.carouselContainer${props.Key} > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left`);

        const rightButton = document.querySelector(`.carouselContainer${props.Key} > .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right`);

        if (leftButton) {
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
          partialVisibilityGutter: props.partialVGutter
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
        containerClass={`carouselContainer${props.Key}`}
        // containerClass='weird'
        partialVisible={true}
        beforeChange={handleSlideChange}
        > 
        {props.cards.map((card, itemNum) => {
            return (
                card.background
                ? 
                <BackgroundCard card={card}  width={props.small ? '313px' : '480px'} height='500px' /> 
                :
                <ProductCard card={card} />
            )
        })}
    </Carousel>
  )
}

export default TestStoreCarousel