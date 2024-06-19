import React from 'react';

const ProductList = ({ products }) => {
    return ( <
        div > {
            products.map(product => ( <
                div key = { product.id } >
                <
                h2 > { product.name } < /h2> <
                p > Price: { product.price } < /p> { /* Render other product details */ } <
                /div>
            ))
        } <
        /div>
    );
};

export default ProductList;