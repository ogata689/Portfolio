import style from "styled-components";

const ProfileContainer = style.article`
  max-width: 1100px;
  margin: 120px auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-family: "Noto Sans JP", sans-serif;

  $ p {
    max-width: 500px;
    width: 50%;
  }

  & img {
    max-width: 500px;
    width: 100%;
  }
`;
const ProfileTitle = style.h2`
  font-size: 40px;
  font-weight: 200;
  width: 200px;
  padding-right: 40px;
  height: 90px;
  text-align:center;
  background: url(/images/profile-bg.png);
  background-repeat: no-repeat;
  background-position: right;
`;
const ProfileTitleJp = style.span`
  display: block;
  font-size: 18px;
  font-weight: 400;
`;
const Status = style.section`
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const ImgContainer = style.p`
margin-right: 30px;
`;

const ProfileContants = style.section`
  line-height: 24px;
  padding-top: 8px;
  display: flex;
 & h3 {
  width: 140px;
 }
 & p {
  width: 100%;
 }
`;

export default function Profile(props) {
  return (
    <ProfileContainer id="profile">
      <Status>
        <ProfileTitle>
          PROFILE<ProfileTitleJp>プロフィール</ProfileTitleJp>
        </ProfileTitle>
        <ProfileContants>
          <h3>名前</h3>
          <p>尾形　直朗</p>
        </ProfileContants>
        <ProfileContants>
          <h3>所在地</h3>
          <p>千葉県　船橋市</p>
        </ProfileContants>
        <ProfileContants>
          <h3>お問い合わせ</h3>
          <p>mgtnao5230@gmail.com</p>
        </ProfileContants>
        <ProfileContants>
          <h3>勉強したこと</h3>
          <p>
            HTML、css、php、Java
            Script等の基礎言語は一通り勉強し、JQueriやWordpress、Next.jsはある程度活用できるようになりました。デザイン方面では、AdobeのPhotoshopやIllustrator、XDやAfterEfectを津会うことができ、それらを活用してWebデザインやバナー、ポスターのデザインなんかにも取り組みました。
          </p>
        </ProfileContants>
      </Status>
      <ImgContainer>
        <img src="/images/profile-pic.png" />
      </ImgContainer>
    </ProfileContainer>
  );
}
