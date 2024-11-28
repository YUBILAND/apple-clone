import React from 'react'
import { SvgIcon } from '@mui/material';

const GradientIcon = (props) => {
  return (
    // Applies linear gradient to SVG Icon
    <SvgIcon {...props} sx={{ fontSize: '3rem' }}>
    <defs>
      {/* Define the custom linear gradient */}
      <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="13%" style={{ stopColor: 'rgba(158,209,245,1)', stopOpacity: 1 }} />
        <stop offset="30%" style={{ stopColor: 'rgba(129,149,238,1)', stopOpacity: 1 }} />
        <stop offset="49%" style={{ stopColor: 'rgba(161,138,236,1)', stopOpacity: 1 }} />
        <stop offset="68%" style={{ stopColor: 'rgba(243,119,190,1)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgba(249,171,109,1)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    {/* Apply the gradient to the icon path */}
    <props.icon sx={{ fill: 'url(#customGradient)' }} />
  </SvgIcon>
  )
}

export default GradientIcon