import Navbar from "../Navbar";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <a href="/" className="header__logo logo">
        top99CAs
      </a>

      <Navbar />
    </div>
  );
};
