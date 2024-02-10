import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import Home from './Pages/Home.tsx';
import NoPage from './Pages/NoPage.tsx';
import Contact from './Pages/Contact.tsx';
import Tos from './Pages/Tos.tsx';
import Legal from './Pages/Legal.tsx';
import Career from './Pages/Career.tsx';
import About from './Pages/About.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='career' element={<Career />} />
          <Route path='terms' element={<Tos />} />
          <Route path='legal' element={<Legal />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
