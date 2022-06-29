import React, { useEffect, useState } from 'react'
import  '../Shops/Shops.css'
import Product from '../Products/Products'
import Cart from '../Cart/Cart';

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
     const handleAddToCart = (product) =>
     {
        const newCart = [...cart,product];
        setCart(newCart);
        console.log(product.name);
     }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">


                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart ={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    
                   <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    )
}

export default Shops