import Services from "../components/Services";
import Cta from "../components/Cta";
import MainContent from "../components/MainContent";
import { Address } from "../components/Address";

const Home = () => {
  return (
    <>
      <article>
        <Cta />
        <Services />
        <MainContent />
        <Address />
      </article>
    </>
  );
};

export default Home;
