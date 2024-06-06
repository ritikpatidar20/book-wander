import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyD_sBYlfdJ7lU2zMOlZJx1mKHeYodoENz8"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
    // Here you can add the logic to search for books using the API key
  }

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit} className="flex items-center relative">
        {" "}
        {/* Added relative positioning here */}
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full">
          <input
            type="search"
            id="default-search"
            value={book}
            onChange={handleChange}
            className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search For Books"
            required
          />
        </div>
        <div className="relative w-full mt-9 ml-2">
          <button
            type="submit"
            className="right-2 top-1/2 transform -translate-y-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
