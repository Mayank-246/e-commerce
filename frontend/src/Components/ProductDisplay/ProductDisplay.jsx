import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
  const {product} =props;
  const {addToCart} =useContext(ShopContext);
    return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className='productdisplay-main-img' />
                </div>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='product-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='product-right-price-new'>
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and with as round neckline and short sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="profuctdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className='sizes'>S</div>
                    <div className='sizes'>M</div>
                    <div className='sizes'>L</div>
                    <div className='sizes'>XL</div>
                    <div className='sizes'>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category :</span>Women, T-shirt, Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Tags :</span>Mordern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay