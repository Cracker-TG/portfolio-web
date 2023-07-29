import styled from "styled-components";

interface IProps {
  text: string;
}

const Styled = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

function Typography({ text }: IProps): JSX.Element {
  return <Styled>{text}</Styled>;
}

export default Typography;
