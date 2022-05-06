import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemUpdate.css'

const ItemUpdate = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [reload, setIsReload] = useState(true)
    // const [updateQuantity, setUpdateQuantity] = useState();
    // const [delivered, setDelivered] = useState({})
    const restockRef = useRef();

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [reload])

    const handleDelete = id => {

        const restock = parseInt(restockRef.current.value);
        const newQuantity = parseInt(item.quantity) + restock;
        const makeQuantity = { newQuantity }
        console.log(newQuantity);

        const url = `http://localhost:5000/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Product Restocked')
                setIsReload(newQuantity);
            })

    }
    const handleDeliverd = () => {
        const newQuantity= parseInt(item.quantity) - 1;
        console.log(newQuantity);
        const makeDeliveredQuantity = { newQuantity }


        const url = `http://localhost:5000/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeDeliveredQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(newQuantity >= 0){
                    setIsReload(newQuantity);
                }
                else{
                    alert('Product Not Available')
                    
                }
                
                
            })
    }


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
                        <div className="update-item-btn">
                            <input ref={restockRef} type="number" name="" />
                            <button className='btn' onClick={() => handleDelete(item._id)}>Restock</button>
                        </div>
                        <div className="deliver-btn">
                            <button onClick={handleDeliverd} className='btn'>Delivered</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemUpdate;