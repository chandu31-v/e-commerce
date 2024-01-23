import './App.css';
//import { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/components/Login"
import Signin from "./pages/components/Signin"
import Context from "./pages/components/context"
import Cart from "./pages/components/cart"

function App() {

  return (
    <div className="App">
      <Context>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Context>
    </div>
  );
}

export default App;
