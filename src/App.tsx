import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <input
        type="search"
        name="search"
        onChange={function (e) {
          return setSearch(e.target.value);
        }}
        placeholder="Search"
      />
      <h1>List of Name</h1>
      {data
        .filter((_) => new RegExp(search, "gi").test(_))
        .map((dat: string) => (
          <p>{dat}</p>
        ))}
    </>
  );
}

export default App;
