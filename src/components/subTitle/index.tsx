import styled from "styled-components";

type Props = {
  text: string;
  children?: JSX.Element | JSX.Element[];
};

function SubTitle({ text }: Props): JSX.Element {
  const StyleTitle = styled.div`
    font-size: 1rem;
  `;

  return <StyleTitle>{text}</StyleTitle>;
}

export default SubTitle;
