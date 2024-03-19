import React, { useEffect } from 'react'
import men from '../assets/mens.webp'
import watch from '../assets/watch.jpeg'
import shoes from '../assets/shoes.jpeg'
import elec from '../assets/elec.jpeg'
import women from '../assets/women.jpeg'
import Category from './Category'
import axios from 'axios'
const Newprod = () => {
    const categories = [
        {
            name: 'Mens',
            href: '#',
            imageSrc: men,
        },
        {
            name: 'Women',
            href: '#',
            imageSrc: women,
        },
        {
            name: 'Electronics',
            href: '#',
            imageSrc: elec,
        },
        {
            name: 'Accessories',
            href: '#',
            imageSrc: watch,
        },
        {
            name: 'Shoes',
            href: '#',
            imageSrc: shoes
        },
    ]

    // useEffect(() => {
    
    //   return async() => {
    //     const response=await axios.post('http://localhost:5000/api/v1/prod/get').then((res)=>{
    //         console.log(res)
    //     })
    //   }
    // }, [])
    
    return (
        <section className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl px-10">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 className="text-[30px] w-full font-bold tracking-tight text-gray-900">
                    Featured Products
                </h2>
            </div>
            <div className="min-w-screen-xl flex-wrap flex gap-4 justify-center my-12">
                {categories.map((category) => (
                    <a
                        key={category.name}
                        href={category.href}
                        className="relative flex  flex-col overflow-hidden flex-wrap rounded-lg p-6 hover:opacity-75 w-[200px] border-2"
                    >

                        <div className='overflow-hidden rounded-lg'>
                            <img src={category.imageSrc} alt="" className="h-[150px] w-[150px] object-cover object-center" />
                        </div>
                        <div className='flex items-center justify-between py-2 flex-col'>
                            <h1 className="z-50 mt-auto text-center text-xl font-bold text-black sm:text-[18px] text-[14px]">{category.name}</h1>
                            <p>{Category.name}</p>
                            <div className='flex w-full justify-between'>
                                <p>{Category.name}</p>
                                <h2>45$</h2>
                            </div>
                            <p className='pt-2'>⭐⭐⭐⭐⭐</p>
                            <div>
                            </div>

                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Newprod