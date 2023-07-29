import styled from "styled-components";

type Props = {
  text: string;
  children?: JSX.Element | JSX.Element[];
};

const StyleTitle = styled.div`
  font-size: 1rem;
`;

function SubTitle({ text }: Props): JSX.Element {
  return <StyleTitle>{text}</StyleTitle>;
}

export default SubTitle;
