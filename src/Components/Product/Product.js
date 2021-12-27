import React from "react";
import { useStateValue } from '../../StateProvider';
import './Product.css';

function Product ({ name, price, image }) {
    const [ { cart }, dispatch ] = useStateValue();
    console.log("Cart -> ", cart)
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                name: name,
                price: price,
                image: image,
            },
        });
    }
    return(
        <div className="product">
            <div className="product__info">
                <strong> { name } </strong>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong> { price } </strong>
                </p>
            </div>
            <img 
                src={ image }
                alt="p-img"
            />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;