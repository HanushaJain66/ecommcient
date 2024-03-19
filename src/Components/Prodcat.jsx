import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Prodcat = () => {
  const [prod, setprod] = useState(null)
  const [cat, setcat] = useState(null)
  useEffect(() => {
    return async () => {
      const response = await axios.post('http://localhost:5000/api/v1/prod/get')
      setprod(response.data)
    }
  }, [])

  // const products = [
  //   {
  //     name: "Gucci GG Supreme Canvas Jacket",
  //     description: "A stylish jacket from Gucci featuring the GG Supreme canvas.",
  //     richDescription: "Crafted from GG Supreme canvas with a vintage effect, this jacket features a stand-up collar and a zip front closure. It is a statement piece that adds a touch of luxury to any outfit. The jacket is lined in silk and has a detachable hood.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577151/Cloudinary-React/Gucci_GG_Supreme_Canvas_Jacket_u7yz2o.jpg",
  //     brand: "Gucci",
  //     price: 5500,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 10,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Louis Vuitton Monogram Jacket",
  //     description: "A denim jacket from Louis Vuitton featuring the iconic Monogram pattern.",
  //     richDescription: "Crafted from Monogram denim, this jacket features a classic collar and a button front closure. It is a timeless piece that combines style and functionality. The jacket has four front pockets and adjustable cuffs.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577508/Cloudinary-React/Louis_Vuitton_Monogram_Denim_Jacket_o0lur8.png",
  //     brand: "Louis Vuitton",
  //     price: 2800,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 8,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Prada Nylon Bomber Jacket",
  //     description: "A nylon bomber jacket from Prada with a modern twist.",
  //     richDescription: "Crafted from technical nylon, this bomber jacket features a ribbed collar and cuffs, a zip front closure, and multiple pockets. It is a versatile piece that adds a contemporary edge to your look. The jacket has a detachable hood and is lined in Prada's signature logo jacquard fabric.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577246/Cloudinary-React/Prada_Nylon_Bomber_Jacket_x0c4n5.jpg",
  //     brand: "Prada",
  //     price: 7200,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 12,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Gucci Floral Embroidered Jacket",
  //     description: "A statement jacket from Gucci featuring floral embroidery.",
  //     richDescription: "Crafted from wool blend fabric, this jacket features colorful floral embroidery on the front and back. It has a button front closure and a classic collar. The jacket is fully lined in silk and has two front pockets.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577327/Cloudinary-React/Gucci_Floral_Embroidered_Jacke_txli0f.jpg",
  //     brand: "Gucci",
  //     price: 4500,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 6,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Gucci Sweatshirt",
  //     description: "An iconic sweatshirt from Gucci.",
  //     richDescription: "The Gucci sweatshirt is a timeless piece with a double-breasted front, featuring a point collar, shoulder epaulets, and a belted waist. It is a staple in every man's wardrobe. The trench coat is made from weatherproof cotton gabardine and has a signature check lining.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577161/Cloudinary-React/Gucci_Logo_Sweatshirt_evplpf.jpg",
  //     brand: "Gucci",
  //     price: 3800,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 5,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Prada Leather Jacket",
  //     description: "A classic leather biker jacket from Prada.",
  //     richDescription: "Crafted from premium leather, this biker jacket features an asymmetrical zip front closure and multiple pockets. It has a slim fit design and is the perfect choice for adding a rugged edge to your look.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577146/Cloudinary-React/Prada_Leather_Biker_Jacket_zq42sj.jpg",
  //     brand: "Prada",
  //     price: 4200,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 8,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Gucci Wool Coat",
  //     description: "A luxurious wool coat from Gucci.",
  //     richDescription: "Crafted from premium wool, this coat features a double-breasted front with Gucci's signature tiger head buttons. It has a notched lapel and a tailored silhouette, perfect for adding a sophisticated touch to your winter wardrobe.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577318/Cloudinary-React/gucciwoolcoat_ypwgt1.jpg",
  //     brand: "Gucci",
  //     price: 3200,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 6,
  //     isFeatured: false,
  //   },
  //   {
  //     name: "Chanel Tweed Blazer",
  //     description: "An iconic tweed blazer from Chanel.",
  //     richDescription: "The Chanel tweed blazer is a timeless piece with a tailored silhouette, featuring a round neck, structured shoulders, and a button front closure. It is a staple in every man's wardrobe. The blazer is fully lined in silk and has two front pockets.",
  //     images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577190/Cloudinary-React/chaneelblazer_woyeyb.jpg",
  //     brand: "Chanel",
  //     price: 5600,
  //     discount: 0,
  //     rating: 4,
  //     category: "Mens",
  //     countInStock: 5,
  //     isFeatured: false,
  //   },
  // ];
  // console.log(prod)

  return (
    <div className='flex flex-col '>
      <Navbar />
      {/* Filter */}
      <div className=''>
        <button className=' fixed z-50 bottom-0  rounded-full bg-[#eeaf28] w-[60px] flex h-[60px] left-0 p-4 m-10 items-center justify-center text-[#fff] font-semibold hover:bg-[#af8322] '>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        </button>

      </div>
      <div className='mt-20 p-2 pt-4  w-full items-center flex justify-evenly gap-10 bg-[#ebb239]'>
        <a className='p-1 text-[16px] text-[#fff] rounded-md w-full text-center'>Mens</a>
        <a className='p-1 text-[16px] text-[#fff] rounded-md w-full text-center'>Womens</a>
        <a className='p-1 text-[16px] text-[#fff] rounded-md w-full text-center'>Electronics</a>
        <a className='p-1 text-[16px] text-[#fff] rounded-md w-full text-center'>Watches</a>
        <a className='p-1 text-[16px] text-[#fff] rounded-md w-full text-center'>Shoes</a>
      </div>
      
      <div className='flex flex-wrap justify-center'>
        {
          prod?.map((e) => (
            <div key={e._id}>
              <div className="relative m-10 flex w-full max-w-[250px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link to={`/items/${e._id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center" href="">
                  <img className="object-cover" src={e.images} alt="product image" />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{e.discount}% OFF</span>
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <Link to={`/items/${e._id}`}>
                    <h5 className="text-xl tracking-tight text-slate-900">{e.name}</h5>
                  </Link>
                  <div className="mt-2 mb-5 flex flex-col  items-center justify-between">
                    <p className='flex justify-around w-full'>
                      <span className="text-3xl font-bold text-slate-900">{e.price}  ₹</span>
                      <span className="text-sm text-slate-900 line-through">{e.price} ₹</span>
                    </p>
                    <div className="flex items-center">
                      {
                        Array.from({ length: e.rating }, (_, index) =>
                          <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        )
                      }

                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{e.rating}</span>
                    </div>
                  </div>
                  <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                  </a>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Prodcat