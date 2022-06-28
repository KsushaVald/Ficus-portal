import { ActionCreator } from "redux";

export const POST_SORT = 'POST_SORT';

export interface IPostSort {
  sortField: string,
  sortDirection: string,
}

export type PostSortAction = {
  type: typeof POST_SORT,
  data: IPostSort
}

export const PostSort: ActionCreator<PostSortAction> = (data)=>({
  type: POST_SORT,
  data
})
