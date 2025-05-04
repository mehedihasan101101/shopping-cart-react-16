import React from 'react';

const productCart = ({eachProduct,addToCart,isAdded }) => {
   const {image,name,detail,price} = eachProduct;
    return (
        <div className="card bg-[#1F1F2E] border-1 lg:w-96 border-[#38384A] shadow-sm">
            <figure>
                <img className='h-[250px] w-full '
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body ">
                <h2  className="card-title">{name}</h2>
                <p className='text-[15px]'>{detail}</p>
                <p className='text-[15px]'>$ {price}</p>
                <div className="card-actions justify-end">
                    <button  onClick={()=>addToCart(eachProduct)} className="btn btn-primary" disabled ={isAdded }>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default productCart;