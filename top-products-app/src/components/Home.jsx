import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Nzc1MzQ3LCJpYXQiOjE3MTg3NzUwNDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNhNWIxNTFmLTIxOGItNDZhYS1hOWNiLTBiZGNhMDAzYzg5ZSIsInN1YiI6IjIxMDMwNDEyNDIzNkBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJBZmZvcmRtZWQiLCJjbGllbnRJRCI6ImNhNWIxNTFmLTIxOGItNDZhYS1hOWNiLTBiZGNhMDAzYzg5ZSIsImNsaWVudFNlY3JldCI6Imt1UkVNWEJhdWJNd1JETGEiLCJvd25lck5hbWUiOiJBbWFuIFJlZGR5IFB1bmRydSIsIm93bmVyRW1haWwiOiIyMTAzMDQxMjQyMzZAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwicm9sbE5vIjoiMjEwMzA0MTI0MjM2In0.O0cfk4oYMcTZUA0OODK4qwM1FvdUpMTPJR9fAytKzhM'; 
        const response = await axios.get(
          '/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000',
          {
            baseURL: 'http://20.244.56.144',
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Top 10 Laptops</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
