import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [myItem, setMyItem] = useState([]);
    const navigate = useNavigate();

    const navigateToUpdate = id =>{
        navigate(`/item/${id}`);
    }

    useEffect( () =>{
        const getMyItems = async() =>{
            const email = user.email;
            console.log(email);
            const url = `https://radiant-refuge-45393.herokuapp.com/myitem?email=${email}`;
            const {data} = await axios.get(url);
            setMyItem(data);
        }
        getMyItems();

    }, [user])
    return (
        <div className='container'>
            <h1 className='title'>Manage Item</h1>
            <div className="manage-items">
                {
                    myItem.map(item => <div className='manage-item' key={item._id}>
                        <div className="manage-item-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="manage-item-content">
                            <h2>{item.name}</h2>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="manage-item-btn">
                            <button onClick={() => navigateToUpdate(item._id)} className='btn'>Update</button>
                            {/* <button onClick={() => handleDelete(item._id)} className='btn'>Delete</button> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;