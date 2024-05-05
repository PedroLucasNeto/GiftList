import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound";
import "rsuite/dist/rsuite.min.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer closeButton autoClose={3000} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home/*" element={<Home />} />
            <Route path="notFound" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
