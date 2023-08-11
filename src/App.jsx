import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import AboutUs from './containers/AboutUs/AboutUs';
import Products from './containers/Products/Products';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs/>
      <Products/>
      <Footer/>
      </>
  );
};

export default App;
