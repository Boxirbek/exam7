import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';
import Navbar from '../components/Navbar';
import styles from './ProductsPage.module.css';
import Footer from '../components/Footer';


const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const [filters, setFilters] = useState({ price: '', colors: [] });

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleSort = () => {
        products.sort((a, b) => b.price - a.price);
    };

    const filteredProducts = products.filter((product) => {
        return (
            (filters.price === '' || product.price <= parseInt(filters.price)) &&
            (filters.colors.length === 0 || filters.colors.some(color => product.color_options.includes(color)))
        );
    });

    return (
        <div className={styles.productsPage}>
          
            <div className={styles.mainContent}>
                <FilterBar filters={filters} setFilters={setFilters} />
                <ProductList products={filteredProducts} />
            </div>
          
        </div>
    );
};

export default ProductsPage;
