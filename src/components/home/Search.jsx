import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(input.length > 2) {
      const formatInput = input.replace(/\s/g,'+')
      history.push(`/weather/${formatInput}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input
        type="text"
        className="search__input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search here"
      />
      <button type="submit" className="search__btn">
        <IoIosSearch />
      </button>
    </form>
  );
};

export default Search;
