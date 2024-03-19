
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Cart from './Cart'
import Trending from './Trending'
import Footer from './Footer'
import Newprod from './Newprod'


export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <Trending/>
    <Newprod/>
    <Footer/>
    </>
  )
}
