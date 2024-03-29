import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    
    const [cart, setCart] = useState([]);

    useEffect(() => {
        Axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        console.log('Product added to cart:', product);
    };

    const updateQuantity = (productId, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item => (item.id === productId ? { ...item, quantity: newQuantity } : item))
        );
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="container">
            <h1>Products</h1>
            <div className="products">
                {products.map(product => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="card-content">
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart */}
            <div className="cart">
                <h2>Shopping Cart</h2>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <div>
                                <span>{item.title} - ${item.price} - Quantity: </span>
                                
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />

                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                    <strong>Total Price: ${calculateTotal()}</strong>
                </div>
            </div>
        </div>
    );
}

export default App;