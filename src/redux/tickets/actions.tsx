import {
  fetchTicketsTypes,
  fetchSearchIdTypes,
  filterVisibilityItems,
  sortVisibilityItems,
  baseUrl,
} from "./types";
import { Dispatch } from "redux";
import axios from "axios";
import { instance } from "../../api/axios.config";

const fetchTicketsSuccess = (data: any[]) => ({
  type: fetchTicketsTypes.FETCH_TICKETS_SUCCESS,
  payload: data,
});

const fetchTicketsError = (error: Error) => ({
  type: fetchTicketsTypes.FETCH_TICKETS_ERROR,
  payload: error,
});

const fetchSearchIdSuccess = (searchId: string) => ({
  type: fetchSearchIdTypes.FETCH_SEARCH_ID_SUCCESS,
  payload: searchId,
});
const fetchSearchIdError = (error: Error) => ({
  type: fetchSearchIdTypes.FETCH_SEARCH_ID_SUCCESS,
  payload: error,
});
const fetchSearchIdLoading = () => ({
  type: fetchSearchIdTypes.FETCH_SEARCH_ID_SUCCESS,
});

export const fetchSearchId = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchSearchIdLoading());
    const response = await axios.get(`${baseUrl}/search`);
    dispatch(fetchSearchIdSuccess(response.data.searchId));
  } catch (e) {
    dispatch(fetchSearchIdError(e));
  }
};

export const fetchTickets =
  (searchId: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(fetchSearchIdLoading());
      let response = await axios.get(`${baseUrl}/tickets`, {
        params: { searchId: searchId },
      });
      dispatch(fetchTicketsSuccess(response.data.tickets));
    } catch (e) {
      dispatch(fetchTicketsError(e));
    }
  };
export const setVisibilitySort = (filter: string) => ({
  type: sortVisibilityItems.SORT_ITEMS,
  payload: filter,
});
export const setVisibilityFilter = (filter: object) => ({
  type: filterVisibilityItems.FILTER_ITEMS,
  payload: filter,
});
