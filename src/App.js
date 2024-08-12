import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route ,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import Login from './components/Login/Login';



function App() {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
     {showLogin ?<Login  setShowLogin={setShowLogin}/>:<></>}
     <div className="app">
         < NavBar setShowLogin={setShowLogin}/>
         <Routes>
             < Route path='/' element = {<Home/>} />
             < Route path='/cart' element = {<Cart/>} />
             < Route path='/order' element = {<PlaceOrder/>} />
         </Routes>
     </div>
         <Footer/>
       </>
      
  );
}

export default App;
