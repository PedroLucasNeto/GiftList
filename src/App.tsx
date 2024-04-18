import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound";
import "rsuite/dist/rsuite.min.css";
import Home from "./Pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
