// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchData();
    }, []);

    return ( <
        div >
        <
        h1 > Top 10 Laptops < /h1> <
        ul > {
            products.map(product => ( <
                li key = { product.id } > { product.name } < /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default App;