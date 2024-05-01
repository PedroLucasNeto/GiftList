import { BackToTop } from '../components/BackToTop';
import Contact from './Home/components/Contact/Contact';
import Countdown from './Home/components/Countdown/Countdown';
import Gallery from './Home/components/Gallery/Gallery';
import GiftList from './Home/components/Gifts/GiftList';
import { HomeBanner } from './Home/components/HomeBanner/HomeBanner';
import OurStory from './Home/components/OurStory.tsx/OurStory';
import Welcome from './Home/components/Welcome/Welcome';

const Home = () => {
  return (
    <>
      <div className='min-h-screen'>
        <HomeBanner />
        <Countdown />
        <Welcome />
        <OurStory />
        <Gallery />
        <GiftList />
        <Contact />
        <BackToTop />
      </div>
    </>
  );
};

export default Home;
