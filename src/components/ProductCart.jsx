import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import styles from './ProductCart.module.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ProductCard = ({ product, key }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.card}>
            <img src={product.image_url} alt={product.name} className={styles.image} />
            <Link to={`/products/${product.id}`}> <h3>{product.name}</h3></Link>
            <p>${product.price}</p>
            <div>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStarHalf />
            </div>

            <button onClick={handleAddToCart} className={styles.button}><FaCartShopping />  Add to Cart</button>
        </div>
    );
};

export default ProductCard;
