import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';

const Placeorder = () => {
  const [formData, setFormData] = useState({
    shippingAddress1: '',
    shippingAddress2: '',
    city: '',
    zip: '',
    country: '',
    phone: '',
    status: 'Pending',
    user: ''
});

const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/api/v1/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Order creation failed');
        }

        const data = await response.json();
        console.log('Order created:', data);
        // Optionally, redirect to a success page or show a success message
    } catch (error) {
        setErrorMessage(error.message);
    }
};

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
};

return (
    <div className="container mt-5">
        <h2>Place Order</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="shippingAddress1">Shipping Address 1</label>
                <input type="text" className="form-control" id="shippingAddress1" name="shippingAddress1" value={formData.shippingAddress1} onChange={handleChange} required />
            </div>
            {/* Add other form fields similarly */}
            <button type="submit" className="btn btn-primary">Place Order</button>
        </form>
        {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
    </div>
);
};

export default Placeorder
