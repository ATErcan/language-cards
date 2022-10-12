import "./Header.scss";
import reactImg from "../../assets/react.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={reactImg} alt="React" className="header-img" />
    </header>
  );
};

export default Header;
