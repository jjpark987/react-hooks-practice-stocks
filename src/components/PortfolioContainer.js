import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, onSetMyStocks }) {
  function handleClick(stockToRemove) {
    onSetMyStocks(myStocks.filter(stock => stock.id !== stockToRemove.id));
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocks.map(stock => 
        <Stock 
        key={stock.id} 
        stock={stock} 
        onHandleClick={handleClick}
      />)}
    </div>
  );
}

export default PortfolioContainer;
