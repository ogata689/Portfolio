import style from "styled-components";

const AboutContainer = style.section`
margin: 0 16px;
padding: 120px 0;
border-top: 1px solid #ccc;
border-bottom: 1px solid #ccc;
display: flex;
justify-content: center;
align-items: center;
`;
const AboutTitle = style.h3`
  text-align: center;
  font-size: 32px;
  padding-right: 60px;
`;
const AboutText = style.p`
  text-align: left;
  font-size: 20px;
  padding-left: 60px;
`;

export default function About(props) {
  return (
    <AboutContainer>
      <AboutTitle>
        <u>About</u>
      </AboutTitle>
      <AboutText>
        こちらはAboutです
        <br />
        Aboutが入る予定です
      </AboutText>
    </AboutContainer>
  );
}
