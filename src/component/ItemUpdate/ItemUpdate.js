import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemUpdate.css'

const ItemUpdate = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="update-item">
                    <div className="update-item-img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="update-item-content">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>{item.description}</p>
                        <p><small>Quantity: {item.quantity}</small></p>
                        <p><small>Supplier: {item.supplier}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemUpdate;