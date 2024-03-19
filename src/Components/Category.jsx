import React from 'react'
import men from '../assets/mens.webp'
import watch from '../assets/watch.jpeg'
import shoes from '../assets/shoes.jpeg'
import elec from '../assets/elec.jpeg'
import women from '../assets/women.jpeg'
const Category = () => {

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
            imageSrc:shoes 
        },
    ]

    return (
        <section className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl px-10">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 className="text-[30px] w-full font-bold tracking-tight text-gray-900">
                    Shop by Category
                </h2>
            </div>
            <div className="min-w-screen-xl flex flex-wrap gap-4 justify-center my-12">
                {categories.map((category) => (
                    <a
                        key={category.name}
                        href={category.href}
                        className="relative flex sm:h-80 h-60 sm:w-56 w-40 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                        <span aria-hidden="true" className="absolute inset-0">
                            <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                        </span>
                        <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white sm:text-[18px] text-[14px]">{category.name}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Category