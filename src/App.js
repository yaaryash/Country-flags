import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
  };

  return (
    <div style={containerStyle}>
      {countries.map((item) => (
        <div key={item.cca3} style={cardStyle}>
          <img
            src={item.flags.png}
            alt={`Flag of ${item.name.common}`}
            style={{ width: "100px", height: "100px" }}
            width="100"
            height="100"
          />
          <h2>{item.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
