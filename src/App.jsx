import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
