import { Reducer } from "react";
import { IPost, PostRequestAction,  PostRequestErrorAction, PostRequestSuccessAction, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./action"

export type PostState = {
  loading: boolean,
  error: string,
  data: IPost[]
}

export type PostAction = PostRequestAction
  | PostRequestSuccessAction
  | PostRequestErrorAction;


export const postReducer: Reducer<PostState, PostAction> = (state, action) => {
  switch(action.type) {
    case POSTS_REQUEST:
      return {
        ... state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false
      }
    }
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state;
  }
}
