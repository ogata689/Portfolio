import style from "styled-components";

const IntroductionContainer = style.article`
padding: 240px 0;

`;
const IntroductionTitle = style.h2`
  text-align: center;
  font-size: 32px;
`;
const IntroductionText = style.p`
  text-align: center;
  font-size: 16px;
`;

export default function Introduction(props) {
  return (
    <IntroductionContainer>
      <IntroductionTitle>Welcome to my Portfolio</IntroductionTitle>
      <IntroductionText>
        ようこそ、私のポートフォリオへ。
        <br />
        あなたを歓迎します。
      </IntroductionText>
    </IntroductionContainer>
  );
}
