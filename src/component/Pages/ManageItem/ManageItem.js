import React from 'react';
import useItems from '../../../Hooks/useItems';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const procced = window.confirm('Are You Sure?');
        if(procced){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItem = items.filter(item => item._id !== id);
                setItems(remainingItem);
            })
        }
    }
    return (
        <div className='container'>
            <h1 className='title'>Manage Item</h1>
            <div className="manage-items">
                {
                    items.map(item => <div className='manage-item' key={item._id}>
                        <div className="manage-item-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="manage-item-content">
                            <h2>{item.name}</h2>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="manage-item-btn">
                            <button className='btn'>Update</button>
                            <button onClick={() => handleDelete(item._id)} className='btn'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;