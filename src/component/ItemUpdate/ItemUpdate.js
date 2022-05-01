import React from 'react';
import { useParams } from 'react-router-dom';

const ItemUpdate = () => {
    const {itemId} = useParams();
    return (
        <div>
            <h2>Item Upadate: {itemId}</h2>
        </div>
    );
};

export default ItemUpdate;