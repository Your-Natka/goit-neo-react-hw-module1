import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(query);

    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />

      <button type="submit">Search</button>
    </form>
  );
}
