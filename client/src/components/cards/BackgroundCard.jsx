import React from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const BackgroundCard = (props) => {
  return (
    <div className={`cursor-pointer shadow-lg hover:scale-[1.02] transition-!transform duration-300 ease hover:shadow-xl rounded-3xl w-[${props.width}] h-[${props.height}]`}>
        <img className='rounded-3xl w-full h-full object-cover object-bottom' src={props.card?.img} alt="" />
        <div className={`absolute top-0 left-0 pl-8 mt-8 w-[90%] text-balance ${props.card?.white && 'text-white'}`}>

        {/* TopText */}
            {
                props.card?.topText 
                ?
                <div className={`text-[12px] pb-2 font-semibold ${props.card?.gray ? 'store_light_gray' : !props.card?.white && 'text-[#B64400]'} uppercase`}>
                {props.card?.topText}
                </div>
                :
                <div className={`opacity-0 text-[12px] pb-2 font-semibold ${props.card?.gray ? 'store_light_gray' : 'text-[#B64400]'} uppercase`}>
                Empty
                </div>
            }

        {/* MiddleText */}
            <h1 className={`w-full font-semibold text-[28px] leading-[1.8rem]`}>{props.card?.middleText}</h1>

        {/* BottomText */}
            <div className='text-[17px] mt-2 w-full leading-[1.4rem]'>
            {props.card?.bottomText}
            </div>
        </div>
        
    </div>
  )
}

export default BackgroundCard