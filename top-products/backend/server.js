const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/products', async(req, res) => {
    try {
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Nzc1MzQ3LCJpYXQiOjE3MTg3NzUwNDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNhNWIxNTFmLTIxOGItNDZhYS1hOWNiLTBiZGNhMDAzYzg5ZSIsInN1YiI6IjIxMDMwNDEyNDIzNkBwYXJ1bHVuaXZlcnNpdHkuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJBZmZvcmRtZWQiLCJjbGllbnRJRCI6ImNhNWIxNTFmLTIxOGItNDZhYS1hOWNiLTBiZGNhMDAzYzg5ZSIsImNsaWVudFNlY3JldCI6Imt1UkVNWEJhdWJNd1JETGEiLCJvd25lck5hbWUiOiJBbWFuIFJlZGR5IFB1bmRydSIsIm93bmVyRW1haWwiOiIyMTAzMDQxMjQyMzZAcGFydWx1bml2ZXJzaXR5LmFjLmluIiwicm9sbE5vIjoiMjEwMzA0MTI0MjM2In0.O0cfk4oYMcTZUA0OODK4qwM1FvdUpMTPJR9fAytKzhM';
        const response = await axios.get('http://20.244.56.144/test/companies/: companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        res.json(response.data.products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Error fetching products' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});