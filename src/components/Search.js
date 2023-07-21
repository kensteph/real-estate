import React from 'react';
import PropertyDropdown from './PropertyDropdown';
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { RiSearch2Line } from 'react-icons/ri';
const Search = () => {
  return (
    <div className="px-[30px] py-6 max-w-[1170px] flex flex-col mx-auto  lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 ">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button>
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
