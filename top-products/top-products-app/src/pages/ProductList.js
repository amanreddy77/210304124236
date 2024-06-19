import React from 'react';

const ProductList = ({ products }) => {
    return ( <
        ul > {
            products.map(product => ( <
                li key = { product.id } >
                <
                div > { product.productName } < /div> <
                div > { product.price } < /div> <
                div > { product.rating } < /div> <
                div > { product.discount } < /div> <
                div > { product.availability } < /div> <
                /li>
            ))
        } <
        /ul>
    );
};

export default ProductList;