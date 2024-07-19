import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCart';
import styles from './ProductList.module.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (!products) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
