import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Movie Here !!</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
