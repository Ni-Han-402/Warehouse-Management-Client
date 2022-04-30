import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name, img, description, price, quantity, supplier} = item;
    return (
        <div className='item'>
            <div className="item-img">
            <img src={img} alt="" />
            </div>
            <div className="item-content">
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <p><small>Quantity: {quantity}</small></p>
            <p><small>Supplier: {supplier}</small></p>
            <button className='btn'>UPDATE</button>
            </div>
        </div>
    );
};

export default Item;