import headerPlane from "./headerPlane.png";
import "./header.css";
const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img className="header-logo" src={headerPlane} alt="header-plane" />
      <div className="header-info">Поиск авиабилетов</div>
    </div>
  );
};

export default Header;
