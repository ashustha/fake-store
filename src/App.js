import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Categories from './components/Categories/Categories';
import ProductsByCategory from './pages/ProductsByCategory';
import Cart from './pages/Cart';


  
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles/>
        <Navbar />
        <Categories />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productDetail/:productId' element={<ProductDetail />} />
          <Route path='/products-by-category/:category' element={<ProductsByCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div> 
    </ThemeProvider>
  );
}

export default App;

