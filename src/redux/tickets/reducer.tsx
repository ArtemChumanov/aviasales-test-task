import {
  InitState,
  fetchTicketsTypes,
  fetchSearchIdTypes,
  filterVisibilityItems,
  sortVisibilityItems,
} from "./types";
import { filterTickets, sortTickets } from "../../helpers/helpers";

const initState: InitState = {
  searchId: "",
  tickets: [],
  filterTickets: [],
  isFilter: false,
  error: false,
  stop: false,
  loading: true,
};
const ticketsReducer = (state = initState, action: any): InitState => {
  switch (action.type) {
    case fetchSearchIdTypes.FETCH_SEARCH_ID_SUCCESS: {
      return {
        ...state,
        searchId: action.payload,
        loading: false,
        error: false,
      };
    }
    case fetchSearchIdTypes.FETCH_SEARCH_ID_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case fetchTicketsTypes.FETCH_TICKETS_SUCCESS: {
      return {
        ...state,
        tickets: action.payload,
        error: false,
        loading: false,
      };
    }
    case fetchTicketsTypes.FETCH_TICKETS_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case sortVisibilityItems.SORT_ITEMS: {
      return {
        ...state,
        filterTickets: sortTickets(
          state.tickets,
          state.filterTickets,
          action.payload,
          state.isFilter
        ),
        isFilter: true,
      };
    }
    case filterVisibilityItems.FILTER_ITEMS: {
      return {
        ...state,
        filterTickets: filterTickets(
          state.tickets,
          state.filterTickets,
          action.payload
        ),
        isFilter: true,
      };
    }
    default:
      return state;
  }
};

export default ticketsReducer;
