import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CoinList from "./components/CoinList";
import logo from "./assets/logo.png"

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState([]);
  const [inputText, setInputText] = useState("");
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params: {
      vs_currency: "inr",
      page: "1",
      per_page: "50",
      order: "market_cap_desc",
    },
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setCryptoCurrency(response.data);
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => fetchData(), []);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const filterCurrency = cryptoCurrency.filter(currency => currency.name.toLowerCase().includes(inputText.toLowerCase()));



  return (
    <div className="Main-container">
      <div className="logo-container">
      <img src={logo} className="logo" alt="Logo"/><h1 className="title">CryptoCurrency</h1>
      </div>
      <div className="search-box-container">
        <label>Search for currency</label>
        <input type="text" value={inputText} onChange={inputTextHandler} />
      </div>
      <div className="Wrapper">
        <CoinList cryptoCurrency={filterCurrency} />
      </div>
    </div>
  );
}

export default App;
