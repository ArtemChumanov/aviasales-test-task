import React from "react";
import { NavbarFilter, ButtonFilter } from "./navbar.styled";
import { useDispatch } from "react-redux";
import { setVisibilitySort } from "../../redux/tickets/actions";
import { INavbar } from "../../interfaces/interfaces";

const Navbar: React.FC<INavbar> = ({ setSort }) => {
  const dispatch = useDispatch();

  const filterNavBarHandler = (e: any) => {
    setSort(e.target.name);
    switch (e.target.name) {
      case "The fastest": {
        return dispatch(setVisibilitySort("The fastest"));
      }
      case "The cheapest": {
        return dispatch(setVisibilitySort("The cheapest"));
      }
      case "Optimal": {
        return dispatch(setVisibilitySort("Optimal"));
      }
      default:
        return 0;
    }
  };
  return (
    <NavbarFilter>
      <ButtonFilter onClick={filterNavBarHandler} name="The fastest">
        Самый быстрый
      </ButtonFilter>
      <ButtonFilter onClick={filterNavBarHandler} name="The cheapest">
        Самый дешевый
      </ButtonFilter>
      <ButtonFilter onClick={filterNavBarHandler} name="Optimal">
        Оптимальний
      </ButtonFilter>
    </NavbarFilter>
  );
};
export default Navbar;
