import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>  
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/contact' element={<h1>CONTACT</h1>} />
              <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
              <Route path='/cart' element={<Cart />}/> 
              <Route path='/checkout' element={<Checkout />}/> 
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>     
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
