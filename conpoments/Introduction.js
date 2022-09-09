import style from "styled-components";

const Introductions = style.article`
  color: #ffffff;
  background: url(/images/head-bg.png);
  background-size: auto 100%;
  background-repeat: no-repeat;
  padding: 100px 50px 200px 50px;
`;
const IntroductionContainer = style.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: end;
  max-width: 1000px;
  margin: 0 auto;

  & img {
    max-width: 350px;
  }
`;
const IntroductionImage = style.img`
  max-width: 350px;
`;
const IntroductionTitle = style.h1`
  padding: 16px 32px 0 32px;
  text-align: right;
  font-size: 32px;
  font-weight: 300;
`;
const IntroductionText = style.p`
  padding: 0 16px 16px 16px;
  border-right: 4px solid #fff;
  border-bottom: 4px solid #fff;
  text-align: right;
  font-size: 16px;
`;

export default function Introduction(props) {
  return (
    <Introductions id="introduction">
      <IntroductionContainer>
        <div>
          <IntroductionTitle>Welcome to my Portfolio</IntroductionTitle>
          <IntroductionText>
            ようこそ、私のポートフォリオへ。
            <br />
            あなたを歓迎します。
          </IntroductionText>
        </div>
        <p>
          <img src="/images/head.png" />
        </p>
      </IntroductionContainer>
    </Introductions>
  );
}
