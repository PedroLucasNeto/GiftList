import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import NavBarContent from "./components/NavBarContent";
import "rsuite/dist/rsuite.min.css";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { SpecificService } from "./Pages/SpecificService";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarContent />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services/*" element={<SpecificService />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
