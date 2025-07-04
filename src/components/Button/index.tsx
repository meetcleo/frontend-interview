import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styles';

type Props = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
};

const Button: React.FC<Props> = ({ label, onClick, isDisabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${palette.brown};
  padding: 12px 8px;
  width: 100%;
  border-radius: 4px;
  border: 0;
  color: white;
  font-weight: 500;
`;

export default Button;
