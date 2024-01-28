import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsPlusCircleFill } from "react-icons/bs";

const Search = ({isOpen, setFilter}) => {






  return (
    <section className="s-wrapper">
      <div className="s-container relative flex items-center gap-1">
        <FiSearch className="text-white text-3xl absolute pl-2" />
        <input
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Name....."
          type="text"
          className="h-10 bg-transparent w-full rounded-md border border-white text-white pl-10"
        />
        <div>
          <BsPlusCircleFill onClick={isOpen} className="text-white text-[38px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Search;
