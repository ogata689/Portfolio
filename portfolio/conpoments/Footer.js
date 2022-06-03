import style from "styled-components";

const FooterContainer = style.footer`
  color: #fff;
  background-color: #333;
`;

const Copy = style.p`
  padding: 16px;
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

export default function Footer(props) {
  return (
    <FooterContainer>
      <Copy>&copy; ogata</Copy>
    </FooterContainer>
  );
}
