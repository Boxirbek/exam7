import React from 'react';
import styles from './FilterBar.module.css';

const FilterBar = ({ filters, setFilters }) => {
    const handlePriceChange = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            price: e.target.value,
        }));
    };

    const handleColorChange = (e) => {
        const color = e.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            colors: prevFilters.colors.includes(color)
                ? prevFilters.colors.filter((c) => c !== color)
                : [...prevFilters.colors, color],
        }));
    };

    return (
        <div className={styles.filterBar}>
            <div>
                <h4>Price:</h4>
                <div className={styles.priceOption}>
                    <select
                        value={filters.price}
                        onChange={handlePriceChange}
                        className={styles.priceSelect}
                    >
                        <option value="">Select price</option>
                        <option value="99.99">$100</option>
                        <option value="199.99">$200</option>
                        <option value="299.99">$300</option>
                    </select>
                </div>
            </div>
            <div>
                <h4>Colors:</h4>
                <div className={styles.colorOptions}>
                    <label>
                        <input
                            type="checkbox"
                            value="#000000"
                            checked={filters.colors.includes("#000000")}
                            onChange={handleColorChange}
                        />
                        Black
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="#FFFFFF"
                            checked={filters.colors.includes("#FFFFFF")}
                            onChange={handleColorChange}
                        />
                        White
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="#FF5733"
                            checked={filters.colors.includes("#FF5733")}
                            onChange={handleColorChange}
                        />
                        Orange
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
