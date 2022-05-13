import styled from "styled-components";

const EntryContainer = styled.section`
  border: 1px solid red;
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
