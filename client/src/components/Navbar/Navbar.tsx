import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Navbar.scss";

export const Navbar: React.FC = () => {
  const [isMenuOpenned, setIsMenuOpenned] = useState(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  useEffect(() => {
    if (isMenuOpenned) {
      document.body.classList.add("modal__visible");
    } else {
      document.body.classList.remove("modal__visible");
    }
  }, [isMenuOpenned]);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpened((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpened(false);
  }, [])

  const ref = useOutsideClick(closeDropdown);

  const toggleNavbar = useCallback(() => {
    setIsMenuOpenned((prev) => !prev);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar__toggler" onClick={toggleNavbar}>
        {isMenuOpenned ? (
          <img src="assets/img/menuClose.svg" alt="open" />
        ) : (
          <img src="assets/img/menuOpen.svg" alt="open" />
        )}
      </div>

      <div
        className={classNames("navbar__links", {
          "navbar__links--visible": isMenuOpenned,
        })}
      >
        <li className="navbar__link">
          <Link to="/" className="navbar__link--link" onClick={toggleNavbar}>
            Home
          </Link>
        </li>

        <li className="navbar__link">
          <Link to="/contact-us" className="navbar__link--link" onClick={toggleNavbar}>
            Contact us
          </Link>
        </li>

        <li className="navbar__link navbar__link--mobile">
          <div className="navbar__link--link" onClick={toggleNavbar}>
            <div className="navbar__dropdown--container">
              <div className="navbar__dropdown" onClick={toggleDropdown} ref={ref}>
                Legal
                <img
                  src="assets/img/dropdownArrow.svg"
                  alt="drop"
                  className={classNames("navbar__dropdown--arrow", {
                    "navbar__dropdown--arrow--is-opened": isDropdownOpened,
                  })}
                />
              </div>

              <div
                className={classNames("navbar__dropdown--list", {
                  "navbar__dropdown--list--visible": isDropdownOpened,
                })}
              >
                <Link
                  to="/privacy-policy"
                  className="navbar__dropdown--link"
                  onClick={closeDropdown}
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="navbar__dropdown--link"
                  onClick={closeDropdown}
                >
                  Terms Of Use
                </Link>
              </div>
            </div>
          </div>
        </li>

        <li className="navbar__link navbar__link--desktop">
          <Link
            to="/privacy-policy"
            className="navbar__link--link"
            onClick={toggleNavbar}
          >
            Privacy Policy
          </Link>
        </li>

        <li className="navbar__link navbar__link--desktop">
          <Link
            to="/terms"
            className="navbar__link--link"
            onClick={toggleNavbar}
          >
            Terms Of Use
          </Link>
        </li>

        <li className="navbar__link">
          <Link
            to="/about"
            className="navbar__link--link"
            onClick={toggleNavbar}
          >
            About
          </Link>
        </li>

        <li className="navbar__link">
          <Link to="/" className="navbar__link--link" onClick={toggleNavbar}>
            Buy a place
          </Link>
        </li>
      </div>

      {isMenuOpenned && <div className="navbar__grey-background" />}
    </div>
  );
};
