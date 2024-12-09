import React from 'react'
import Colors from '../Colors'

const ProductCard = (props) => {
  return (
    <div className={`bg-white cursor-pointer shadow-lg hover:scale-[1.02] transition-!transform duration-300 ease hover:shadow-xl rounded-3xl  p-[30px] ${props.width} ${props.height} flex flex-col items-center`}>

    {/* Image */}
        <div className='basis-3/5 flex items-end'>
            <img className='rounded-3xl w-[230px] h-[230px] object-fit  object-bottom' src={props.card?.smallImg} alt="" />
        </div>

    {/* Description */}
        <div className='w-full basis-2/5 flex flex-col justify-between'>
            <div>

            {/* Color */}
                <div className='w-full h-[58px] pt-[19px] pb-[14px] flex justify-center items-center'>
                    <Colors colors={props.card?.colors ? props.card.colors : []} airpodsmax={props.card?.airpodsmax} />
                </div>
            
            {/* TopText */}
                {
                    props.card?.topText 
                    ?
                    <div className='text-[12px] font-semibold text-[#B64400]'>
                    {props.card?.topText}
                    </div>
                    :
                    <div className='text-[12px] font-semibold text-[#B64400] opacity-0'>
                    Empty
                    </div>
                }

            {/* BottomText */}
                <div className='text-[17px] font-semibold'>
                {props.card?.bottomText}
                </div>

            </div>
        {/* Price */}
            <div className='text-[14px]'>
                ${props.card?.price}
            </div>
        </div>
    </div>
  )
}

export default ProductCard