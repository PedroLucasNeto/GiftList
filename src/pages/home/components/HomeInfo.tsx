import "../Home.scss";

interface HomeInfoProps {
  title: string;
  content: string;
  imgLink: string;
  imgAlt: string;
}
const HomeInfo = ({ title, content, imgLink, imgAlt }: HomeInfoProps) => {
  return (
    <div className="home-info">
      <img src={imgLink} alt={imgAlt} />
      <div className="home-titles">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HomeInfo;
