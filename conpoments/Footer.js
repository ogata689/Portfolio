import style from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const FooterContainer = style.footer`
  color: #fff;
  height: 325px;
  background: url(images/foot-bg.png);
  background-size: 100% 100%;
  padding-top: 100px;
`;

const Copy = style.p`
  padding: 16px;
  margin: 0;
  font-size: 14px;
  text-align: center;
`;
const Footeritems = style.section`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const SiteLogos = style.section`
display: flex;
flex-direction: row-reverse;
  & h2 {
    font-size: 24px;
  }
  & img {
    height: 48px;
    margin-right: 12px;
  }
`;
const Ent = style.span`
  display: block;
`;
const SiteMaps = style.section`
font-weight: 300;
width: 400px;

  & h2 {
    font-size: 20px;
    border-bottom: 2px solid #fff;
    margin-bottom: 6px;
  }
  & li {
    line-height: 24px;
    cursor: pointer;
  }
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <Footeritems>
        <SiteLogos>
          <h2>
            PORTFOLIO for<Ent>OGATA NAO</Ent>
          </h2>
          <figure>
            <img src="images/logo.png" />
          </figure>
        </SiteLogos>
        <SiteMaps>
          <h2>SITE MAP</h2>
          <gnav>
            <ul>
              <Link
                activeClass="active"
                to="introduction"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>HOME</li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>ABOUT</li>
              </Link>
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>WORKs</li>
              </Link>
              <Link
                activeClass="active"
                to="profile"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>PROFILE</li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>CONTACT</li>
              </Link>
            </ul>
          </gnav>
        </SiteMaps>
      </Footeritems>
      <Copy>&copy; ogata</Copy>
    </FooterContainer>
  );
}
