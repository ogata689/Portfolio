import styled from "styled-components";

const EntryImage = styled.figure`
  & img {
    width: 300px;
    border: 4px solid #fff;
  }
`;

export default function Entry(props) {
  return (
    <EntryImage>
      <img src={props.entry.subimage?.url} alt="" />
    </EntryImage>
  );
}
