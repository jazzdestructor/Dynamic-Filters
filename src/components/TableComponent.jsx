import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const TableComponent = () => {
  const data = [
    {
      id: 1,
      name: "Cory Scrivner",
      screen_name: "cscrivner0",
      followers_count: 783,
      following_count: 460,
      location: "7 Steensland Crossing",
      verified: false,
    },
    {
      id: 2,
      name: "Doralynn Haker",
      screen_name: "dhaker1",
      followers_count: 700,
      following_count: 648,
      location: "402 Grasskamp Circle",
      verified: false,
    },
    {
      id: 3,
      name: "Arielle Balsom",
      screen_name: "abalsom2",
      followers_count: 325,
      following_count: 324,
      location: "27500 Texas Crossing",
      verified: true,
    },
    {
      id: 4,
      name: "Dilly Meneely",
      screen_name: "dmeneely3",
      followers_count: 803,
      following_count: 676,
      location: "3866 Almo Crossing",
      verified: true,
    },
    {
      id: 5,
      name: "Yasmeen Dunnan",
      screen_name: "ydunnan4",
      followers_count: 502,
      following_count: 546,
      location: "569 Holy Cross Point",
      verified: false,
    },
    {
      id: 6,
      name: "Jillana Holleworth",
      screen_name: "jholleworth5",
      followers_count: 466,
      following_count: 955,
      location: "94 Hazelcrest Plaza",
      verified: false,
    },
    {
      id: 7,
      name: "Symon Rubinivitz",
      screen_name: "srubinivitz6",
      followers_count: 247,
      following_count: 820,
      location: "12 Vera Drive",
      verified: true,
    },
    {
      id: 8,
      name: "Harold Deackes",
      screen_name: "hdeackes7",
      followers_count: 183,
      following_count: 839,
      location: "537 Miller Place",
      verified: true,
    },
    {
      id: 9,
      name: "Shelbi Chalcraft",
      screen_name: "schalcraft8",
      followers_count: 526,
      following_count: 164,
      location: "77 Arizona Drive",
      verified: false,
    },
    {
      id: 10,
      name: "Peggi Byrkmyr",
      screen_name: "pbyrkmyr9",
      followers_count: 715,
      following_count: 635,
      location: "5164 Hayes Pass",
      verified: true,
    },
    {
      id: 11,
      name: "Calla Spoole",
      screen_name: "cspoolea",
      followers_count: 499,
      following_count: 415,
      location: "4 5th Junction",
      verified: true,
    },
    {
      id: 12,
      name: "Afton Scholar",
      screen_name: "ascholarb",
      followers_count: 105,
      following_count: 657,
      location: "28 Crowley Hill",
      verified: false,
    },
    {
      id: 13,
      name: "Fredia Stenson",
      screen_name: "fstensonc",
      followers_count: 303,
      following_count: 435,
      location: "9 Gina Alley",
      verified: true,
    },
    {
      id: 14,
      name: "Shelli Gerrey",
      screen_name: "sgerreyd",
      followers_count: 645,
      following_count: 303,
      location: "31470 Arrowood Street",
      verified: true,
    },
    {
      id: 15,
      name: "Lucho Walkinshaw",
      screen_name: "lwalkinshawe",
      followers_count: 994,
      following_count: 722,
      location: "490 Dottie Junction",
      verified: true,
    },
    {
      id: 16,
      name: "Genvieve Landeaux",
      screen_name: "glandeauxf",
      followers_count: 715,
      following_count: 370,
      location: "326 Bluestem Place",
      verified: true,
    },
    {
      id: 17,
      name: "Pat Airton",
      screen_name: "pairtong",
      followers_count: 826,
      following_count: 490,
      location: "2721 Nobel Trail",
      verified: true,
    },
    {
      id: 18,
      name: "Thomasin Guerreru",
      screen_name: "tguerreruh",
      followers_count: 399,
      following_count: 763,
      location: "640 Sunfield Road",
      verified: false,
    },
    {
      id: 19,
      name: "Nev Carwardine",
      screen_name: "ncarwardinei",
      followers_count: 525,
      following_count: 507,
      location: "76800 Eagle Crest Way",
      verified: false,
    },
    {
      id: 20,
      name: "Linus Bunyan",
      screen_name: "lbunyanj",
      followers_count: 126,
      following_count: 768,
      location: "42126 Morningstar Junction",
      verified: true,
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Screen Name",
      selector: (row) => row.screen_name,
      sortable: true,
    },
    {
      name: "Followers Count",
      selector: (row) => row.followers_count,
      sortable: true,
      right: true,
    },
    {
      name: "Friends Count",
      selector: (row) => row.following_count,
      sortable: true,
      right: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Verified",
      selector: (row) => row.verified,
      sortable: true,
      cell: (data) => <>{data.verified ? "✓" : "✗"}</>,
      center: true,
    },
  ];

  const [components, setComponents] = useState([]);

  const [filterData, setfilterData] = useState(data);

  const [filterConditions, setFilterConditions] = useState([]);

  console.log(filterConditions);

  return (
    <div className="container">
      Filters
      <div>
        {components.length !== 0 && components.map((filter) => filter)}
        <button
          className="filter_button"
          onClick={() =>
            setComponents([
              ...components,
              <FilterComponent
                key={components.length}
                id={components.length}
                setComponents={setComponents}
                components={components}
                setFilterConditions={setFilterConditions}
                filterConditions={filterConditions}
                setfilterData={setfilterData}
                filterData={filterData}
              />,
            ])
          }
        >
          + Add Filter
        </button>
      </div>
      <DataTable
        columns={columns}
        data={filterData}
        defaultSortFieldID={1}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default TableComponent;
