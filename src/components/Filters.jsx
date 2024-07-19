import React from 'react';
import styles from './Filters.module.css';

const Filters = () => {
    return (
        <div className={styles.filters}>
            {/* Filter options */}
            <h3>Brand</h3>
            {/* Brand filters */}
            <h3>Connectivity</h3>
            {/* Connectivity filters */}
            <h3>Price</h3>
            {/* Price filters */}
        </div>
    );
};

export default Filters;
