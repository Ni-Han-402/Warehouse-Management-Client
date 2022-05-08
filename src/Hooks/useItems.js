import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = 'https://radiant-refuge-45393.herokuapp.com/item';
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems]
}

export default useItems;