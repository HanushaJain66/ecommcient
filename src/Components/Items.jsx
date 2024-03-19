import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'
import '../Styles/Items.css'
import '../Styles/App.css'


const Items = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     // You can fetch products data from the server here using axios or any other HTTP client library
    //     // For demonstration purpose, I'm setting dummy data directly
    //     const dummyData = [
    //         {
    //             name: "Gucci GG Supreme Canvas Jacket",
    //             description: "A stylish jacket from Gucci featuring the GG Supreme canvas.",
    //             richDescription: "Crafted from GG Supreme canvas with a vintage effect, this jacket features a stand-up collar and a zip front closure. It is a statement piece that adds a touch of luxury to any outfit. The jacket is lined in silk and has a detachable hood.",
    //             images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577151/Cloudinary-React/Gucci_GG_Supreme_Canvas_Jacket_u7yz2o.jpg",
    //             brand: "Gucci",
    //             price: 5500,
    //             discount: 0,
    //             rating: 4,
    //             category: "Mens",
    //             countInStock: 10,
    //             isFeatured: false,
    //         }
    //     ];
    //     setProducts(dummyData); // Set dummy data to state
    // }, []);


    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    console.log(id);
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             // const response = await axios.get(`http://localhost:5000/api/v1/prod/${id}`); 
    //             console.log("helo")
                
    //             const response = await axios.post(`http://localhost:5000/api/v1/prod?id=${id}`); 
    //             setProduct(response.data);
    //         } catch (error) {
    //             console.error('Error fetching product:', error);
    //         }
    //     };

    //     fetchProduct();
    // }, []);
    useEffect(() => {
        return async () => {
          const response = await axios.post(`http://localhost:5000/api/v1/prod/${id}`)
          setProduct(response.data)
        }
      }, [])
    console.log(product);
    return (
        <>
        <Navbar/>
     
            {/* {product?.map((product, index) => ( */}
                <div >
                     <div className='product-container'>
                    <div className='product-left'>
                    <img src={product?.images} alt={product?.name} id='product-img' />
                    </div>
                    <div className='product-right'>
                        <h1 id='product-name'>{product?.name}</h1>
                        <p id='product-description'>{product?.description}</p>
                        <p id='product-richDescription'>{product?.richDescription}</p>
                        <div className='brand-price'>
                            <h1 id='product-brand'>Brand:-{product?.brand}</h1>
                            <h1 id='product-price'>Price:-{product?.price}</h1>
                            <h1 id='product-discount'>Discount:- {product?.discount}</h1>
                        </div>
                        <p id='product-rating'>Rating:- {product?.rating}</p>
                        <p id='product-countinstock'>Count In Stoc:- {product?.countInStock}k</p>
                    </div>
                </div>
                </div>
            {/* ))} */}
    
        </>
    );
}

export default Items
