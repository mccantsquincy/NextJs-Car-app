"use client";

// search params
// pass serach params into fetch function
// set up interface typescript tp specify props

import Image from "next/image";
import React, { ReactElement, ReactEventHandler, ReactHTML, ReactHTMLElement, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";


// SearchButton component used in the searchbar component
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses} `}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);


// searchbar component
const SearchBar = ({setManufacturer, setModel}) => {
  
  const router = useRouter();
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchModel === '' && searchManufacturer === '') {
      alert("Please provide manufacturer and model")
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }


    // form label has onSubmit call the function handleSearch 
    // button elements inside the form with type of submit will submit the input by enter tab or onclick
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
         <Image 
           src="/model-icon.png"
           width={25}
           height={25}
           className="absolute w-[20px] h-[20px] ml-4"
           alt="car model"
         />

         <input 
            type="text"
            name="model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
         />

         <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  );
};

export default SearchBar;
