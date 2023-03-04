import React from "react";
import Stock from "./Stock";

function StockContainer({ allStocks, myStocks, onSetMyStocks }) {
  function handleClick(stock) {
    myStocks.indexOf(stock) === -1 ? onSetMyStocks([...myStocks, stock]) : onSetMyStocks([...myStocks]);
  }

  return (
    <div>
      <h2>Stocks</h2>
      {allStocks.map(stock => 
        <Stock 
        key={stock.id} 
        stock={stock} 
        myStocks={myStocks} 
        onSetMyStocks={onSetMyStocks} 
        onHandleClick={handleClick}
      />)}
    </div>
  );
}

export default StockContainer;
