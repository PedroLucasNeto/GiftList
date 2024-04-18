// import Contact from "./Home/components/Contact/Contact";
import Countdown from "./Home/components/Countdown/Countdown";
import { HomeBanner } from "./Home/components/HomeBanner/HomeBanner";
import OurStory from "./Home/components/OurStory.tsx/OurStory";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-600">
        <HomeBanner />
        <Countdown />
        <OurStory />
        {/* <Contact /> */}
      </div>
    </>
  );
};

export default Home;
