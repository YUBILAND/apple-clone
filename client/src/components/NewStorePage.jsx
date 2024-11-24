import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppleIcon from '@mui/icons-material/Apple';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StoreCarousel from './StoreCarousel';
import CarouselCard from './CarouselCard';
import TestStoreCarousel from './TestStoreCarousel';

const NewStorePage = () => {

    const platter_items = [
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663',
            title: 'Mac'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128',
            title: 'iPhone'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875',
            title: 'iPad'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838',
            title: 'Apple Watch'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269',
            title: 'Apple Vision Pro'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822',
            title: 'AirPods'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000',
            title: 'AirTag'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484',
            title: 'Apple TV 4K'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654',
            title: 'HomePod'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174',
            title: 'Accessories'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054',
            title: 'Apple Gift Card'
        },
    ]

    const header = [
        {
            neon: 'The latest.',
            grayText: 'Let them unwrap wonders.',
        },
        {
            neon: 'Personalization.',
            grayText: 'Just for them, just from you.',
        },
        {
            neon: 'Holiday picks.',
            grayText: 'Add more magic to the moment.',
        },
        {
            neon: 'Only at Apple.',
            grayText: 'With you every step of the holiday.',
        },
        {
            neon: 'The Apple experience.',
            grayText: 'Even more awe in store.',
        },
        {
            neon: 'Special Stores.',
            grayText: 'iPhone carrier deals and exclusive savings for school, businesses, and more.',
        },
    ]
    
    const carousel_cards = [
        [
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPhone 16 Pro',
                bottomText: 'From $999 or $41.62/mo. for 24 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-pro-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180965302',
            },
            {
                topText: '',
                middleText: 'Apple Watch Series 10',
                bottomText: 'From $399 or $33.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s10-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729694064591',
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPad mini',
                bottomText: 'From $499 or $41.58/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-mini-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728504973912',
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'MacBook Pro',
                bottomText: 'From $1599 or $133.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746398',
                
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPhone 16',
                bottomText: 'From $799 or $33.29/mo. for 24 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180987357',
                
            },
            {
                topText: '',
                middleText: 'Apple Watch Ultra 2',
                bottomText: 'From $799 or $66.58/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729694064643',
                
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPad Air',
                bottomText: 'From $599 or $49.91/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-air-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746150',
                
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iMac',
                bottomText: 'From $1299 or $108.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-imac-202411?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1728499365434',
                
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'MacBook Air',
                bottomText: 'From $999 or $83.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-air-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492751837',
                
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'Mac mini',
                bottomText: 'From $599 or $49.91/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-mac-mini-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728499365448',
                
            },
            {
                topText: '',
                middleText: 'Apple Vision Pro',
                bottomText: 'From $3499 or $291.58/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-vision-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728499365473',
                
            },
            {
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPad Pro',
                bottomText: 'From $999 or $83.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492745491',
            },
        ],
    ]

  return (
    <div className='select-none mb-16'>

    {/* Sale Banner  */}
        <div className='w-full pt-4 pb-5 flex justify-center items-center bg-white'>
            <img className='w-[20px] h-[20px]' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ase-ribbon-icon-202411?wid=40&hei=40&fmt=jpeg&qlt=90&.v=1730394497415" alt="" />
            <div className='text-[14px] px-2'>Starting 11/29, get an Apple Gift Card up to $200 when you buy an eligible product — online and in‑store.°°</div>
            <a className='group flex text-[#196899] ' href="">
                <div className='flex items-center'>
                    <div className='group-hover:underline text-[14px] '>Learn more</div>
                    <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                </div>
            </a>
        </div>
        
        <div className='bg-[rgb(158,209,245)] bg-[linear-gradient(90deg,_rgba(158,209,245,1)_13%,_rgba(129,149,238,1)_30%,_rgba(161,138,236,1)_49%,_rgba(243,119,190,1)_68%,_rgba(249,171,109,1)_100%)]
 w-full h-32 relative'>
            <div className='absolute top-0 left-0 bg-[linear-gradient(180deg,_rgba(245,245,247,0)_5%,_rgba(245,245,247,1)_40%)] w-full h-full z-10'></div>

        </div>
        
        
        <div className='w-[1623px] mx-auto'>
            <div className='grid grid-cols-2'>
                <leftgrid className='font-semibold text-5xl text-left store_light_gray'>
                    <h1 className='font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310] float-left'>Store.</h1>
                    &nbsp;Gift magic this holiday.
                </leftgrid>
                <rightgrid className='text-right'>
                    <div className='ml-auto w-fit text-sm'>
                        <div className='flex'>
                            <img className='w-[35px] h-[35px] mr-2' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050282" alt="" />
                            <div className='text-left'>
                                <div className=''>Need shopping help?</div>
                                <a className='group flex items-center text-[#196899]' href="">
                                    <div className='group-hover:underline'>Ask a Specialist</div>
                                    <ArrowOutwardIcon sx={{marginLeft: '4px', fontSize: '0.8rem'}}/>
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <AppleIcon sx={{fontSize: '2rem', marginRight: '8px'}}/>
                            <div className='text-left'>
                                <div>Visit an Apple Store</div>
                                <a className='group flex items-center text-[#196899]' href="">
                                    <div className='group-hover:underline'>Find one near you</div>
                                    <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </rightgrid>
            </div>

            <div className='mt-24 flex justify-between items-center'>
                {platter_items.map(item => {
                    return (
                        <a href='' className=''>
                            <img className='mb-4 w-[120px] object-fit' src={item.img} alt="" />
                            <div className='text-center hover:underline'>{item.title}</div>
                        </a>
                    )
                })}
            </div>

            {/* {header.map(item => {
                return (
                    <div>
                        <div className='mt-[90px] font-semibold text-[28px] text-left store_light_gray'>
                            <h1 className='font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310] float-left'>The latest.</h1>
                            &nbsp;Let them unwrap wonders.
                        </div>

                        <StoreCarousel items={carousel_cards[0]}/>
                    </div>
                )
            })} */}
            {/* <StoreCarousel items={carousel_cards[0]}/> */}
            <TestStoreCarousel items={carousel_cards[0]} itemsToShow={3} />
                               

        </div>
    </div>
  )
}

export default NewStorePage