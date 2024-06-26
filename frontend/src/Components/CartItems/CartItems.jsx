import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart ,getTotalCartAmount} = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product && all_product.map((e) => {
                if (cartItems && cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image || ''} alt="" className='carticon-product-icon' />
                                <p>{e.name || 'Unknown Product'}</p>
                                <p>${e.new_price || '0.00'}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price || 0) * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null; // or handle other cases as needed
            })}
            <div className="cartitems-down">
               <div className="cartitems-total">
                  <h1>Cart Totals</h1>
                  <div>
                     <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                     </div>
                     <hr />
                     <div className="cartitems-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                     </div>
                     <hr />
                     <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                     </div>
                  </div>
                     <button>PROCEED TO CHECKOUT</button>
               </div>
               <div className="cartitems-promocode">
                  <p>If you have a promo code, Enter it here</p>
                  <div className="cartitems-promobox">
                     <input type="text" placeholder='Promo-Code'/>
                     <button>Submit</button>
                  </div>
               </div>
            </div>
        </div>
    );
}

export default CartItems;
