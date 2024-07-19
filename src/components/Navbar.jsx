import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaCartShopping } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';

const Navbar = ({ onSort }) => {
    const cartItems = useSelector((state) => state.cart.items);

    return (<>
        <div className={styles.navtop}>
            <IoCall />
            <h5>
                +4904-049-950
            </h5>
            <span >Get 50% Off on the Selected items</span> | <h5>Shop now</h5>

            <p>English</p>
            <p>Locatoins</p>

        </div>
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>GameGeek</Link>
            <Link to="/" className={styles.logo}><h5>Home</h5></Link>
            <Link to="/cart" className={styles.logo}>
                <h5>About</h5>
            </Link>
            <div className={styles.searchNav}>
                <input type="search" name="" id="" placeholder='      Search' />
                <CiSearch />
            </div>
            <div className={styles.navLinks}>
                <button onClick={onSort} className={styles.sortButton}>Sort</button>

                <Link to="/cart" className={styles.cartIcon}>
                    <  FaCartShopping />
                    <span>{cartItems.length}</span>
                </Link>
            </div>
        </nav>
    </>
    );
};

export default Navbar;
