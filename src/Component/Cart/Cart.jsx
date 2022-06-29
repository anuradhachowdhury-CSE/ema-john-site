import React from 'react'
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart){
        total = Math.round(total + product.price);
       
    }
   let order = 0;
   for(const product of cart) {
    order = order + 1;
   }
   let tax = (order * 20);

  return (
    <div>
      <div className='cart-style'>
                    <h2>Items Ordered</h2>
                    <p>Items :{order}</p>
                    <p>Shipping & Handling:${100}</p>
                    <p>Total before tax:${order * 2}</p>
                    <p>Estimated Tax:${tax}</p>
                    <h2 className='red-order'>Order Total: ${total + tax + 110}</h2>
                    <button className='Total-btn'>Total of order</button>
                    </div>
    </div>
  )
}

export default Cart