import React, { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { fetchSearchId, setVisibilityFilter } from "../redux/tickets/actions";
import { MainPageLayout, Button } from "./MainPage.styled";
import SideBar from "../components/sideBar/sideBar";
import Navbar from "../components/navbar/navbar";
import ListTickets from "../components/list-tickets/list-tickets";
import { rootState } from "../redux/rootReducer";
import Header from "../components/header/header";
import Preloader from "../components/Preloader/index";
import { useHistory } from "react-router-dom";

const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [countTicket, setCountTicket] = useState(5);
  const [filterTicket, setFilterTickets] = useState({
    oneStop: false,
    twoStops: false,
    threeStops: false,
    all: false,
    noneStops: false,
  });
  const history = useHistory();
  const state = useTypedSelector((state) => state.tickets);
  const { searchId, loading, error } = state;

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);
  useEffect(() => {
    for (let a in filterTicket) {
      // @ts-ignore
      if (filterTicket[a] === true) {
        dispatch(setVisibilityFilter(filterTicket));
      }
    }
  }, [filterTicket]);

  if (error) {
    history.push("/505");
  }
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <MainPageLayout>
            <SideBar
              setFilterTickets={setFilterTickets}
              filterTicket={filterTicket}
            />
            <div>
              <Navbar setSort={setSort} />
              <ListTickets
                sort={sort}
                searchId={searchId}
                count={countTicket}
              />
              <Button onClick={() => setCountTicket(countTicket + 5)}>
                Показать еще 5 билетов !
              </Button>
            </div>
          </MainPageLayout>
        </div>
      )}
    </>
  );
};
export default MainPage;
