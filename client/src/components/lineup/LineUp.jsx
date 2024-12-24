import React, { useContext, useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Laptops from './Laptops';
import SmallCarousel from '../SmallCarousel';
import ImportantDevicesRoundedIcon from '@mui/icons-material/ImportantDevicesRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { CarouselContext } from '../../contexts/CarouselContext';
import Title from '../Title';

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

    const [isMediumScreen, setMediumScreen] = useState(window.screen.width >= 836);
    const [isLargeScreen, setLargeScreen] = useState(window.screen.width >= 1068);
    const [isExtraLargeScreen, setExtraLargeScreen] = useState(window.screen.width >= 1442);

    const updateMedia = () => {
        setMediumScreen(window.screen.width >= 836);
        setLargeScreen(window.screen.width >= 1068);
        setExtraLargeScreen(window.screen.width >= 1442);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);


  return (
    <div className='bg-[#fafafa] lg:pb-[150px] md:pb-[120px] pb-[90px]'>
        
        <div className='w-screen px-[6.25%] '>

        {/* Explore the lineup */}
        
            <Title title='Explore the lineup.' hyperlink={['Help me choose', 'Compare all models']}/>
            
        {/* Lineup */}
            <div className=' lg:mt-[80px] md:mt-[64px] mt-[48px]'>
                <div className='bg-white rounded-full flex w-fit md:text-lg text-sm'>
                    <button onClick={() => changeLineup(1)} className={`${lineup === 1 && 'bg-[#272729] text-white select-none'} rounded-full mr-4 px-6 py-2`}>Laptops</button>
                    <button onClick={() => changeLineup(2)} className={`${lineup === 2 && 'bg-[#272729] text-white select-none'} rounded-full mr-4 px-6 py-2`}>Desktops</button>
                    <button onClick={() => changeLineup(3)} className={`${lineup === 3 && 'bg-[#272729] text-white select-none'} rounded-full px-6 py-2`}>Displays</button>
                </div>

                {lineup === 1 && <Laptops laptop/>}
                {lineup === 2 && <Laptops desktop />}
                {lineup === 3 && <Laptops display />}
                
            </div>

        {/* Apple Trade In */}
            <div className='lg:pt-[150px] md:pt-[120px] pt-[90px]'>

                <Title title='Apple Trade In'/>

            {/* Card */}
                <div className='lg:mt-[80px] md:mt-[64px] mt-[48px]'>
                    <a href='' className={`w-full transition-transform duration-300 hover:scale-[1.01] shadow-lg rounded-3xl flex ${isLargeScreen ? 'pl-12' : 'flex-col items-center py-[56px] px-[24px]'} gap-8 bg-white`}>

                    {/* Description */}
                        <div className='rounded-l-3xl basis-2/5 flex justify-center items-center max-w-[480px] '>
                            <div className=''>

                                {/* TopText */}
                                <div className={`${isLargeScreen ? 'text-left text-3xl' : 'text-center md:text-2xl text-xl'}  font-semibold mb-4`}>
                                Give us the old. Save on the new.
                                </div>

                                {/* BottomText */}
                                <div className={`max-w-[447px] ${isLargeScreen ? 'text-left' : 'text-center'} md:text-base text-sm`}>With Apple Trade In, you can get a great value for your current device and apply it toward a new one. If your device isn’t eligible for credit, we’ll recycle it for free.8</div>

                                {/* Hyperlink */}
                                <a className='group flex text-[#196899] mt-8 ' href="">
                                    <div className={`flex items-center ${isLargeScreen ? 'justify-start' : 'justify-center'} w-full`}>
                                        <div className='group-hover:underline'>See what your device is worth</div>
                                        <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                    </div>
                                </a>

                            </div>
                        </div>

                    {/* Image */}
                        <div className={` xl:basis-3/5  flex overflow-hidden ${!isExtraLargeScreen && isLargeScreen ? 'max-w-[476px]' : 'md:max-w-[738px] w-full max-w-[545px] flex justify-center'} w-full mx-auto`}>
                            <img className={`${isExtraLargeScreen ? 'min-w-[790px]' : isLargeScreen ? 'max-w-[476px]' : 'md:max-w-[738px] max-w-[545px] md:w-fit w-full'} `} src={isExtraLargeScreen ? 'https://www.apple.com/v/mac/home/cb/images/overview/trade_in/tradein__gbtxz5sa3cyi_xlarge.jpg' : isLargeScreen ? 'https://www.apple.com/v/mac/home/cb/images/overview/trade_in/tradein__gbtxz5sa3cyi_large_2x.jpg' : 'https://www.apple.com/v/mac/home/cb/images/overview/trade_in/tradein__gbtxz5sa3cyi_medium_2x.jpg'} alt="" />
                        </div>
                        
                    </a>
                </div>

            </div>

        {/* Why Apple is the best place to buy Mac. */}
            <div className='mb-[100px]'>

                
                <Title title='Why Apple is the best place to buy Mac.' hyperlink={['Shop Mac']}/>

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