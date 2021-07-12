export interface InitState {
  searchId: string;
  tickets: any[];
  filterTickets: any[];
  isFilter: boolean;
  error: boolean;
  stop: boolean;
  loading: boolean;
}

export enum fetchTicketsTypes {
  FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
  FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR",
}
export enum fetchSearchIdTypes {
  FETCH_SEARCH_ID_SUCCESS = "FETCH_SEARCH_ID_SUCCESS",
  FETCH_SEARCH_ID_ERROR = "FETCH_SEARCH_ID_ERROR",
  FETCH_SEARCH_ID_LOADING = "FETCH_SEARCH_ID_LOADING",
}
export enum sortVisibilityItems {
  SORT_ITEMS = "SORT_ITEMS",
}
export enum filterVisibilityItems {
  FILTER_ITEMS = "FILTER_ITEMS",
}
export const baseUrl = "https://front-test.beta.aviasales.ru";
