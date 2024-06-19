import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await axios.get('http://localhost:5000/api/products'); // Assuming backend is running on port 5000
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);

    return ( <
        div >
        <
        h1 > Top 10 Laptops < /h1> <
        ProductList products = { products }
        /> <
        /div>
    );
};

export default AllProductsPage;