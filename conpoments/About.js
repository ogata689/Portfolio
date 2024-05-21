import style from "styled-components";

const AboutContainer = style.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 200px 150px 200px 50px;
  background: url(/images/about_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;

  & figure {
    max-width: 500px;
    margin-right: 50px;
  }

  & img {
    max-width: 100%;
  }


`;
const AboutTitle = style.h2`
  max-width: 300px;
  font-size: 32px;
  font-family: 'Josefin Sans', sans-serif;
  font-style: italic;
`;
const AboutText = style.p`
padding-top: 10px;
  width: 400px;
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
`;

export default function About(props) {
  return (
    <AboutContainer id="about">
      <div>
        <AboutTitle>
          Welcome
          <br />
          To My
          <br />
          Portfolio
        </AboutTitle>
        <AboutText>
          こちらのWebサイトには私が今まで制作した様々な
          <br />
          Webサイトのデザインやバナー、 ポスター等の
          <br />
          広告デザインを掲載しております。
        </AboutText>
      </div>
      <figure>
        <img src="/images/about_img.png" />
      </figure>
    </AboutContainer>
  );
}
