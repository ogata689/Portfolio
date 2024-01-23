import style from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const LinkContainer = style.section`
position: fixed;
right: 0;
bottom: 0;

& img {
  height: 20vh;
  cursor: pointer;
}
`;

export default function GoTop(props) {
  return (
    <LinkContainer>
      <Link
        activeClass="active"
        to="introduction"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src="../images/gotop.png" alt="" />
      </Link>
    </LinkContainer>
  );
}
