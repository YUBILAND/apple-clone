import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopBanner = (props) => {

    const bannerInfo = 
        {
            img: false,
            text: 'We’re donating $5 to the Global Fund for every purchase made with Apple Pay at Apple. Through 12/8.1',
            blueText: 'Shop'
        }
    
    
  return (
    <div className={`${props.headerFixed && 'mt-[44px]'} ${props.stretch ? 'w-screen' : 'w-full'} bg-white `}>
        <div className='lg:w-full md:w-[640px] sm:w-[400px] w-[260px] lg:text-wrap text-balance mx-auto pt-4 pb-5 flex lg:flex-row flex-col justify-center items-center text-center'>
            
            {bannerInfo?.img && 
                <img className='w-[20px] h-[20px]' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ase-ribbon-icon-202411?wid=40&hei=40&fmt=jpeg&qlt=90&.v=1730394497415" alt="" />
            }

            <div className='text-[14px] px-2'>
                {bannerInfo?.text}
            </div>

            <a className='group flex text-[#196899] ' href="">
                <div className='flex items-center'>
                    <div className='group-hover:underline text-[14px] '>
                        {bannerInfo?.blueText}
                    </div>
                    <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                </div>
            </a>

        </div>
    </div>
  )
}

export default TopBanner