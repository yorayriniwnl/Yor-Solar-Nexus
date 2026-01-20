import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Welcome from "../pages/Welcome";
import Feasibility from "../pages/Feasibility";
import Result from "../pages/Result";
import Login from "../pages/Login";
import FAQs from "../pages/FAQs";
import HowToUse from "../pages/HowToUse";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/feasibility" element={<Feasibility />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/how-to-use" element={<HowToUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
