import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const { register, handleSubmit, reset } = useForm();
   
    const onSubmit = data => {
        console.log(data);
        const url = `https://radiant-refuge-45393.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast('Product Added')
            reset()
        })
    }

    return (
        <div className='container'>
            <div className="addItem-container">
                <div className="title"><h1>Add Product</h1></div>
                <form className='addItem-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("email")} readOnly defaultValue={user.email} />
                    <input placeholder='Product Name' type="text" {...register("name")} />
                    <textarea placeholder='Description' type="text" {...register("description")} />
                    <input placeholder='Price' type="number" {...register("price")} />
                    <input placeholder='Quantity' type="number" {...register("quantity")} />
                    <input placeholder='Supplier Name' type="text" {...register("supplier")} />
                    <input placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='btn add-btn' type="submit" value="Add Item"/>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddItem;