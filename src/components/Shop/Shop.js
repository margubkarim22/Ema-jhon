import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([]);
  
    const [cart,setCart]= useState([]);
    
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleCart =(product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
    <div className='shop-container'>
    <div className="products-container">
     
      {
        products.map(product => <Products
        key={product.id}
        product={product}
        handleCart ={handleCart}>
        </Products>)
      }

</div>
    <div className="cart-container">
      <Cart cart={cart}></Cart>
    </div>
</div>
);
       
};

export default Shop;