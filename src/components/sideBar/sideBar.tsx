import React, { useState } from "react";
import { FilterBarContainer, FilterItems } from "./sideBar.styled";
import { setVisibilitySort } from "../../redux/tickets/actions";
import { ISideBar } from "../../interfaces/interfaces";

const SideBar: React.FC<ISideBar> = ({ setFilterTickets, filterTicket }) => {
  const filterNavBarHandler = (e: any) => {
    switch (e.target.name) {
      case "All": {
        setFilterTickets({
          ...filterTicket,
          all: e.target.checked,
        });
        break;
      }
      case "1 stop": {
        setFilterTickets({
          ...filterTicket,
          oneStop: e.target.checked,
        });
        break;
      }
      case "2 stops": {
        setFilterTickets({
          ...filterTicket,
          twoStops: e.target.checked,
        });
        break;
      }
      case "3 stops": {
        setFilterTickets({
          ...filterTicket,
          threeStops: e.target.checked,
        });
        break;
      }
      case "no stops": {
        setFilterTickets({
          ...filterTicket,
          noneStops: e.target.checked,
        });
        break;
      }
      default:
        return 0;
    }
  };
  return (
    <FilterBarContainer>
      <h4>Количество пересадок</h4>
      <FilterItems>
        <input type="checkbox" name="All" onChange={filterNavBarHandler} />
        <span>Все</span>
      </FilterItems>
      <FilterItems>
        <input type="checkbox" name="1 stop" onChange={filterNavBarHandler} />
        <span>1 пересадка</span>
      </FilterItems>
      <FilterItems>
        <input type="checkbox" name="2 stops" onChange={filterNavBarHandler} />
        <span>2 пересадки</span>
      </FilterItems>
      <FilterItems>
        <input type="checkbox" name="3 stops" onChange={filterNavBarHandler} />
        <span>3 пересадки</span>
      </FilterItems>
      <FilterItems>
        <input type="checkbox" name="no stops" onChange={filterNavBarHandler} />
        <span>Без пересадок</span>
      </FilterItems>
    </FilterBarContainer>
  );
};
export default SideBar;
