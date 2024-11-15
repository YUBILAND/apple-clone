import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Laptops from './Laptops';
import Desktops from './Desktops';
import Displays from './Displays';

const LineUp = () => {

    const [lineup, setLineup] = useState(1)

    function changeLineup(ind) {
        setLineup(ind);
    }

  return (
    <div className='bg-[#f5f5f7] pb-[140px]'>
        
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
                    <button onClick={() => changeLineup(1)} className={`${lineup === 1 && 'bg-[#272729] text-white select-none'} rounded-full mr-4 px-6 py-2`}>Laptops</button>
                    <button onClick={() => changeLineup(2)} className={`${lineup === 2 && 'bg-[#272729] text-white select-none'} rounded-full mr-4 px-6 py-2`}>Desktops</button>
                    <button onClick={() => changeLineup(3)} className={`${lineup === 3 && 'bg-[#272729] text-white select-none'} rounded-full px-6 py-2`}>Displays</button>
                </div>

                {lineup === 1 && <Laptops />}
                {lineup === 2 && <Desktops />}
                {lineup === 3 && <Displays />}


                
            </div>

{/* Apple Trade In */}
            <div>
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
            </div>

{/* Why Apple is the best place to buy Mac. */}
            <div className='mb-[100px]'>

                <div className='pt-[140px] font-semibold store_dark_gray flex justify-between'>
                    
                    <div className='text-6xl text-left w-[600px]'>Why Apple is the best place to buy Mac.</div>

                    <div className='text-right flex text-lg justify-end'>
                        <a className='group flex items-end text-[#196899] ' href="">
                            <div className='flex items-center mr-6'>
                                <div className='group-hover:underline'>Shop Mac</div>
                                <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                            </div>

                        </a>
                        
                    </div>
                </div>


                





                <div className='mt-24 ml-8'>
                <div className='relative bg-white w-[405px] h-[300px] transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg'>
                    
                    <div className=' px-8 pt-6 pb-12 text-black '>
                            <CreditCardRoundedIcon sx={{fontSize: '3.5rem'}} />
                            <div className='text-[24px] leading-tight font-semibold '>
                            Pay over time, interest-free</div>
                            <div>When you choose to check out with Apple Card Monthly Installments.</div>
                    </div>

                    <div className='absolute bottom-0 right-0 mr-4 mb-4'>
                        <AddCircleRoundedIcon className=' text-[#343436]' sx={{fontSize: '2.7rem'}} />
                    </div>
                </div>
                </div>
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