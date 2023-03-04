import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [sortBy, setSortBy] = useState(undefined);
  const [filterBy, setFilterBy] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(d => setAllStocks(d));
  }, []);

  useEffect(() => {
    if(sortBy === "Alphabetically") {
      setAllStocks([...allStocks].sort((a, b) => a.name.localeCompare(b.name)));
    }
    if(sortBy === "Price") {
      setAllStocks([...allStocks].sort((a, b) => a.price - b.price));
    }
  }, [sortBy]);
  
  let filteredStocks = allStocks;

  if(filterBy) {
    filteredStocks = allStocks.filter(stock => stock.type === filterBy)
  }

  return (
    <div>
      <SearchBar sortBy={sortBy} onSetSortBy={setSortBy} filterBy={filterBy} onSetFilterBy={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks={filteredStocks} myStocks={myStocks} onSetMyStocks={setMyStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} onSetMyStocks={setMyStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
