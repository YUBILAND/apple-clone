import React from 'react'

const SmallProductBanner = (props) => {
  return (

    <div className=' relative h-[580px] cursor-pointer'>
        <div className={`${props.banner?.blackHeader ? 'apple_black' : 'text-white'}`}> 
            <img className='h-[580px] object-cover' src={props.banner?.bg} alt="" /> 

            <div className={`absolute ${props.banner.bottom ? 'bottom-12' : 'top-12'} left-0 right-0 w-fit mx-auto flex flex-col items-center text-center`}>
                {props.banner?.header
                ? 
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold mb-2'>{props.banner?.header}</h1>
                : 
                <img className='mb-2' src={props.banner?.headerArt} alt="" />
                }
                <h2 className='lg:text-xl md:text-lg text-base text-balance mb-2'>{props.banner?.subheader}
                    {props.banner.sup && <sup>{props.banner.sup}</sup>}
                </h2>

                {props.banner.customButton
                ?
                <button className={`rounded-full text-sm ${props.banner?.whiteButton ? 'bg-[#f3f6f6] hover:bg-white text-black' : 'bg-[#0071e3] hover:bg-[#0077ED] text-white' } py-2 px-5`}>{props.banner.customButton}</button>
                :
                <div className='flex items-center justify-center mt-2 text-sm'>
                    <button className={`rounded-full ${props.banner?.whiteButton ? 'bg-[#f3f6f6] hover:bg-white text-black' : 'bg-[#0071e3] hover:bg-[#0077ED] text-white' } py-2 px-5 mr-4`}>Learn more</button>
                    <button className={`rounded-full border-[1px] ${props.banner?.whiteButton ?  'border-white hover:bg-white hover:text-black text-white' : 'border-[#2997ff] text-[#2997ff] hover:bg-[#0077ED] hover:text-white'} py-2 px-5`}>Buy</button>
                </div>
                }

            </div>
        </div>
        
    </div>
        
  )
}

export default SmallProductBanner