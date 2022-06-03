import style from "styled-components";

const HeaderContainer = style.header`
  color: #333;
  border-bottom: 1px solid #ccc;
  margin: 0 16px;
`;
const HeaderTitle = style.h1`
  padding: 16px 0;
  margin: 0;
  font-size: 28px;
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderTitle>Portfolio</HeaderTitle>
    </HeaderContainer>
  );
}
