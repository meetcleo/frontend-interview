import React, { useState } from "react";
import axios from "axios";
import { ConvertResponse } from "./types";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const convertAmount = async () => {
    const result = await axios.get<ConvertResponse>(
      "http://localhost:3002/convert", {
        params: {
          from: fromCurrency,
          to: toCurrency,
          amount
        }
      }
    );

    result && setConvertedAmount(result.data.convertedAmount.toString());
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

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
        <button onClick={swap}>Swap</button>
        <span>{convertedAmount}</span>
      </div>
    </div>
  );
}

export default App;
