import style from "styled-components";

const AboutContainer = style.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 50px;
  & figure {
    max-width: 300px;
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
  width: 400px;
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
`;

export default function About(props) {
  return (
    <AboutContainer id="about">
      <div>
        <AboutTitle>ABOUT</AboutTitle>
        <AboutText>
          こちらはAboutです
          <br />
          Aboutが入る予定です
        </AboutText>
      </div>
      <figure>
        <img src="/images/about-img.png" />
      </figure>
    </AboutContainer>
  );
}
