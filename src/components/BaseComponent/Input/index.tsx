export {};
import Box from "@/components/box";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

interface IStyleProps {
  isFocused: boolean;
  hasText: boolean;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #606060;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;
  font-size: 16px;
  height: 60px;
`;

const StyleLabel = styled.label<IStyleProps>`
  position: absolute;
  pointer-events: none;
  left: 15px;
  padding: 5px;
  top: ${({ isFocused, hasText }) => (isFocused || hasText ? "-11px" : "15px")};
  background: ${({ isFocused, hasText }) =>
    isFocused || hasText ? "#fff" : "10px"};
  font-size: ${({ isFocused, hasText }) =>
    isFocused || hasText ? "12px" : "16px"};
  color: ${({ isFocused }) => (isFocused ? "#007bff" : "#888")};
  transition: all 0.3s ease;
`;

function Input({ label }: Props): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box flexDirection={"column"} position={"relative"}>
      <StyleLabel isFocused={isFocused} hasText={!!text}>
        {label}
      </StyleLabel>
      <StyledInput
        type="text"
        required
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={text}
      ></StyledInput>
    </Box>
  );
}

export default Input;
