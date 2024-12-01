import React, { useEffect, useRef, useState } from 'react'
import './ContinousCarousel.css'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AppleIcon from '@mui/icons-material/Apple';

const ContinousCarousel = () => {

    var items = [
        {
            albumImg: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/b3/7e/dd/b37eddb0-4623-289a-d461-e2190db26636/03157421-d1ee-415e-9053-70f473ac4d98.png/196x196SC.DN01.jpg?l=en-US',
            backgroundColor: 'bg-[rgb(38,38,38)]',
            albumCaption: 'Alpha',
            appleGenre: 'Music',
            hoverText: 'Listen now',
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/21/a9/dc/21a9dcf7-3e65-05c4-6e4a-7b338d6544f2/media-HI_BC_0090-9535223-Artwork-iOS-316496.png/417x236.jpg',
            caption: 'HIIT with Brian',
            appleGenre: 'Fitness+',
            hoverText: 'Watch now',
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/bd/60/67/bd6067ae-64ac-04df-dc96-4757069c37dd/6610be22-3caa-493c-90b0-a8f73520c9bf.png/417x236.jpg',
            caption: 'NBA 2K25 Arcade Edition',
            appleGenre: 'Arcade',
            hoverText: 'Play now',
        },
        {
            albumImg: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/b1/c8/27/b1c827e0-861e-4660-9b17-4251a73e0b46/35ae0484-c5ac-42f5-b162-5b4f4158b2a3.png/196x196cc.jpg',
            backgroundColor: 'bg-[rgb(37,68,148)]',
            albumCaption: 'New in Holiday',
            appleGenre: 'Music',
            hoverText: 'Listen now',
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/b7/52/00/b7520011-8ec1-f579-0d0c-c69203873d1e/e12fda86-52fb-4d7d-8017-260155a31696.png/417x236.jpg',
            caption: 'Travel-Friendly Workouts',
            appleGenre: 'Fitness+',
            hoverText: 'Watch now',
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/417x236.jpg',
            caption: 'Hello Kitty Island Adventure',
            appleGenre: 'Arcade',
            hoverText: 'Play now',
        },
    ]

    let finalSlideIndex = null;

    const slideIndex = useRef(0);

    // useEffect(() => {

    //     const handleLoad = () => { // run after DOM loads
    //         // console.log(props.cards)
    //         finalSlideIndex = props.cards?.length - props.itemsToShow;
    //         console.log(finalSlideIndex)
            

    //         const leftArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-prev`)
    //         const rightArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-next`)
    //         leftArrow.style.display = 'none';
    //         leftArrow.style.opacity = 0; 
    //         rightArrow.style.opacity = 0;


    //         const hoverCarousel = document.querySelector(`.swiperContainer${props.Key}`)

    //         hoverCarousel.addEventListener('mouseenter', () => {
    //             // make arrows visible
    //             if (slideIndex.current !== 0 ) {
    //                 leftArrow.style.opacity = 1;
    //                 rightArrow.style.opacity = 1; 
    //             } else {
    //                 rightArrow.style.opacity = 1; 
    //             } 
    //         });

    //         hoverCarousel.addEventListener('mouseleave', () => {
    //             // make arrows invisible when you unhover container
    //                 leftArrow.style.opacity = 0; 
    //                 rightArrow.style.opacity = 0; 
    //         })
    //     }

    //     window.addEventListener('load', handleLoad);

    //     return () => window.removeEventListener('load', handleLoad);

    // }, [])

    // const handleSlideChange = (slideInd) => {
        
    //     // handles left and right arrow visibility after first Arrow press since it doesn't trigger on mount
    //     slideIndex.current = slideInd;

    //     const leftArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-prev`);

    //     const rightArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-next`);

    //     if (leftArrow) {
    //         if (slideInd > 0) {
    //             setTimeout(() => {
    //                 leftArrow.removeAttribute('disabled');
    //                 leftArrow.style.display = 'block';
    //                 leftArrow.style.opacity = 1;
    //             }, 0)
    //         } else {
    //             setTimeout(() => {
    //                 leftArrow.style.display = 'none';
    //                 leftArrow.style.opacity = 0;
    //             }, 0)
    //         }
    //     }

    //     if (rightArrow) {
    //         if (slideInd < finalSlideIndex) {
    //             setTimeout(() => {
    //                 rightArrow.removeAttribute('disabled');
    //                 rightArrow.style.display = 'block';
    //                 rightArrow.style.opacity = 1;
    //             }, 0)
    //         } else {
    //             setTimeout(() => {
    //                 rightArrow.style.display = 'none';
    //                 rightArrow.style.opacity = 0;
    //             }, 0)
    //         }
    //     }

    // }

    const swiperRef = useRef(null);

    const currentTranslate = useRef(null);

    

    const stopAnimation = () => { 
        currentTranslate.current = swiperRef.current.getTranslate();
        console.log(currentTranslate.current)
        swiperRef.current.setTranslate(currentTranslate.current); 
        swiperRef.current.autoplay.stop();

    };

    const restartAnimation = () => {
        swiperRef.current.slideTo(swiperRef.current.activeIndex,
            //   432 because width (417) + gap between (15) = 432
        ( ( currentTranslate.current + 432 ) * 8000 ) / 432
        , false)
        swiperRef.current.autoplay.start();

      }; 

    

        
    return (
        <div className='relative w-full pb-8 overflow-visible' 
        onMouseEnter={() => {
            stopAnimation();
          }}
          onMouseLeave={() => {
            restartAnimation();
          }}>

            <Swiper
                className={`mt-8 !overflow-visible swiperContinous`}
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={'auto'}
                loop
                allowTouchMove={false}
                speed={8000}
                autoplay={{ delay: 0}}
                
                // onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
                onSwiper={(swiper) => swiperRef.current = swiper}
            >
                {
                    items.map(item => 
                        <SwiperSlide className='!w-fit cursor-pointer'>
                            <div className='relative text-white w-[417px] h-[236px]'> 
                                {item.img 
                                    ?
                                    <img className='w-full h-full object-cover' src={item.img} alt="" />
                                    :
                                    <div className={`w-full h-full ${item.backgroundColor} grid grid-cols-2`}>
                                        <div className='flex justify-end items-center'>
                                            <img className='w-[196px] h-[196px] object-cover rounded-xl' src={item.albumImg} alt="" />
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <h1 className='w-full ml-4'>{item.albumCaption}</h1>
                                        </div>
                                    </div>
                                }

                                <div className='absolute bottom-0 right-0 pb-[20px] pr-[15px] flex justify-center items-center'>
                                    <AppleIcon />
                                    <div className='text-[17px]'>{item.appleGenre}</div>
                                </div>

                                <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0.4)] duration-300 transition-all flex justify-center items-center group'>
                                    <button className='bg-white rounded-full text-black py-2 px-5 transition-opacity duration-300 group-hover:opacity-100 opacity-0'>{item.hoverText}</button>
                                </div>

                                
                            </div>
                        </SwiperSlide>
                )}

            </Swiper>
           
        </div>

    )
}

export default ContinousCarousel