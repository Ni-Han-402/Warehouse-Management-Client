
import { useNavigate } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import Banner from '../../Banner/Banner';
import aboutImage from '../../../images/banner2.jpg'
import Item from '../../Item/Item';
import './Home.css'

const Home = () => {
    const [items, setItems] = useItems([]);
    const navigate = useNavigate()

    const handleManageItem = () => {
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

            <div className="container">
                <h1 className='title'>Where we can help</h1>
                <div className="about-section">
                    <div className="about-section-img">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about-section-content">
                        <ul>
                            <li><p>Finding your unique decorating style</p></li>
                            <li><p>Finding the right furniture for your home</p></li>
                            <li><p>Fabric/leather selection and coordination</p></li>
                            <li><p>Floor and space planning</p></li>
                            <li><p>Color and paint recommendations</p></li>
                            <li><p>Fabric selection and coordination</p></li>
                        </ul>
                        <button className='btn'>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;