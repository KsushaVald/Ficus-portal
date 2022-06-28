import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { allPage, currentPage } from "../pages/action";
import { RootState } from "../reducer";

export const POSTS_REQUEST = 'POSTS_REQUEST';
export type PostRequestAction = {
  type: typeof POSTS_REQUEST;
}

export const postRequest: ActionCreator<PostRequestAction>=()=>({
  type: POSTS_REQUEST
})


export interface IPost {
  id?: string,
  username?: string,
  email?: string,
  text?: string,
  status?: number,
  image_path?: string
}


export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export type PostRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data: IPost[],
}

export const postsRequestSuccess: ActionCreator<PostRequestSuccessAction> = (data) =>({
  type: POSTS_REQUEST_SUCCESS,
  data,
})


export const POSTS_REQUEST_ERROR  = 'POSTS_REQUEST_ERROR';
export type PostRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR,
  error: string
}

export const postsRequestError: ActionCreator<PostRequestErrorAction> = (error:string) => ({
  type: POSTS_REQUEST_ERROR,
  error
})



export const postRequestAsync=(): ThunkAction<void, RootState, unknown, Action<string>>=>(dispatch, getState)=>{
  dispatch(postRequest());
  axios.get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=kvald&sort_field=${getState().sort.sortField}&sort_direction=${getState().sort.sortDirection}&page=${getState().pages.currentpage}`)
  .then(resp => {
    const postsData = resp.data.message.tasks;
    const pagenumber = Math.ceil(resp.data.message.total_task_count/3)
    dispatch(postsRequestSuccess(postsData));
    dispatch(allPage(pagenumber))
  })
  .catch((error)=>{
    dispatch(postsRequestError(String(error)))
  })
}
