import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Inventory from './component/Pages/Inventory/Inventory';
import Blog from './component/Pages/Blog/Blog';
import About from './component/Pages/About/About';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Shared/Header/Header';
import Login from './component/RequireAuth/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/inventory' element={<Inventory></Inventory>}></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/*' element={<NotFound></NotFound>}></Route>
       </Routes>
    </div>
  );
}

export default App;
