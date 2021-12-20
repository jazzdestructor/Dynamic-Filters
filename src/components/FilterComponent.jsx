import React, { useState } from "react";

const FilterComponent = ({
  id,
  setComponents,
  components,
  setFilterConditions,
  filterConditions,
  setfilterData,
  filterData,
}) => {
  const stringFilters = [{ key: "CONTAINS", value: "contains" }];
  const numberFilters = [
    { key: "GTE", value: ">=" },
    { key: "LTE", value: "<=" },
  ];
  const booleanFilters = [{ key: "EQ", value: "equals" }];
  const [options, setOptions] = useState(stringFilters);
  const [filterValue, setFilterValue] = useState("name");
  const [filterComparison, setfilterComparison] = useState("CONTAINS");

  const onSelectOptionHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    setFilterValue(value);
    if (value === "followers_count" || value === "following_count") {
      setOptions(numberFilters);
      setfilterComparison(numberFilters[0].key);
    } else if (
      value === "name" ||
      value === "screen_name" ||
      value === "location"
    ) {
      setOptions(stringFilters);
    } else {
      setOptions(booleanFilters);
      setfilterComparison(booleanFilters[0].key);
    }
  };

  const onComparisonHandler = (e) => {
    setfilterComparison(e.target.value);
    console.log(e.target);
  };

  const onInputChangeHandler = (e) => {
    setFilterConditions([
      ...filterConditions,
      {
        id: filterValue,
        operator: filterComparison,
        value: e.target.value,
      },
    ]);

    console.log(
      setfilterData(
        filterData.filter((data) => {
          if (filterComparison === "CONTAINS") {
            return data[filterValue]
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          } else if (filterComparison === "GTE") {
            return data[filterValue] >= Number(e.target.value);
          } else if (filterComparison === "LTE") {
            return data[filterValue] <= e.target.value;
          } else {
            return data[filterValue] === (e.target.value === "true");
          }
        })
      )
    );
  };

  return (
    <div>
      {id === 0 && `Where`}
      {id === 1 && (
        <select className="filter_option" defaultValue={"AND"}>
          <option>AND</option>
          <option>OR</option>
        </select>
      )}
      {id >= 2 && `AND`}
      <select
        onChange={onSelectOptionHandler}
        defaultValue={filterValue}
        className="filter_option"
      >
        <option value="name">Name</option>
        <option value="screen_name">Screen Name</option>
        <option value="followers_count">Followers</option>
        <option value="following_count">Following</option>
        <option value="location">Location</option>
        <option value="verified">Verified</option>
      </select>

      <select onChange={onComparisonHandler} className="filter_option">
        {options.map((option, i) => (
          <option key={i} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      <input
        type="text"
        onChange={onInputChangeHandler}
        className="filter_option"
      />
      <button
        onClick={() => {
          console.log(id);
          console.log(components.map((comp) => comp.key));
          setComponents(components.filter((comp) => comp.key !== id));
        }}
        className="filter_option"
      >
        Delete
      </button>
    </div>
  );
};

export default FilterComponent;
