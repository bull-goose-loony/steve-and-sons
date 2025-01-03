// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer'
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Hero/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
