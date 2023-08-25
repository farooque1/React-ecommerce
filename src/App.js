import './App.css';
import Header from './Component/Header';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Home from './Component/Home';
import Cart from './Component/Cart';

function App() {
  return (
    <>
<Router>
<Header />
  <Routes>
    <Route exact path='/' element={<Home/>}></Route> 
    <Route exact path='/cart' element={<Cart />}></Route> 
    
  </Routes>
</Router>
    </>
  );
}

export default App;
