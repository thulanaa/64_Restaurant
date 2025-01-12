// src/App.js
import React from 'react';
import AppRoutes from './routes'; // Ensure this file exists and properly exports routes
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
