import React, { useEffect } from "react";
import { ListTicketsContainer } from "./list-ticket.styled";
import { fetchTickets } from "../../redux/tickets/actions";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import TicketItem from "../ticket-item/ticket-item";
import { rootState } from "../../redux/rootReducer";
import { IListTickets } from "../../interfaces/interfaces";

const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;

const ListTickets: React.FC<IListTickets> = ({ searchId, sort, count }) => {
  const dispatch = useDispatch();
  const state = useTypedSelector((state) => state.tickets);
  const { tickets, isFilter, filterTickets } = state;

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [searchId, count]);

  useEffect(() => {}, [sort, isFilter]);
  const changeTicket = () => {
    if (isFilter) return filterTickets;
    return tickets;
  };

  return (
    <ListTicketsContainer>
      {changeTicket()?.map((ticket, index) => {
        if (index < count) {
          return <TicketItem key={index} ticket={ticket} />;
        }
      })}
    </ListTicketsContainer>
  );
};
export default ListTickets;
