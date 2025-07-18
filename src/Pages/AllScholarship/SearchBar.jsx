import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSubmit, searchText }) => {
  return (
    <div className="w-full flex justify-center mb-10">
      <form onSubmit={handleSubmit} className="join w-full max-w-xl shadow-md">
        <input
          type="text"
          name="search"
          defaultValue={searchText}
          placeholder="Search for scholarships, universities..."
          className="input input-bordered join-item w-full px-4 py-2 focus:outline-none"
        />
        <button type="submit" className="btn btn-neutral join-item  px-6">
          <FaSearch className="text-lg" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
