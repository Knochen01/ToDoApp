"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SearchComponent() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        id="search"
        name="search"
        value={search}
        placeholder="Enter the SearchTerm"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="btn bg-blue-500 py-2 px-4 m-2 rounded-lg text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchComponent;
