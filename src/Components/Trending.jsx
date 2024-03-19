import React from 'react'

const Trending = () => {
  return (
    <section
            
            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8 h-[70vh]"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Get upto 50% off on Grand Sale starting from 7th March
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                PLace your order before others grabs the Earthquaking deal.
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
              >
                View Products
              </a>
            </div>
          </section>
  )
}

export default Trending