import React from 'react'

const Footer = () => {
    return (
   
            <div
                className="w-full flex sm:flex-row flex-col items-center pb-6 pt-10  sm:px-20 text-[#fefeff] bg-[#434141] justify-between">
                <h3 className=''>© 2024 Copyright 
                <a className="font-protest text-[20px] text-[#fefeff] px-2 "
                    href="#">Hama Store</a></h3>
                <h1 className=''>Developed by <a className='text-[#4b81cd] hover:text-[#bbd7ff] font-semibold' href="https://github.com/HanushaJain66">Hanusha </a>and <a href="https://github.com/mayankified" className='text-[#4b81cd] hover:text-[#bbd7ff] font-semibold' >Mayank</a></h1>
            </div>
  )
}

export default Footer