import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopBanner = (props) => {
  return (
    <div className={`${props.headerFixed && 'mt-[44px]'} w-full pt-4 pb-5 flex justify-center items-center bg-white`}>
            <img className='w-[20px] h-[20px]' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ase-ribbon-icon-202411?wid=40&hei=40&fmt=jpeg&qlt=90&.v=1730394497415" alt="" />
            <div className='text-[14px] px-2'>Starting 11/29, get an Apple Gift Card up to $200 when you buy an eligible product — online and in‑store.°°</div>
            <a className='group flex text-[#196899] ' href="">
                <div className='flex items-center'>
                    <div className='group-hover:underline text-[14px] '>Learn more</div>
                    <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                </div>
            </a>
        </div>
  )
}

export default TopBanner