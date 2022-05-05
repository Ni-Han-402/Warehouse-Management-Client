import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Inventory from './component/Pages/Inventory/Inventory';
import Blog from './component/Pages/Blog/Blog';
import About from './component/Pages/About/About';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Shared/Header/Header';
import Login from './component/Auth/Login/Login';
import Register from './component/Auth/Register/Register';
import RequireAuth from './component/Auth/RequireAuth/RequireAuth';
import ItemUpdate from './component/ItemUpdate/ItemUpdate';
import AddItem from './component/Pages/AddItem/AddItem';
import ManageItem from './component/Pages/ManageItem/ManageItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/item/:itemId' element={<ItemUpdate></ItemUpdate>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
