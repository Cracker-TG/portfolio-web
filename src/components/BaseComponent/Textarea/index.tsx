import { ChangeEvent, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

interface IProps {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  required?: boolean;
}

interface IStyleProps {
  isFocused: boolean;
  hasText: boolean;
}

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #606060;
  border-radius: 10px;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  font-size: 16px;
  resize: vertical; /* Allow vertical resizing of the textarea */
`;

const InputLabel = styled.label<IStyleProps>`
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

const Textarea = ({ label, name, required, register }: IProps): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  const handleTextareaFocus = () => {
    setIsFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsFocused(false);
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <InputContainer>
      <StyledTextarea
        {...register(name, { onChange: handleTextareaChange, required })}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
        value={text}
        rows={6}
      />
      <InputLabel isFocused={isFocused} hasText={!!text}>
        {label}
      </InputLabel>
    </InputContainer>
  );
};

export default Textarea;
