import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
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
        })
    }

    return (
        <div className='container'>
            <div className="addItem-container">
                <div className="title"><h1>Add Product</h1></div>
                <form className='addItem-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Product Name' type="text" {...register("name")} />
                    <textarea placeholder='Description' type="text" {...register("description")} />
                    <input placeholder='Price' type="number" {...register("price")} />
                    <input placeholder='Quantity' type="number" {...register("quantity")} />
                    <input placeholder='Supplier Name' type="text" {...register("supplier")} />
                    <input placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='btn add-btn' type="submit" value="Add Item"/>
                </form>
            </div>
        </div>
    );
};

export default AddItem;