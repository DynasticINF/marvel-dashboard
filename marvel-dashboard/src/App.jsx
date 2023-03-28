import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.data.results.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(list.data.results);
    }
  };

  useEffect(() => {
    const fetchMarvelCharacters = async () => {
      const response = await fetch(
        "https://gateway.marvel.com/v1/public/characters?apikey=" + API_KEY
      );
      const json = await response.json();
      setList(json);
    };
    fetchMarvelCharacters().catch(console.error);
  }, []);

  console.log(list.data.results);
  return (
    <div className="App">
      <h1>Marvel Dash!</h1>
      <p>List of Marvel Characters</p>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      {searchInput.length > 0
        ? filteredResults.map((item, index) => <li key={index}>{item.name}</li>)
        : list &&
          list.data.results.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
    </div>
  );
}

export default App;
