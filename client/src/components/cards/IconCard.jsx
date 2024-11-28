import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import MoodIcon from '@mui/icons-material/Mood';
import GradientIcon from '../custom/GradientIcon';

const IconCard = (props) => {
  return (
    <div className='bg-white w-[313px] h-[240px] cursor-pointer shadow-lg hover:scale-[1.02] transition-!transform duration-300 ease hover:shadow-xl rounded-3xl'>
        <div className='px-8 pt-6 pb-12 text-black'>
            <div>
                {/* <props.icon className='rounded-full' sx={{fontSize: '3rem', background: 'linear-gradient(135deg, rgba(158,209,245,1) 13%, rgba(129,149,238,1) 30%, rgba(161,138,236,1) 49%, rgba(243,119,190,1) 68%, rgba(249,171,109,1) 100%)'}} /> */}
                <GradientIcon icon={props.icon} className='mb-2' />

                <div className='text-[24px] leading-tight font-semibold '>
                    {props.card.text}
                </div>

                {/* <div className='text-[24px] leading-tight font-semibold '>
                    Enjoy <span className='text-[#75c053]'>two-hour delivery</span> from an Apple Store, <span className='text-[#75c053]'> free delivery</span>, or <span className='text-[#75c053]'>easy pickup.<sup>2</sup></span></div> */}
                {/* <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                <div>From $1599 or $133.25/mo. for 12 mo.</div> */}
            </div>
        </div>
    </div>
  )
}

export default IconCard