import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-blue-500 p-5">
      <p className="font-bold text-white"></p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        HOME
      </Link>
      <Link
        href="/todos"
        className="ml-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        TODOS
      </Link>
      <Link
        href="/search"
        className="ml-2 px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        SEARCH
      </Link>
    </header>
  );
}

export default Header;
