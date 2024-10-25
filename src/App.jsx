import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import GlobalStyles from './GlobalStyles'; // Import the global styles
import HowToStart from './pages/howToStart';
import FeaturesPage from './pages/features';
import GetInvolved from './pages/getInvolved';
import Contact from './pages/contact';
import Documentation from './pages/documentation';
import Login from './pages/login';

function App() {
  return (
    <Router> {/* Ensure the Router wraps your Routes */}
      <GlobalStyles />
      <div className="App">
        <Header />
        <Routes>
          {/* Home Route includes Features, About, HowItWorks */}
          <Route 
            path="/" 
            element={
              <>
                <Features />
                <About />
                <HowItWorks />
              </>
            } 
          />
          <Route path="/how-to-start" element={<HowToStart />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
