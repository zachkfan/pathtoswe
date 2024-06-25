import React from 'react'
import HomeButton from './home_button'

const banner = () => {
    const bannerStyle = {
        backgroundImage: 'url(/home_banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '550px', // Adjust the height as needed
        width: '100%', // Adjust the width as needed
      };
  return (
    <div className = 'flex flex-col items-center' style={bannerStyle}>
        <h1 className='text-white text-8xl pt-36 font-extrabold'> PathToSWE</h1>
        <h1 className = 'text-white text-4xl py-5 font-semibold'>Charting your course to a Software Career</h1>
    </div>
  )
}

export default banner