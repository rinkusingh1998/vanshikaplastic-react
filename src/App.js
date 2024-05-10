
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header';
import './pages/style.css';
import './pages/responsive.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Chalkmakingmachine from './pages/Chalkmakingmachine';
import Allcategories from './pages/Allcategories';
import Termsconditions from './pages/Termsconditions';
import Privacypolicy from './pages/Privacypolicy';
import Refundcancellation from './pages/Refundcancellation';
import ScrollToTop from './components/Scrolltop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Chalkmakingmold from './pages/Chalkmakingmold';
import Productsdetails from './pages/Productsdetails';
import Checkout from './pages/Checkout';


function App() {
 
  return (
    <>
  
  <BrowserRouter>
  <Header/>
  <ScrollToTop/>
  <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/About' Component={Aboutus}/>
    <Route path='/Contact' Component={Contactus}/>
    <Route path='/Chalk-Making-Machine' Component={Chalkmakingmachine}/>
    <Route path='/Chalk-Making-Mold' Component={Chalkmakingmold}/>
    <Route path='/All-Categories' Component={Allcategories}/>
    <Route path='/Terms-Conditions' Component={Termsconditions}/>
    <Route path='/Privacy-Policy' Component={Privacypolicy}/>
    <Route path='/Refund-Cancellation' Component={Refundcancellation}/>
    <Route path='/Cart' Component={Cart}/>
    <Route path='/Login' Component={Login}/>
    <Route path='/Cart/Checkout' Component={Checkout}/>
    <Route path='/Chalk-Making-Machine/Productsdetails' Component={Productsdetails}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
    </>
  );
}

export default App;
