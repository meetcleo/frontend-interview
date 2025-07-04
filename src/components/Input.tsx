import React from 'react';
import styled from 'styled-components';
import { palette } from '../styles';

type InputProps = {
  label?: string;
  onChange: (val: string) => void;
  value?: string;
};

const Input: React.FC<InputProps> = ({ label, onChange, value }) => {
  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput onChange={(e) => onChange(e.target.value)} value={value} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${palette.brown};
  font-weight: 600;
  margin: 12px 0 8px;
`;

const StyledInput = styled.input`
  padding: 16px 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export default Input;
