import axios from "axios";
import { useSelector } from "react-redux";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { modalLoginClose } from "../modal/action";
import { RootState } from "../reducer";

export const REQUEST_TOKEN = 'REQUEST_TOKEN ';

export type RequestTokenAction = {
  type: typeof REQUEST_TOKEN,
}

export const requestToken:ActionCreator<RequestTokenAction> = () => ({
    type: REQUEST_TOKEN
  })


export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';

export type RequestTokenSuccessAction = {
  type: typeof REQUEST_TOKEN_SUCCESS,
  token: string
}

export const requestTokenSuccess:ActionCreator<RequestTokenSuccessAction> = (token:string) => (
  {
    type: REQUEST_TOKEN_SUCCESS,
    token,
  }
)


export const REQUEST_TOKEN_ERROR = 'REQUEST_TOKEN_ERROR';

export type RequestTokenErrorAction = {
  type: typeof REQUEST_TOKEN_ERROR,
  error: string
}

export const requestTokenError:ActionCreator<RequestTokenErrorAction> = (error: string) => (
  {
    type: REQUEST_TOKEN_ERROR,
    error
  }
)



export const  requestTokenAsync=(data:any): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(requestToken());
  const code = new URLSearchParams(window.location.search).get("code");
  console.log(code)
  axios({
    method: "post",
    url: "https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=kvald",
    data: data
  })
  .then((resp) => {
    if(resp.data.status === "ok") {
      console.log(resp.data.message.token)
      localStorage.setItem('token', resp.data.message.token)
      localStorage.setItem('tokenDate', String(Math.floor(Date.now()/1000)))
      dispatch(requestTokenSuccess(resp.data.message.token));
      dispatch(modalLoginClose());
    }
    else {
      console.log(resp.data);
      dispatch(requestTokenError('Неверный логин или пароль'));
    }

  })
  .catch((error)=>{
    console.log(error);
    dispatch(requestTokenError(String(error)));
  })
}


export const tokenFromLocalstore=(): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  let token = localStorage.getItem('token');
  let tokenDate = Number(localStorage.getItem('tokenDate'));
  console.log(token, tokenDate)
  if(token && tokenDate) {
    let currentDate =  Math.floor(Date.now()/1000);
    console.log((currentDate-tokenDate)/60/60)
    if((currentDate-tokenDate)/60/60<24) {
      console.log(token)
      dispatch(requestTokenSuccess(token))
    }
    else {
      localStorage.setItem('token', '');
    }
  }
  else {
    dispatch(requestTokenSuccess(''));
  }
}
