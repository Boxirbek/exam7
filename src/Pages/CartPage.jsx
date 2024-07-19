import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import styles from './CartPage.module.css';
import Navbar from '../components/Navbar';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (<>
        <div className={styles.cartPage}>
            <div className={styles.cartContent}>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className={styles.cartItems}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.image_url} alt={item.name} className={styles.image} />
                                <div className={styles.details}>
                                    <h3>{item.name}</h3>
                                    <h5>{item.brand_name}</h5>
                                    <p>${item.price.toFixed(2)}</p>
                                    <button onClick={() => handleRemove(item.id)} className={styles.removeButton}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className={styles.cartTotals}>
                <h3>Cart Totals</h3>
                <p>Shipping (3-5 Business Days): Free</p>
                <p>TAX (estimated for the United States (US)): $0</p>
                <p>Subtotal: ${total.toFixed(2)}</p>
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
        </div>
    </>
    );
};

export default CartPage;
