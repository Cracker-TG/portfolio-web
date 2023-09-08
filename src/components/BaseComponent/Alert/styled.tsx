// AlertStyles.ts
import styled from "styled-components";

export const AlertContainer = styled.div`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 100px;

  &.closed {
    opacity: 0;
    max-height: 0;
  }
`;

export const ErrorAlert = styled(AlertContainer)`
  background-color: #ff6b6b;
  color: white;
`;

export const WarningAlert = styled(AlertContainer)`
  background-color: #ffd166;
  color: #333;
`;

export const InfoAlert = styled(AlertContainer)`
  background-color: #7fdbda;
  color: #333;
`;

export const SuccessAlert = styled(AlertContainer)`
  background-color: #7fff72;
  color: #333;
`;
