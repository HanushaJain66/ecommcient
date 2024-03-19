import React from 'react'
import { motion } from 'framer-motion'

import men from '../assets/mens.webp'
import watch from '../assets/watch.jpeg'
import shoes from '../assets/shoes.jpeg'
import elec from '../assets/elec.jpeg'
import women from '../assets/women.jpeg'
import model from '../assets/model.jpeg'

const Hero = () => {
  return (
    <div className='flex  lg:flex-row flex-col justify-between sm:px-20 px-6 items-center'>
      <div className="sm:max-w-lg w-full sm:pt-0 pt-[130px] flex flex-col items-center justify-end">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Elevate Your LifeStyle.
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-[500px]">
        Step into a universe of curated wonders,Unleash your creativity with products that inspire, delight, and redefine the way you live. Your journey to extraordinary starts here.
        </p>
        <a
          href="#"
          className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 my-6"
        >
          Shop Collection
        </a>
      </div>

      <div
        // aria-hidden="true"
        className="w-full lg:max-w-7xl z-0 pointer-events-none"
      >
        <div className="w-full">
          <div className="flex items-center justify-center   space-x-6 lg:space-x-8">
            <div className="grid over flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <motion.div
              initial={{ opacity: 0,x:50,y:50 }}
              animate={{ opacity: 1,x:0,y:0 }}
              transition={{duration:0.3,delay:0.6}}
              className="h-64 w-44 overflow-hidden rounded-lg  lg:opacity-100">
                <img
                  src={model}
                  alt=""
                  className="h-full  w-full object-cover object-center"
                />
              </motion.div>
              <motion.div
              initial={{ opacity: 0,x:50,y:-50 }}
              animate={{ opacity: 1,x:0,y:0 }}
              transition={{duration:0.3,delay:0.9}}
              className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  
                  src={watch}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
              </div>
              <motion.div
               initial={{ opacity: 0.3,scale:0 }}
               animate={{ opacity: 1,scale:1 }}
               transition={{duration:0.5}}
              
              className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={men}
                  alt=""
                  className="h-full z-30 w-full object-cover object-center"
                />
              </motion.div>
              <motion.div
              
              initial={{ opacity: 0,y:-100 }}
              animate={{ opacity: 1,x:0,y:0 }}
              transition={{duration:0.3,delay:1.2}}
              className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={shoes}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <motion.div
              initial={{ opacity: 0,x:-50,y:50 }}
              animate={{ opacity: 1,x:0,y:0 }}
              transition={{duration:0.3,delay:1.8}}
              
              className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={elec}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  />
              </motion.div>
              <motion.div
              
              initial={{ opacity: 0,x:-50,y:-50 }}
              animate={{ opacity: 1,x:0,y:0 }}
              transition={{duration:0.3,delay:1.5}}
              className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src={women}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero