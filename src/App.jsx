import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import AboutUs from './containers/AboutUs/AboutUs';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs/>
    </div>
  );
};

export default App;
