import style from "styled-components";

const ServiceContainer = style.section`
  padding-top: 120px;
`;
const ServiceTitle = style.h3`
  margin: 0 16px;
  text-align: center;
  font-size: 32px;
`;
const ServiceText = style.p`
  margin: 0 16px;
  text-align: center;
  font-size: 20px;
`;
const ServiceOverview = style.section`
  display: flex;
  padding: 36px 0 120px 0;
`;
const ServiceDetails = style.article`
  margin: 0 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  padding: 24px 0;
`;

export default function Service(props) {
  return (
    <ServiceContainer>
      <ServiceTitle>Service</ServiceTitle>
      <ServiceText>こちらはServiceです。Serviceが入る予定です。</ServiceText>
      <ServiceOverview>
        <ServiceDetails>
          <h3>サービス詳細</h3>
          <p>サービス詳細です。</p>
        </ServiceDetails>
        <ServiceDetails>
          <h3>サービス詳細</h3>
          <p>サービス詳細です。</p>
        </ServiceDetails>
        <ServiceDetails>
          <h3>サービス詳細</h3>
          <p>サービス詳細です。</p>
        </ServiceDetails>
      </ServiceOverview>
    </ServiceContainer>
  );
}
