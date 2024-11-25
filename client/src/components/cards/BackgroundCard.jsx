import React from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const BackgroundCard = (props) => {
  return (
    <div className={`cursor-pointer relative transition-transform duration-300 hover:scale-[1.02] shadow-lg rounded-3xl w-[${props.width}] h-[${props.height}]`}>
        <img className='rounded-3xl w-full h-full object-cover object-bottom' src={props.card?.img} alt="" />
        <div className='absolute top-0 left-0 pl-8 mt-8 w-full'>

        {/* TopText */}
            <div className='text-[12px] pb-2 font-semibold text-[#B64400]'>
            {props.card?.topText}
            </div>

        {/* MiddleText */}
            <h1 className={`w-[80%] font-semibold text-[28px] leading-[2.1rem]`}>{props.card?.middleText}</h1>

        {/* BottomText */}
            <div className='text-[17px]'>
            {props.card?.bottomText}
            </div>
        </div>
        
    </div>
  )
}

export default BackgroundCard