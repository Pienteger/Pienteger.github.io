import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlackCircle from './Components/BlackCircle';
import FooterComponents from './Components/FooterComponents';
import HeaderComponent from './Components/HeaderComponent';
import ConvexHull from './Pages/Algorithms/ConvexHull';
import ContactPage from './Pages/ContactPage';
import Copyrights from './Pages/Copyrights';
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
            <Route path="Copyrights" element={<Copyrights />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponents />
      <BlackCircle />
    </>
  );
}

export default App;
