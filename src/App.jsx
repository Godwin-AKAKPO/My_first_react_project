import './App.css';
import './index.css';

import Home from "./components/Home";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Product";
import Blog from "./components/Blog"; 
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';




function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
    </>
  )
}

export default App;

