import React, { useEffect, useState } from "react";
import { userData } from "../data/userData";

const AGE_SORT_NONE = 0;
const AGE_SORT_ASC = 1;
const AGE_SORT_DESC = 2;

function Header({ setUsers }) {
  const [ageSort, setAgeSort] = useState(AGE_SORT_NONE);
  const [searchText, setSearchText] = useState("");

  const onSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const onAgeSortSelectChange = (event) => {
    setAgeSort(event.target.value);
  };

  const onResetClick = (event) => {
    setAgeSort(AGE_SORT_NONE);
    setSearchText("");
  };

  useEffect(() => {
    // apply text filter
    let filteredUsers = userData.filter((user) => {
      return user.name.toLowerCase().includes(searchText.toLowerCase());
    });

    // apply sorting by age
    if (ageSort != AGE_SORT_NONE) {
      filteredUsers.sort((userOne, userTwo) => {
        if (ageSort == AGE_SORT_ASC) {
          return userOne.age - userTwo.age;
        }
        return userTwo.age - userOne.age;
      });
    }

    // set results / rerender user lists
    setUsers(filteredUsers);
  }, [searchText, setUsers, ageSort]);

  return (
    <header className="header">
      <div className="box">
        <input type="text" value={searchText} onChange={onSearchTextChange} />
        <select
          value={ageSort}
          onChange={onAgeSortSelectChange}
          name="text"
          id=""
        >
          <option value={AGE_SORT_NONE}>Age sort</option>
          <option value={AGE_SORT_ASC}>Ascending</option>
          <option value={AGE_SORT_DESC}>Descending</option>
        </select>
      </div>
      <button onClick={onResetClick}>REFRESH</button>
    </header>
  );
}

export default Header;
