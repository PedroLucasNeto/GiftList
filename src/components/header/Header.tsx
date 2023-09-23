import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-logo">C G R H</h1>
      <ul className="header-items">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about-us">Sobre nós</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
