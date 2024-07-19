import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import styles from './ProductPage.module.css';

const ProductPage = () => {
    const { id } = useParams();
    const product = useSelector((state) =>
        state.products.items.find((product) => product.id === id)
    );
    const dispatch = useDispatch();

    if (!product) {
        return <p>Product not found</p>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <span>Products</span> / <span>Gaming Headsets & Audio</span> /{' '}
                <span>{product.name}</span>
            </div>
            <div className={styles.productDetail}>
                <div className={styles.imageContainer}>
                    <img src={product.image_url} alt={product.name} />
                </div>
                <div className={styles.details}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                  
                    <div className={styles.colors}>
                        {product.color_options && product.color_options.map((color, index) => (
                            <div key={index} className={styles.color} style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                    <div className={styles.actions}>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
