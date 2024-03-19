import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full z-50 text-[#fefeff]'>

        <nav className='flex w-full h-[86px] bg-[#434141] items-center justify-between px-10 z-50'>
            <h1 className='font-protest text-[30px]'>Hama Store</h1>
            <ul className=' sm:flex hidden'>
                <li><a className='px-4 text-[18px]' href="">Home</a></li>
                <li><a className='px-4 text-[18px]' href="">Features</a></li>
                <li><a className='px-4 text-[18px]' href="">Categories</a></li>
                <li><a className='px-4 text-[18px]' href="">Contact</a></li>
            </ul>
            <div>
                {/* <button>Login</button> */}
                <button className='login py-2 px-4'>
                    Login
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>

                    </div>
                </button>
            </div>
        </nav>
        </div>
    )
}

export default Navbar