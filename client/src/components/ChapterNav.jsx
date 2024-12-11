import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ChapterNav.css'

const ChapterNav = (props) => {

    const [triggerSwiper, setTriggerSwiper] = useState(window.screen.width <= 1182);

    const screenWidth = useRef(null)

    const [clickLeftButton, setClickLeftButton] = useState(false);
    const [clickRightButton, setClickRightButton] = useState(false);

    useEffect(() => { // event listeners for clicking left and right buttons
        const buttonPrev = document.querySelector(`.chapterNavSwiper > .swiper-button-prev`);
        const buttonNext = document.querySelector(`.chapterNavSwiper > .swiper-button-next`);

        buttonPrev.addEventListener("click", () => {
            setClickLeftButton(true);
            setTimeout(() => {
                setClickLeftButton(false);
            }, 100)
            }
        );
        
        buttonNext.addEventListener("click", () => {
            setClickRightButton(true);
            setTimeout(() => {
                setClickRightButton(false);
            }, 100)
            }
        );
      }, []);

    const updateMedia = () => {
        setTriggerSwiper(window.screen.width <= 1182);
        screenWidth.current = window.screen.width
    };

    useEffect(() => {
        screenWidth.current = window.screen.width
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
        
      }, []);

    useEffect(() => {
        
        const handleLoad = () => {
            const buttonPrev = document.querySelector('.chapterNavSwiper > .swiper-button-prev')
            const buttonNext = document.querySelector('.chapterNavSwiper > .swiper-button-next')

            if (triggerSwiper) {
                buttonPrev.style.display = 'none';
                buttonPrev.style.opacity = 0; 
                buttonNext.style.display = 'flex';
                buttonNext.style.opacity = 1;
            }
            else {
                buttonPrev.style.display = 'none';
                buttonPrev.style.opacity = 0;
                buttonNext.style.display = 'none';
                buttonNext.style.opacity = 0;
            }
        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);

    }, [])

    useEffect(() => {
        const buttonPrev = document.querySelector('.chapterNavSwiper > .swiper-button-prev')
            const buttonNext = document.querySelector('.chapterNavSwiper > .swiper-button-next')
        if (triggerSwiper) {
            buttonPrev.style.display = 'none';
            buttonPrev.style.opacity = 0; 
            buttonNext.style.display = 'flex';
            buttonNext.style.opacity = 1;
        }
        else {
            buttonPrev.style.display = 'none';
            buttonPrev.style.opacity = 0;
            buttonNext.style.display = 'none';
            buttonNext.style.opacity = 0;
        }
    }, [triggerSwiper])

    let finalSlideIndex = null;

    const slideIndex = useRef(0);

    const handleSlideChange = (slideInd) => {
        console.log(props.items.length)
        finalSlideIndex = props?.items.length - 
        (
            screenWidth.current >= 650 ? 10 :
            screenWidth.current >= 560 ? 5 :
            screenWidth.current >= 460 ? 4 :
            screenWidth.current >= 370 ? 3 : 2
         );
        // handles left and right arrow visibility after first Arrow press since it doesn't trigger on mount
        slideIndex.current = slideInd;

        const buttonPrev = document.querySelector(`.chapterNavSwiper > .swiper-button-prev`);

        const buttonNext = document.querySelector(`.chapterNavSwiper > .swiper-button-next`);

        if (buttonPrev) {
            if (slideInd > 0) {
                setTimeout(() => {
                    buttonPrev.removeAttribute('disabled');
                    buttonPrev.style.display = 'flex';
                    buttonPrev.style.opacity = 1;
                }, 0)
            } else {
                setTimeout(() => {
                    buttonPrev.style.display = 'none';
                    buttonPrev.style.opacity = 0;
                }, 500)
            }
        }

        if (buttonNext) {
            console.log('current slide is ',slideInd)
            console.log('last slide is ',finalSlideIndex)
            if (slideInd < finalSlideIndex) {
                setTimeout(() => {
                    buttonNext.removeAttribute('disabled');
                    buttonNext.style.display = 'flex';
                    buttonNext.style.opacity = 1;
                }, 0)
            } else {
                
                setTimeout(() => {
                    buttonNext.style.display = 'none';
                    buttonNext.style.opacity = 0;
                }, 500)
            }
        }
    }

    useEffect(() => {
        const buttonPrev = document.querySelector(`.chapterNavSwiper > .swiper-button-prev`);
        const buttonNext = document.querySelector(`.chapterNavSwiper > .swiper-button-next`);

        if (clickLeftButton) {
            buttonPrev.style.backgroundColor = '#AADEF3';
                setTimeout(() => {
                    buttonPrev.style.transition = 'background-color 500ms linear';
                    buttonPrev.style.backgroundColor = '#fafafc';
                    setTimeout(() => {
                        buttonPrev.style.transition = 'none';
                    }, 500)
                }, 0)
        }

        if (clickRightButton) {
            buttonNext.style.backgroundColor = '#AADEF3';
                setTimeout(() => {
                    buttonNext.style.transition = 'background-color 500ms linear';
                    buttonNext.style.backgroundColor = '#fafafc';
                    setTimeout(() => {
                        buttonNext.style.transition = 'none';
                    }, 500)
                }, 0)
        }

    }, [clickLeftButton, clickRightButton])
        
    const breakpoints = {
        // when window width is >= 320px
        370: {
            slidesPerGroup: 3,
           },
        460: {

        slidesPerGroup: 4,
       },
       // when window width is >= 480px
       560: {

        slidesPerGroup: 5,
       },
       // when window width is >= 640px
       650: {
        slidesPerGroup: 10,
       }
    }

  return (
    <div className='bg-[#fafafc] pb-8 pt-4 px-[34px]'>
        <div className='max-w-[1182px] w-full mx-auto'>
            <Swiper 
            className={`mt-8 !overflow-visible chapterNavSwiper`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={42}
            slidesPerView={'auto'}
            navigation
            speed={500}
            wrapperClass='flex items-end'
            onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
            onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
            breakpoints={breakpoints}
            
            >
                {props.items.map(item => {
                    return (
                        <SwiperSlide className='!w-fit'>
                            <a href='' className='relative flex flex-col items-center justify-end w-fit'>
                                <img className={item.title === 'Sequoia' && 'w-[35px] object-fit'} src={item.img} alt="" />
                                <span className='text-[12px]'>{item.title}</span>
                                {item.new && <span className='absolute w-fit bottom-[-14px] left-0 right-0 mx-auto text-[10px] text-[#BD4410]'>New</span>}
                            </a>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    </div>
  )
}

export default ChapterNav