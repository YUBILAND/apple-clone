import React from 'react'

const LargeProductBanner = (props) => {
  return (
    <div className='relative mb-3 cursor-pointer'>
        <div className={`${props.banner?.blackHeader ? 'text-black' : 'text-white'} `}> 
            <img className='h-[692px] object-cover' src={props.banner?.bg} alt="" /> 
            <div className='absolute top-20 left-0 right-0 w-fit mx-auto flex flex-col items-center'>
                {props.banner?.header
                ? 
                <h1 className='text-6xl font-semibold mb-2'>{props.banner?.header}</h1>
                : 
                <img className='mb-2' src={props.banner?.headerArt} alt="" />
                }
                <h2 className='text-3xl'>{props.banner?.subheader}</h2>
                <h3 className='text-xl text-[#86868b]'>{props.banner?.grayText}</h3>
                <div className='flex items-center justify-center mt-4 text-lg'>
                    <button className={`rounded-full ${props.banner?.whiteButton ? 'bg-[#f3f6f6] hover:bg-white text-black' : 'bg-[#0071e3] hover:bg-[#0077ED] text-white' } py-2 px-5 mr-4`}>Learn more</button>
                    <button className={`rounded-full border-[1px] ${props.banner?.whiteButton ?  'border-white hover:bg-white hover:text-black text-white' : 'border-[#2997ff] text-[#2997ff] hover:bg-[#0077ED] hover:text-white'} py-2 px-5`}>Buy</button>
                </div>
            </div>
        </div>

        {props.banner.appleIntelligence &&
            <div className='text-white absolute bottom-12 left-0 right-0 w-fit mx-auto text-center'>
                    <h1 className='font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>Hello, Apple Intelligence.</h1>
            </div>
        }

    </div>

  )
}

export default LargeProductBanner