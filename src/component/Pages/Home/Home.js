
import { useNavigate } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import Banner from '../../Banner/Banner';
import Item from '../../Item/Item';
import './Home.css'

const Home = () => {
    const [items, setItems] = useItems([]);
    const navigate = useNavigate()

    const handleManageItem = () =>{
        navigate('/manageitem')
    }
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
                    ></Item>).slice(0, 6)
                }
                </div>
                <button onClick={handleManageItem} className='btn'>Manage All Item</button>
            </div>
        </div>
    );
};

export default Home;