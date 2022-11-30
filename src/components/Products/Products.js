import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import'./Products.css';


const Product = (props) => {

 const {img,name,seller,price,ratings} = props.product;
 const {handleCart} = props;
    return (
        <div className='product'>
           <img src={img} alt=""/>
           <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p >price :${price}</p>
            <p > <small>Seller :{seller}</small></p>
            <p >ratings : {ratings} stars</p>
           </div>
           <button onClick={()=>props.handleCart(props.product)} className='button-cart'>
            <p className='btn-tex'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;