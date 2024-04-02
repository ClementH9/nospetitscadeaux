import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Indices from './pages/indices/indices';
import Cadeau from './pages/cadeau/cadeau';
import App from './App.js'
import Footer from './components/footer/footer';
import './assets/css/App.css';

ReactDOM.render(
  <Router>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/cadeau" element={<Cadeau />} />
      </Routes>
    </main>
    <Footer />
  </Router>,
  document.getElementById('root')
);
