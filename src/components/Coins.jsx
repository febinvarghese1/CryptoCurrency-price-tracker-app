import React from "react";

const Coins = ({
  name,
  image,
  symbol,
  market,
  price,
  priceChangePercentage,
  totalVolume,
}) => {
  return (
    <div className="Coin-container">
      <div className="Coin-wrapper">
        <img src={image} alt="Crypto" />
        <h2>{name}</h2>
        <span>{symbol}</span>
        <p>₹{price}</p>
        <span>₹{totalVolume.toLocaleString()}</span>
        {priceChangePercentage < 0 ? (
          <h3 style={{ color: "red" }}>
            {priceChangePercentage.toPrecision(2)}%
          </h3>
        ) : (
          <h3 style={{ color: "green" }}>
            {priceChangePercentage.toPrecision(2)}%
          </h3>
        )}
        <h3>Mkt Cap: ₹{market.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default Coins;
