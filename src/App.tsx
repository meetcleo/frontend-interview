import React, { useState } from "react";
import { CurrencyCode } from "./types";
import { convert } from "./utils";
import styled from "styled-components";
import Input from "./components/Input";
import Button from './components/Button';

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const convertAmount = async () => {
    const result = await convert(
      fromCurrency as keyof CurrencyCode,
      toCurrency as keyof CurrencyCode,
      parseFloat(amount)
    );

    setConvertedAmount(result.toString());
  };

  return (
    <div>
      <StyledHeader>
        <p>Currency Converter</p>
      </StyledHeader>

      <ContentContainer>
        <ConverterContainer>
          <Input
            label="Amount"
            onChange={(value) => setAmount(value)}
            value={amount}
          />
          <Input
            label="From"
            onChange={(value) => setFromCurrency(value)}
            value={fromCurrency}
          />

          <Input
            label="To"
            onChange={(value) => setToCurrency(value)}
            value={toCurrency}
          />
          <br />
          <Button onClick={convertAmount}>Convert</Button>
          <span>{convertedAmount}</span>
        </ConverterContainer>
      </ContentContainer>
    </div>
  );
}

const StyledHeader = styled.header`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0815ff;
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConverterContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 400px;
  margin-top: -50px;
  background-color: white;
  padding: 36px 30px;
`;
export default App;
