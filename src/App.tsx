import React, { useState } from "react";
import { CurrencyCode } from "./types";
import { convert } from "./utils";

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
    <div className="App">
      <header className="App-header">
        <p>Cleo FE Pairing</p>
      </header>

      <div>
        <label htmlFor="from">From</label>&nbsp;{" "}
        <input
          type="text"
          onChange={(e) => setFromCurrency(e.target.value)}
          value={fromCurrency}
        />
        <br />
        <label htmlFor="to">To</label>&nbsp;{" "}
        <input
          type="text"
          onChange={(e) => setToCurrency(e.target.value)}
          value={toCurrency}
        />
        <br />
        <label htmlFor="amount">Amount</label>&nbsp;{" "}
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <br />
        <br />
        <button onClick={convertAmount}>Convert</button>
        <span>{convertedAmount}</span>
      </div>
    </div>
  );
}

export default App;
