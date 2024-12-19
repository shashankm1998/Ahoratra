import React from "react";
// import { BiFilterAlt } from "react-icons/bi";
// import filtersContext from "../../contexts/filters/filtersContext";
import FilterBarOptions from "./FilterBarOptions";

const FilterBar = () => {
  // const { handleMobFilterVisibility } = useContext(filtersContext);

  return (
    <>
      {/*===== Filterbar-default =====*/}
      <aside id="filterbar">
        <div className="filterbar_wrapper">
          <FilterBarOptions />
        </div>
      </aside>

      {/*===== Filterbar-mobile =====*/}
      <div>
        <div className="filterbar_mob_wrapper">
          {/* <h3 className="title" onClick={() => handleMobSortVisibility(true)}>
            <BiSort />
            <span>Sort</span>
          </h3>
          <span>|</span> */}
          {/* <h3 className="title" onClick={() => handleMobFilterVisibility(true)}>
            <BiFilterAlt />
            <span>Filter</span>
          </h3> */}
        </div>
        <FilterBarOptions />
      </div>
    </>
  );
};

export default FilterBar;
