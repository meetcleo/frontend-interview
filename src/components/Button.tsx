import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #0815ff;
  padding: 12px 8px;
  width: 100%;
  border-radius: 4px;
  border: 0;
  color: white;
  font-weight: 500;
`;

export default Button;
