import style from "styled-components";

const Introductions = style.article`
  color: #ffffff;
  height: 61vw;
  background: url(/images/header.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding: 100px 50px 200px 50px;
  margin-top: 4.3vw;
`;

const IntroductionTitle = style.h1`
 display: none;
`;

export default function Introduction(props) {
  return (
    <Introductions id="introduction">
      <section>
        <IntroductionTitle>Welcome to my Portfolio</IntroductionTitle>
      </section>
    </Introductions>
  );
}
