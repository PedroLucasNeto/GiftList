import { Routes, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Services from '../components/Services';
import Cta from '../components/Cta';

const Home = () => {
  return (
    <>
      <Services />
      <Cta />
    </>
  );
};

export default Home;
