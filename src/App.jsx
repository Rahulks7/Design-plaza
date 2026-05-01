import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./home/Home"));
const HomeInterior = lazy(() => import("./home interior/HomeInterior"));
const OfficeInterior = lazy(() => import("./office interior/OfficeInterior"));
const Location = lazy(() => import("./location/Location"));
const ContactUs = lazy(() => import("./contact us/ContactUs"));
const Shopping = lazy(() => import("./components/shopping"));
const Design = lazy(() => import("./components/Design"));

function App() {
  return (
    <div>
      <SmoothScroll>
        <Navbar />
        <ScrollToTop />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-interior" element={<HomeInterior />} />
            <Route path="/office-interior" element={<OfficeInterior />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </Suspense>

      </SmoothScroll>
    </div>
  );
}

export default App;