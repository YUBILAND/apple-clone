import React, { useContext, useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Laptops from './Laptops';
import Desktops from './Desktops';
import Displays from './Displays';
import SmallCarousel from './SmallCarousel';
import ImportantDevicesRoundedIcon from '@mui/icons-material/ImportantDevicesRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { CarouselContext } from '../contexts/CarouselContext';

const LineUp = () => {

    const [lineup, setLineup] = useState(1)

    function changeLineup(ind) {
        setLineup(ind);
    }

    const small_carousel_items = [
        {
            icon: CreditCardRoundedIcon,
            topText: 'Pay over time, interest-free',
            bottomText: 'When you choose to check out with Apple Card Monthly Installments.',
        },
        {
            icon: ImportantDevicesRoundedIcon,
            topText: 'Customize your Mac.',
            bottomText: 'Choose your chip, memory, storage, even color.',
        },
        {
            icon: LocalShippingOutlinedIcon,
            topText: 'Get flexible delivery and easy pickup.',
            bottomText: 'Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.',
        },
        {
            icon: ContactEmergencyOutlinedIcon,
            topText: 'Shop live with a Specialist.',
            bottomText: 'Let us guide you live over video and answer all of your questions.',
        },
        {
            icon: PeopleOutlinedIcon,
            topText: 'Meet your new Mac with Personal Setup.',
            bottomText: 'Jump into online sessions with a Specialist to set up your Mac and discover new features.',
        },
        {
            icon: ShoppingBagOutlinedIcon,
            topText: 'Explore a shopping experience designed around you.',
            bottomText: 'Use the Apple Store app to get a more personal way to shop.',
        },
    ]

    const card_items = [
        {
            header: 'Ways to Buy',
            bigText: 'Apple Card Monthly Installments',
            desc: 'Pay for your new Mac over time, interest‑free with Apple Card.◊ Simply choose to check out with Apple Card Monthly Installments as your payment option when you make your purchase. And enjoy 3% Daily Cash back, all up front. Terms apply.',
            hyperlink: 'Learn more',
        },
        {
            header: 'Customize Your Mac',
            bigText: 'Choose your chip, memory, storage, even color.',
            desc: 'Build the Mac that’s best for you. When you buy online at Apple, you can customize your Mac just the way you want. Whether you need an extra-powerful chip, more memory, or additional storage, you can tailor any new Mac to suit your needs.',
            hyperlink: 'Shop Mac',
        },
        {
            header: 'Delivery and Pickup',
            bigText: 'Flexible delivery and pickup options.',
            desc: 'Get your new Apple products quickly and easily with two‑hour delivery from an Apple Store, free next‑day delivery, or convenient Apple pickup options.',
            hyperlink: 'Learn more',
        },
        {
            header: 'Guided Video Shopping',
            bigText: 'Shop live with a Specialist.',
            desc: 'We can help you choose the product you need while guiding you through the online Apple Store. You won’t appear on camera. Available 7 a.m.–7 p.m. PT.',
            hyperlink: 'Shop together with a Specialist',
        },
        {
            header: 'Personal Setup',
            bigText: 'Jump into online, one‑on‑one sessions.',
            desc: 'When you buy your new Mac directly from Apple, you’ll get access to Personal Setup. In these guided online sessions, a Specialist can walk you through setup, or focus on features that help you make the most of your Mac. Best of all, you can join whenever works for you, from wherever you are.',
            hyperlink: 'Learn more',
        },
        {
            header: 'Apple Store App',
            bigText: 'Shop in the Apple Store app, tailored specifically for you.',
            desc: 'Get personalized product recommendations, compare models, access Your Saves, and track your orders. Plus, opt in today to get updates on new products, promotions, flexible payment options, and store events.',
            imgText: 'Scan the QR code to get started.',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/incentive/boc_qr_code__cl3z0el7styu_large.jpg',
        },
    ]

    const {smallCarouselCards, showSmallCarouselCards} = useContext(CarouselContext);

    const {smallCardDelay, setSmallCardDelay} = useContext(CarouselContext);

    const body = document.body;

    function closeCarouselPopUp(card) {
        setSmallCardDelay(false);
        body.style.pointerEvents = 'none'
        setTimeout(() => {
            showSmallCarouselCards(prevCards => {
                const newState = [...prevCards];
                newState[card] = false;
                return newState;
            })

            body.style.paddingRight = '0px'
            body.style.overflow = 'auto'
            body.style.pointerEvents = 'auto'

        }, 500)
    }


  return (
    <div className='bg-[#f5f5f7] pb-[140px]'>
        
        <div className='w-[1700px] mx-auto'>

        {/* Explore the lineup */}
            <div className='pt-[150px] font-semibold   store_dark_gray flex justify-between'>
                
                <div className='text-left text-6xl'>
                Explore the lineup.
                </div>

                <div className='text-right flex text-lg justify-end'>
                
                    <a className='group flex items-end text-[#196899] ' href="">
                        <div className='flex items-center mr-6'>
                            <div className='group-hover:underline'>Help me choose</div>
                            <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                        </div>
                    </a>

                    <a className='group flex items-end text-[#196899]' href="">
                        <div className='flex items-center ml-6'>
                            <div className='group-hover:underline'>Compare all models</div>
                            <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                        </div>
                    </a>
                        
                </div>

            </div>

        {/* Lineup */}
            <div className='pl-4 mt-24'>
                <div className='bg-white rounded-full flex w-fit text-lg'>
                    <button onClick={() => changeLineup(1)} className={`${lineup === 1 && 'bg-[#272729] text-white select-none'} rounded-full mr-4 px-6 py-2`}>Laptops</button>
                    <button onClick={() => changeLineup(2)} className={`${lineup === 2 && 'bg-[#272729] text-white select-none'} rounded-full mr-4 px-6 py-2`}>Desktops</button>
                    <button onClick={() => changeLineup(3)} className={`${lineup === 3 && 'bg-[#272729] text-white select-none'} rounded-full px-6 py-2`}>Displays</button>
                </div>

                {lineup === 1 && <Laptops />}
                {lineup === 2 && <Desktops />}
                {lineup === 3 && <Displays />}
                
            </div>

        {/* Apple Trade In */}
            <div>
                <div className='pt-[140px] font-semibold text-6xl text-left store_dark_gray'>Apple Trade In</div>

                <div className='my-24'>
                    <a href='' className='w-full transition-transform duration-300 hover:scale-[1.01] shadow-lg rounded-3xl flex bg-white '>

                        <div className='rounded-l-3xl basis-2/5 flex justify-center items-center text-center'>
                            <div className=''>
                                <span className='inline-block text-3xl font-semibold mb-2'>
                                Give us the old. Save on the new.
                                </span>
                                <div className='w-[447px] text-left'>With Apple Trade In, you can get a great value for your current device and apply it toward a new one. If your device isn’t eligible for credit, we’ll recycle it for free.8</div>
                                
                                <a className='group flex items-end text-[#196899] mt-8' href="">
                                    <div className='flex items-center mr-6'>
                                        <div className='group-hover:underline'>See what your device is worth</div>
                                        <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className='rounded-l-3xl basis-3/5 flex justify-center'>
                        
                            <img className=' ' src="https://www.apple.com/v/mac/home/cb/images/overview/trade_in/tradein__gbtxz5sa3cyi_xlarge.jpg" alt="" />

                        </div>
                        
                    </a>
                </div>
            </div>

        {/* Why Apple is the best place to buy Mac. */}
            <div className='mb-[100px]'>

                <div className='pt-[140px] font-semibold store_dark_gray flex justify-between'>
                    
                    <div className='text-6xl text-left w-[600px]'>Why Apple is the best place to buy Mac.</div>

                    <div className='text-right flex text-lg justify-end'>
                        <a className='group flex items-end text-[#196899] ' href="">
                            <div className='flex items-center mr-6'>
                                <div className='group-hover:underline'>Shop Mac</div>
                                <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className='mt-24 ml-8'>
                    <div className='relative bg-white w-[405px] h-[300px] transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg'>
                        
                        <div className=' px-8 pt-6 pb-12 text-black '>
                                <CreditCardRoundedIcon sx={{fontSize: '3.5rem'}} />
                                <div className='text-[24px] leading-tight font-semibold '>
                                Pay over time, interest-free</div>
                                <div>When you choose to check out with Apple Card Monthly Installments.</div>
                        </div>

                        <div className='absolute bottom-0 right-0 mr-4 mb-4'>
                            <AddCircleRoundedIcon className=' text-[#343436]' sx={{fontSize: '2.7rem'}} />
                        </div>
                    </div>
                </div> */}




            {/* Carousel Pop Up */}

                <div onClick={() => closeCarouselPopUp(smallCarouselCards.findIndex(truthy => truthy))} className={`fixed top-0 left-0 w-full h-full z-20 backdrop-blur-lg bg-black transition-opacity duration-500 bg-opacity-50 ${smallCardDelay ? 'opacity-100' : 'opacity-0 pointer-events-none'} overflow-auto flex flex-col justify-center items-center`}>
                    {/* Stop propagation prevents parent onclick from triggering when clicking on child */}

                    <div onClick={(e) => e.stopPropagation()} className='w-[816px] rounded-3xl mx-auto h-fit pb-[76px] mt-[144px] mb-[44px] bg-white'>
                        
                        <div className='h-[76px] flex justify-end items-center mr-4 sticky top-0'>
                            <div onClick={() => {closeCarouselPopUp(smallCarouselCards.findIndex(truthy => truthy))}} className='group relative cursor-pointer'>
                                <AddCircleRoundedIcon className='rotate-45 relative text-[#343436] z-20' sx={{fontSize: '2.7rem'}} />
                                <div className='group-hover:bg-white transition-colors duration-300 absolute w-5 h-5 bg-[#D6D6D7] top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10'/>
                            </div>
                        </div>

                        <div className='px-[76px]'>

                            <div>
                            {/* header */}
                                <div className='text-[19px] font-semibold'>
                                    {/* if there is true val (card is open) then render topText */}
                                    {card_items[smallCarouselCards.findIndex(truthy => truthy)]?.header}
                                </div>
                            {/* bigText */}
                                <div className='text-[56px] font-semibold leading-[1.1] tracking-tight'>
                                {card_items[smallCarouselCards.findIndex(truthy => truthy)]?.bigText}
                                </div>
                            {/* desc */}
                                <div className='text-[19px] mt-4 tracking-tight'>
                                {card_items[smallCarouselCards.findIndex(truthy => truthy)]?.desc}
                                </div>



                                {card_items[smallCarouselCards.findIndex(truthy => truthy)]?.hyperlink ? 
                                    <a className='group flex items-end text-[#196899] mt-4' href="">
                                        <div className='flex items-center mr-6'>
                                            <div className='group-hover:underline'>{card_items[smallCarouselCards.findIndex(truthy => truthy)]?.hyperlink}</div>
                                            <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                        </div>
                                    </a>

                                    :
                                    <>
                                        <div className='text-[19px] mt-4 tracking-tight'>
                                        {card_items[smallCarouselCards.findIndex(truthy => truthy)]?.imgText}
                                        </div>
                                        <img className='mt-16' src={card_items[smallCarouselCards.findIndex(truthy => truthy)]?.img} alt="" />
                                    </>
                                }

                                </div>

                            
                        </div>
                    </div>

                </div>

                <SmallCarousel items={small_carousel_items}/>


            </div>


    

        </div>

    </div>
  )
}

export default LineUp