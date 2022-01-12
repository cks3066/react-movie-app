import React from "react";
import "./App.css";

const App = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [coins, setCoins] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
