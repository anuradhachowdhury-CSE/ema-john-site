import React, { useEffect, useState } from 'react'
import  '../Shops/Shops.css'
import Product from '../Products/Products'
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displayProducts,setdisplayProducts] =
    useState([]);
    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setdisplayProducts(data);
            });
    }, []);
     const handleAddToCart = (product) =>
     {
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
     }

     const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setdisplayProducts(matchedProducts)
        console.log(matchedProducts.length);
     }

    return (
        <div>
            <nav className='input-style'>
        <input
        onChange={handleSearch}
         type="text"
          placeholder='type here to search' />
        <FontAwesomeIcon icon={faShoppingCart} />
       </nav>
            <div className="shop-container">
                <div className="product-container">


                    {
                       displayProducts.map(product => <Product
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