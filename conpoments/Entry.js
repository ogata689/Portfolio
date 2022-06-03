import styled from "styled-components";

const EntryContainer = styled.section`
  margin: 16px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

const EntryTitle = styled.h2`
  border: 1px solid red;
`;

export default function Entry(props) {
  return (
    <EntryContainer>
      <h2>{props.entry.title}</h2>
      <figure>
        <img src={props.entry.image?.url} alt="" />
      </figure>
    </EntryContainer>
  );
}
