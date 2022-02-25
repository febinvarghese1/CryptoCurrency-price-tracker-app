import React from "react";
import Coins from "./Coins";

const CoinList = ({ cryptoCurrency }) => {
  return (
    <div className="Coin-Main-container">
      {cryptoCurrency.map((currency) => (
        <Coins
          key={currency.id}
          name={currency.name}
          image={currency.image}
          symbol={currency.symbol}
          market = {currency.market_cap}
          price ={currency.current_price}
          priceChangePercentage={currency.price_change_percentage_24h}
         totalVolume ={currency.total_volume}
        />
      ))}
    </div>
  );
};

export default CoinList;
