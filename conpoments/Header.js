import style from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderContainer = style.header`
  color:#fef9e9;
  font-size: 18px;
  width: 100%;
  height: 130px;
  background: url(/images/nav_bg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const NavigationContainer = style.ul`
  position: fixed;
  transform: rotate(3deg);
  right: 3vw;
  top: 3vw;
  display: flex;
  cursor: pointer;
  justify-content: space-between;

   & li{
    width: 100px;
    text-align: center;
    margin: 0 20px;
    border-bottom: 3px solid #fef9e9;
   }
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
