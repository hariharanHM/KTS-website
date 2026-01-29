import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KTSWorld from './pages/KTSWorld';
import MeetKTS from './pages/MeetKTS';
import WhatWeOffer from './pages/WhatWeOffer';
import InsideKTS from './pages/InsideKTS';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kts-world" element={<KTSWorld />} />
            <Route path="/meet-kts" element={<MeetKTS />} />
            <Route path="/what-we-offer" element={<WhatWeOffer />} />
            <Route path="/inside-kts" element={<InsideKTS />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
