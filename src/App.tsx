import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Contact } from './components/Contact';
import ServiceDetails from './components/ServiceDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='notFound' element={<NotFound />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<ServiceDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
