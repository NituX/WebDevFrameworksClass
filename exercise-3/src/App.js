import './App.css';
import data from './data.json'
import React, {useState} from "react";
import SearchView from './components/SearchView.js';
import {FaSearch} from "react-icons/fa";
export default function App() {


  const [items] = useState(data.items);
  const [searchString, setSearchString] = useState("");

  return (
    <div className="App">
      <div className = "SearchContainer">
        Search <input type="text" onChange={ (event) => setSearchString(event.target.value)} />
        <FaSearch style={{backgroundColor: "orange", width: "20px", height: "20px", padding: "5px", color: "black", borderRadius: "4px"}}/>
      </div>
      <SearchView
      items={items.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()))} 
      />

    </div>
  );
}