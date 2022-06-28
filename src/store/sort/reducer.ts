import { Reducer } from "react";
import { PostSortAction, POST_SORT } from "./action";

export type PostSortState = {
  sortField: string,
  sortDirection: string,
}

type PostSortAllAction = PostSortAction;

export const postSortReducer: Reducer<PostSortState, PostSortAllAction> = (state, action) => {
  switch(action.type) {
    case POST_SORT:
      return {
        ...state,
        sortDirection: action.data.sortDirection,
        sortField: action.data.sortField
      }
    default:
      return state;
  }
}
