import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import styles from './Product.module.css';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleViewProduct = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className={styles.product}>
            <img src={product.image} alt={product.name} onClick={handleViewProduct} />
            <h3 onClick={handleViewProduct}>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
