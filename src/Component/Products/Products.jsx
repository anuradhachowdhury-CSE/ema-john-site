import React from 'react'
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Products = (props) => {
  console.log(props)
  const { name, price, img, seller, key, stock } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />


  return (
    <div className='Product-style'>

      <div className='img-style'>
        <img src={img} alt="" />
      </div>

      <div className='prod-style'>
        <h4 className='product-name'>Name:{name}</h4>
        <p>Category:{key}</p>
        <h5>Price:{price}</h5>
        <p>Seller:{seller}</p>
        <p><small>only {stock} left in stock - order soon</small></p>
        {/* <button className='btn-regular'>add to cart</button> */}
        <button  
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'>{element}add to cart</button>
      </div >

    </div>
  )
}

export default Products