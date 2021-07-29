import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const convertAmount = async () => {
    console.log("Implement conversion here");
  };

  return (
    <div>
      <StyledHeader>
        <p>Currency Converter</p>
      </StyledHeader>

      <ContentContainer>
        <ConverterContainer>
          <input onChange={(e) => setAmount(e.target.value)} value={amount} />
          <input
            onChange={(e) => setFromCurrency(e.target.value)}
            value={fromCurrency}
          />
          <input
            onChange={(e) => setToCurrency(e.target.value)}
            value={amount}
          />

          <br />
          <button onClick={convertAmount}>Convert</button>
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
