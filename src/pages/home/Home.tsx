import "./Home.scss";
import HomeInfo from "./components/HomeInfo";

import HomeTexts from "../../utils/HomeTexts";

const Home = () => {
  const title = HomeTexts.homeInfoTitle;
  const content = HomeTexts.homeInfoContent;
  const imgLink = HomeTexts.imgLink;
  const imgAlt = HomeTexts.imgAlt;

  return (
    <div className="home-container">
      <HomeInfo
        title={title}
        content={content}
        imgLink={imgLink}
        imgAlt={imgAlt}
      />
    </div>
  );
};

export default Home;
