import './App.css'
import Navbar from './components/Navbar/Navbar'
import { getData } from './services/firebase'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PagNotFound from './components/PagNotFound/PagNotFound';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';


function App() {
  
  getData();
  
  
  return (
    
     <CartContextProvider>
      <BrowserRouter>
        
            <Navbar/>
            
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/:category' element={<ItemListContainer/>}/>
              

              {/* <Route path='/product/:id' element={<ItemDetailContainer/>}/>    OK
              <Route path='/category/:category' element={<ItemListContainer/>}/>   OK
              <Route path='/bag' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/> */}
              {/* <Route  path='*' element={<PagNotFound/>}/> */}
            </Routes>
            <Footer/>
       
      </BrowserRouter>
   </CartContextProvider>




   
  )
}

export default App
