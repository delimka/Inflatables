import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import AboutUs from './containers/AboutUs/AboutUs';
import Products from './containers/Products/Products';
const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs/>
      <Products/>
    </div>
  );
};

export default App;
