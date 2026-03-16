import React from 'react';

//<div className="wrapper">

function ProductItem({products, addToCart}) {
    const {title, imageUrl, description, category, price, id} = products;
    const handleAddToCart = () => {
        addToCart(products);
    }

  return (
    
    <div className="product m-2 text-center">
        <div className="wrapper">
            <div className="product-img">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="product title text-uppercase fs-4">{title}</div>
            <div className="product-price">
                <span>{price} $</span> <span><del>{price+15} $</del></span>

            </div>
        </div>
        <button className='add-to-cart mt-3 w-100' onClick={handleAddToCart} >Ajouter</button>
    </div>
    
  )
}

export default ProductItem;