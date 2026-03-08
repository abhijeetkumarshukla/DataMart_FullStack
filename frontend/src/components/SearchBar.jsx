import { useState } from "react";

const SearchBar = ({ onSearch }) => {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        items-center
        bg-white
        border
        border-gray-200
        rounded-lg
        shadow-sm
        px-3
        py-2
      "
    >

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          flex-1
          outline-none
          text-sm
          text-gray-700
        "
      />

      <button
        type="submit"
        className="
          bg-blue-600
          text-white
          px-4
          py-1.5
          rounded-md
          text-sm
          hover:bg-blue-700
          transition
        "
      >
        Search
      </button>

    </form>
  );
};

export default SearchBar;