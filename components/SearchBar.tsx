"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
