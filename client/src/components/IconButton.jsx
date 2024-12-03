import React from 'react'

const IconButton = (props) => {
  return (
    <a href='' className={`mb-1 flex items-center w-fit group ${props.dark ? 'text-[#e6e6e6]' : 'text-[#333336]'}`}>
        <props.icon className={`${props.dark ? 'group-hover:text-white' : 'group-hover:text-black'} pr-3 ${props.isLargeScreen ? 'w-4' : '!w-8'}`} />
        <ul className={`${props.dark ? 'hover:text-white almost_white' : 'hover:text-black'}`} href="">{props.text}</ul>
    </a>
  )
}

export default IconButton