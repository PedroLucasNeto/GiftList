import "./App.scss";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
