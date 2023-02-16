import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlackCircle from "./Components/BlackCircle";
import FooterComponents from "./Components/FooterComponents";
import HeaderComponent from "./Components/HeaderComponent";
import ConvexHull from "./Pages/Algorithms/ConvexHull";
import CareerPage from "./Pages/CareersPage";
import ContactPage from "./Pages/ContactPage";
import Copyrights from "./Pages/Copyrights";
import Home from "./Pages/Home";
import LogoHistory from "./Pages/LogoHistory";
import PageNotFound from "./Pages/PageNotFound";
import Solutions from "./Pages/Solutions";
import Consultancy from "./Pages/Solutions/Consultancy";
import Infrastructure from "./Pages/Solutions/Infrastructure";
import SoftwareDevelopment from "./Pages/Solutions/SoftwareDevelopment";
import TOS from "./Pages/TOS";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container min-vh-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="register" element={<Register />} /> */}
            <Route path="Terms" element={<TOS />} />
            <Route path="LogoHistory" element={<LogoHistory />} />
            <Route path="Algorithms/ConvexHull" element={<ConvexHull />} />
            <Route path="Copyrights" element={<Copyrights />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="Careers" element={<CareerPage />} />
            <Route path="Solutions" element={<Solutions />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/solutions/consultancy" element={<Consultancy />} />
            <Route
              path="/solutions/software-development"
              element={<SoftwareDevelopment />}
            />
            <Route
              path="/solutions/infrastructure"
              element={<Infrastructure />}
            />
          </Routes>
        </BrowserRouter>
      </div>
      <FooterComponents />
      <BlackCircle />
    </>
  );
}

export default App;
