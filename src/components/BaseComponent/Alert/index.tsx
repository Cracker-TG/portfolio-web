import {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  Ref,
} from "react";
import { ErrorAlert, WarningAlert, InfoAlert, SuccessAlert } from "./styled";
import { Icon } from "@iconify/react";
import styled from "styled-components";

interface AlertProps {
  type: "error" | "warning" | "info" | "success";
  message: string;
  autoCloseMs?: number; // Optional auto-close duration in milliseconds
}

export interface IAlertHandle {
  open: () => void;
}

const StyledCloseButton = styled.button`
  background: transparent;
  border: none;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

function Alert(
  { type, message, autoCloseMs }: AlertProps,
  ref: Ref<IAlertHandle>
) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
  }));

  useEffect(() => {
    if (autoCloseMs && isOpen) {
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, autoCloseMs);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const AlertComponent =
    type === "error"
      ? ErrorAlert
      : type === "warning"
      ? WarningAlert
      : type === "info"
      ? InfoAlert
      : SuccessAlert;

  return (
    isOpen && (
      <AlertComponent>
        <div>{message}</div>
        <StyledCloseButton onClick={handleClose}>
          <Icon icon="material-symbols:close" />
        </StyledCloseButton>
      </AlertComponent>
    )
  );
}

export default forwardRef(Alert);
