import { Reducer } from "react";
import { AllPageAction, ALL_PAGE, CurrentPageAction, CURRENT_PAGE } from "./action"

export type PageState = {
  currentpage: number,
  allpagenumber: number,
}

export type PageAction = CurrentPageAction | AllPageAction;

export const pageReducer: Reducer<PageState, PageAction> = (state, action) => {
  switch(action.type) {
    case CURRENT_PAGE:
      return {
        ...state,
        currentpage: action.pagenumber
      }
    case ALL_PAGE:
      return {
        ...state,
        allpagenumber: action.pagenumber
      }
    default:
      return state;
  }
}
