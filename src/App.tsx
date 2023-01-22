import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponents from './Components/FooterComponents';
import HeaderComponent from './Components/HeaderComponent';
import ConvexHull from './Pages/Algorithms/ConvexHull';
import Home from './Pages/Home';
import LogoHistory from './Pages/LogoHistory';
import PageNotFound from './Pages/PageNotFound';
import TOS from './Pages/TOS';

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> */}
            <Route path="Terms" element={<TOS />} />
            <Route path="LogoHistory" element={<LogoHistory />} />
            <Route path="Algorithms/ConvexHull" element={<ConvexHull />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponents />
    </>
  );
}

export default App;
