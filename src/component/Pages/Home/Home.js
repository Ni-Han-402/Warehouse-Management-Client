import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Item from '../../Item/Item';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect( () =>{
        const url = 'http://localhost:5000/item';
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <h1 className='title'>Best Furniture</h1>
                <div className="best-furniture">
                {
                    items.map(item => <Item
                    key={item._id}
                    item={item}
                    ></Item>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;