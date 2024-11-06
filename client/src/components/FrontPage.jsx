import React from 'react'
import './FrontPage.css'
import AppleIcon from '@mui/icons-material/Apple';

function FrontPage() {
  return (
    <div className='mt-[44px] select-none'>
        {/* first image */}
        <firstimg className='block relative mb-3'>
            <div className='text-white '> 
                <img className='h-[692px] object-cover' src="https://www.apple.com/v/home/bu/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg" alt="" /> 
                <div className='absolute top-20 left-0 right-0 w-fit mx-auto text-center'>
                    <h1 className='text-6xl font-bold mb-2'>iPhone 16 Pro</h1>
                    <h2 className='text-3xl'>Hello, Apple Intelligence.</h2>
                    <div className='flex items-center justify-center mt-4'>
                        <button className='text-lg rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                        <button className='text-lg rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Buy</button>
                    </div>
                </div>
            </div>
        </firstimg>

        {/* second image */}
        <secondimg className='block relative mb-3'>
            <div className='text-white'> 
                <img className='h-[692px] object-cover' src="https://www.apple.com/v/home/bu/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg" alt="" /> 
                <div className='absolute top-20 left-0 right-0 w-fit mx-auto text-center'>
                    <h1 className='text-6xl font-bold mb-2'>iPhone 16</h1>
                    <h2 className='text-3xl'>Hello, Apple Intelligence.</h2>
                    <div className='flex items-center justify-center mt-4'>
                        <button className='text-black text-lg rounded-full bg-white py-2 px-5 mr-4'>Learn more</button>
                        <button className='text-white text-lg rounded-full border-[1px] border-white py-2 px-5'>Buy</button>
                    </div>
                </div>
            </div>
        </secondimg>

        {/* third image */}
        <thirdimg className='block relative mb-3'>
            <div className='text-white'>
                <img className='h-[692px] object-cover' src="https://www.apple.com/v/home/bu/images/heroes/macbook-pro-enhanced/hero_macbookpro_announce__f7vm5bnswsae_largetall.jpg" alt="" /> 
                <div className='absolute top-20 left-0 right-0 w-fit mx-auto text-center'>
                    <h1 className='text-6xl font-bold mb-2'>MacBook Pro</h1>
                    <h2 className='text-3xl mb-2'>A work of smart.</h2>
                    <h3 className='text-xl text-[#86868b]'>Available starting 11.8</h3>
                    <div className='flex items-center justify-center mt-4'>
                    <button className='text-lg rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                    <button className='text-lg rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Pre-order</button>
                    </div>
                </div>
            </div>
            <div className='text-white absolute bottom-12 left-0 right-0 w-fit mx-auto text-center'>
                <h1 className='font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>Hello, Apple Intelligence.</h1>
            </div>
        </thirdimg>

        {/* six box */}
        <gridbox className='grid grid-cols-2 gap-3 px-3 mb-3'>
            <grid1 className='block relative h-[580px]'>
                <div className='apple_black'> 
                    <img className='h-[580px] object-cover' src="https://www.apple.com/v/home/bu/images/promos/mac-mini/promo_macmini_announce__bwha5fjvaioi_large.jpg" alt="" /> 
                    <div className='absolute top-12 left-0 right-0 w-fit mx-auto text-center'>
                        <h1 className='text-4xl font-bold mb-2'>Mac mini</h1>
                        <h2 className='text-xl mb-2'>Size down. Power up.</h2>
                        <h3 className='text-md text-[#86868b]'>Available starting 11.8</h3>
                        <div className='flex items-center justify-center text-sm font-semibold mt-4'>
                            <button className='text-white  rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                            <button className='rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Pre-order</button>
                        </div>
                    </div>
                </div>
                <div className='text-white absolute bottom-12 left-0 right-0 w-fit mx-auto text-center'>
                    <h1 className='font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>Hello, Apple Intelligence.</h1>
                </div>
            </grid1>
            
            <grid2 className='block relative h-[580px]'>
                <div className='apple_black'> 
                    <img className='h-[580px] object-cover' src="https://www.apple.com/v/home/bu/images/promos/imac/promo_imac_announce__f4qdil7mfmeu_large.jpg" alt="" /> 
                    <div className='absolute top-12 left-0 right-0 w-fit mx-auto text-center'>
                        <h1 className='text-4xl font-bold mb-2'>iMac</h1>
                        <h2 className='text-xl mb-2'>Bri
                            <lcolor className='text-[#3e935c]'>l</lcolor>
                            <lcolor className='text-[#edd142]'>l</lcolor>
                            <lcolor className='text-[#e3704b]'>l</lcolor>
                            <lcolor className='text-[#de5f7d]'>l</lcolor>
                            <lcolor className='text-[#827eb2]'>l</lcolor>
                            <lcolor className='text-[#547eae]'>l</lcolor>
                            iant.</h2>
                        <h3 className='text-md text-[#86868b]'>Available starting 11.8</h3>
                        <div className='flex items-center justify-center text-sm font-semibold mt-4'>
                            <button className='text-white  rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                            <button className='rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Pre-order</button>
                        </div>
                    </div>
                </div>
                <div className='text-white absolute bottom-12 left-0 right-0 w-fit mx-auto text-center'>
                    <h1 className='font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>Hello, Apple Intelligence.</h1>
                </div>
            </grid2>
            
            <grid3 className='block relative h-[580px]'>
                <div className='text-white'> 
                    <img className='h-[580px] object-cover' src="https://www.apple.com/v/home/bu/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_large.jpg" alt="" /> 
                    <div className='absolute bottom-10 left-0 right-0 w-fit mx-auto text-center'>
                        <h1 className='text-4xl font-bold mb-2'>Airpods Pro 2</h1>
                        <h2 className='text-xl w-[500px]'>Hearing Test, Hearing Aid, and Hearing Protection features in a free software update.<sup>1</sup></h2>
                        <div className='flex items-center justify-center text-sm font-semibold mt-2'>
                            <button className='text-white  rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                            <button className='rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Buy</button>
                        </div>
                    </div>
                </div>
            </grid3>

            <grid4 className='block relative h-[580px]'>
                <div className='apple_black'> 
                    <img className='h-[580px] object-cover' src="https://www.apple.com/v/home/bu/images/promos/apple-intelligence/promo_ai__couihqxznyvm_large.jpg" alt="" /> 
                    <div className='absolute top-10 left-0 right-0 w-fit mx-auto text-center'>
                        <h1 className='text-4xl font-bold mb-2'>Apple Intelligence</h1>
                        <h2 className='text-xl w-[500px]'>AI for the rest of us.</h2>
                        <div className='flex items-center justify-center text-sm font-semibold mt-4'>
                            <button className='text-white  rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                            <button className='rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Watch the film</button>
                        </div>
                    </div>
                </div>
            </grid4>

            <grid5 className='block relative h-[580px]'>
                <div className='apple_black'> 
                    <img className='h-[580px] object-cover' src="https://www.apple.com/v/home/bu/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg" alt="" /> 
                    <div className='absolute top-10 left-0 right-0 w-fit mx-auto text-center'>
                        <div className='flex items-center justify-center mb-1'>
                            <AppleIcon sx={{color: 'apple_black', fontSize: '2.2rem'}}/>
                            <h1 className='text-4xl font-bold'>Trade In</h1>
                        </div>

                        <h2 className='text-xl w-[300px]'>Get $180-$650 in credit when you trade in iPhone 12 or higher.<sup>2</sup></h2>
                        <div className='flex items-center justify-center text-sm font-semibold mt-4'>
                            <button className='text-white  rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Get your estimate</button>
                        </div>
                    </div>
                </div>
            </grid5>

            <grid6 className='block relative h-[580px]'>
                <div className='apple_black'> 
                    <img className='h-[580px] object-cover' src="https://www.apple.com/v/home/bu/images/promos/apple-card/promo_apple_card__5cm7draujpey_large.jpg" alt="" /> 
                    <div className='absolute top-10 left-0 right-0 w-fit mx-auto text-center'>
                        <div className='flex items-center justify-center mb-1'>
                            <AppleIcon sx={{color: 'apple_black', fontSize: '2.2rem'}}/>
                            <h1 className='text-4xl font-bold'>Card</h1>
                        </div>
                            <h2 className='text-xl w-[300px]'>Get up to 3% Daily Cash back with every purchase</h2>
                        <div className='flex items-center justify-center text-sm font-semibold mt-4'>
                            <button className='text-white  rounded-full bg-[#0071e3] py-2 px-5 mr-4'>Learn more</button>
                            <button className='rounded-full border-[1px] border-[#2997ff] text-[#2997ff] py-2 px-5'>Apply now</button>
                        </div>
                    </div>
                </div>
            </grid6>

            
        </gridbox>
        
        




    </div>
  )
}

export default FrontPage