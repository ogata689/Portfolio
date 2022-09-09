import style from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderContainer = style.header`
  color: #fff;
  text-shadow: 1.5px 1.5px 0 #516494;
  max-width: 1200px;
  margin: 40px;
  position: fixed;
  right: 0;
  z-index: 1;
`;

const NavigationContainer = style.ul`
  width: 400px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <li>
          <Link
            activeClass="active"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            WORKs
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            PROFILE
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </NavigationContainer>
    </HeaderContainer>
  );
}
