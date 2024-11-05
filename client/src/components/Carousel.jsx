import React from 'react'
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import Carousel_3 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.css'

const Carousel = () => {
    // var items = [
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ed/5d/5c/ed5d5cb1-fb90-aa84-8109-313e8509872e/d37cc6c7-0707-4bf9-a907-c576cfb9cc07.png/980x551.jpg',
    //         buttonLabel: 'See the schedule',
    //         genre: null,
    //         description: "Watch Messi, every club, and every match—live.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Comedy',
    //         description: "Breakdown. Breakthrough",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ed/5d/5c/ed5d5cb1-fb90-aa84-8109-313e8509872e/d37cc6c7-0707-4bf9-a907-c576cfb9cc07.png/980x551.jpg',
    //         buttonLabel: 'See the schedule',
    //         genre: null,
    //         description: "Watch Messi, every club, and every match—live.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Comedy',
    //         description: "Breakdown. Breakthrough",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/rQ9tx4HlD7su-j1sVFPebg/1250x703.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Thriller',
    //         description: "Any resemblance to persons living or dead is not a coincidence.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/S2T1FMcov5a0GzmninlU4Q/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Thriller',
    //         description: "Emmy® Award winner.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/Ed-B4V6OY0yoxxlksKeulw/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Comedy',
    //         description: "The shady side of paradise.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/2eBqvT3JXPbdzHWj6HM5_w/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Action',
    //         description: "George Clooney and Brad Pitt are rival fixers stuck on the same job for one wild night.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Comedy',
    //         description: "Kindness makes a comeback.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Drama',
    //         description: "Winner of 3 Emmy® Awards.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Sci-fi',
    //         description: "The truth will surface.",
    //     },
    //     {
    //         img: 'https://is1-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/980x551.jpg',
    //         buttonLabel: 'Stream now',
    //         genre: 'Thriller',
    //         description: "We're all different people at work.",
    //     },
    // ]

    var groupedItems = [
        [
            {
                img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
                buttonLabel: 'Stream now',
                genre: 'Comedy',
                description: "Breakdown. Breakthrough",
            },
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
            }
        ],
        [
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
            {
                img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
                buttonLabel: 'Stream now',
                genre: 'Comedy',
                description: "Breakdown. Breakthrough",
            }
            ],
    ]

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
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
        <div className='relative w-full pb-8 overflow-hidden'>
            

            {/* <Carousel_3
             responsive={responsive}
             showDots={true}
             focusOnSelect={true}
             renderDotsOutside={true}
             infinite={true}
             partialVisible={true}
             keyBoardControl={true}
             draggable={false}>
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
            </Carousel_3> */}
            <Carousel_3
                additionalTransform={-20 * 5}
                // customTransition="transform 8000ms linear"
                arrows={false}
                centerMode={true}
                draggable={false}
                containerClass="container"
                dotListClass=""
                focusOnSelect={true}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay={false}
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                className='w-full mx-auto carousel'
                ssr={true}
                >
                    
                    <img className='' src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                    <img className=' ' src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    {/* <img src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" /> */}
            </Carousel_3>

        </div>

    )
}

export default Carousel