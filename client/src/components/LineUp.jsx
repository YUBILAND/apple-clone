import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LineUp = () => {

    const product_spec_items = [
        {
            topText: '',
            middleText: '14.2” or 16.2”',
            img: '',
            width: '',
            bottomText: 'Liquid Retina XDR display with up to 1600 nits peak brightness, 1,000,000:1 contrast ratio, and up to 120Hz refresh rates9',
        },
        {
            topText: '',
            middleText: '',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4_pro_max__d90fsmfhy6ky_large.png',
            width: '122px',
            bottomText: 'Apple M4, M4 Pro, or M4 Max chip',
        },
        {
            topText: '',
            middleText: '',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
            width: '55px',
            bottomText: 'Apple Intelligence1',
        },
        {
            topText: 'Up to',
            middleText: '24 hours',
            img: '',
            width: '',
            bottomText: 'battery life3',
        },
        {
            topText: '',
            middleText: '7 ports',
            img: '',
            width: '',
            bottomText: '3x Thunderbolt 4 (USB‑C) or 3x Thunderbolt 5 (USB‑C), HDMI, SDXC, headphone jack, MagSafe',
        },
        {
            topText: '',
            middleText: '3.4 lb. or 4.7 lb.',
            img: '',
            width: '',
            bottomText: 'Weight',
        },
    ]
  return (
    <div className='bg-[#f5f5f7] pb-[140px] mb-[140px]'>
        
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

                    <button className='rounded-full mr-4 px-6 py-2 hover:bg-[#272729]
hover:text-white'>Laptops</button>
                    <button className='rounded-full mr-4 px-6 py-2 hover:bg-[#272729]
hover:text-white'>Desktops</button>
                    <button className='rounded-full px-6 py-2 hover:bg-[#272729]
hover:text-white'>Displays</button>

                </div>
                <div className='ml-4 w-[372px]'>
                    <div className=' mt-20 text-center  '>

{/* Image */}
                        <img className='mx-auto transition-transform duration-300 hover:scale-105' src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png" alt="" />

{/* Color and New */}
                        <div className='mt-12 text-center '>
                            <div className='grid grid-cols-2 gap-2 w-fit mx-auto'>
                                <div className='w-3 h-3 rounded-full bg-black'/>
                                <div className='w-3 h-3 rounded-full bg-gray-300'/>
                            </div>
                        </div>

                        <span className='inline-block mt-4 mb-2 font-bold text-xs text-[#BD4410]'>New</span>

{/* Item Description */}
                        <div className='flex flex-col mb-12'> 
                            <span className='font-semibold text-3xl'>MacBook Pro 14" and 16"</span>
                            <span className='font-semibold text-lg'>M4, M4 Pro, or M4 Max chip</span>
                            <span className='inline-block mt-3 mx-auto w-[300px] text-lg'>The most advanced Mac laptops for demanding workflows.</span>
                            <span className='inline-block mt-3 font-semibold text-lg'>From $1599 or $133.25/mo. for 12 mo.*</span>

                            <div className='mt-8 flex items-center justify-between w-[300px] mx-auto px-4 text-lg'>
                                <button className='text-white rounded-full px-5 py-2  bg-[#0072e0] hover:bg-[#0077ED]'>Learn more</button>

                                <a className='group flex items-end text-[#196899] ' href="">
                                    <div className='flex items-center mr-6'>
                                        <div className='group-hover:underline'>Pre-order</div>
                                        <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                    </div>
                                </a>
                                
                            </div>

                        </div>

{/* horizontal line */}
                        <hr className='border-[#cececf] my-6' />
{/* Item Specs */}
                        <div className='grid grid-rows-1 gap-10 pt-6'>
                            {product_spec_items.map((item, i) => {

                                return <div className='flex flex-col items-center'>
                                    { item.topText && <span className='text-sm mb-2'>{item.topText}</span>}
                                    { item.middleText && <span className='font-semibold text-3xl mb-3 '>{item.middleText}</span>}
                                    { item.img && <img className={`w-[${item.width}] object-fit mb-4`} src={item.img} alt="" />}
                                    { item.bottomText && <span className='text-xs w-[300px] text-balance'>{item.bottomText}</span>}
                                </div>

                            })}
                            
                            
                            

                        </div>




                    </div>

                </div>
            </div>


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


            





            {/* <div className='py-24'>
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[405px] h-[740px] object-cover object-bottom' src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_intelligence__esfi0qmvis6e_xlarge.jpg" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8'>
                        <div className='text-lg font-semibold'>
                        Apple Intelligence and macOS
                        </div>
                        <h1 className='font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>Hello, Apple Intelligence.</h1>
                    </div>

                    
                </div>
            </div> */}

        </div>

    </div>
  )
}

export default LineUp