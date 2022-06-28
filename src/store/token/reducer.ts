import { REQUEST_TOKEN, RequestTokenAction, RequestTokenErrorAction, RequestTokenSuccessAction, REQUEST_TOKEN_SUCCESS, REQUEST_TOKEN_ERROR } from "./action";
import { Reducer } from "react";

export type TokenState = {
  loading: boolean,
  error: string,
  token: string,
}

type TokenAction = RequestTokenAction | RequestTokenErrorAction | RequestTokenSuccessAction

export const tokenReducer: Reducer<TokenState, TokenAction> = (state, action) => {
  switch(action.type) {
    case REQUEST_TOKEN:
      return  {
        ...state,
        loading: true
      }
    case REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token
      }
    case REQUEST_TOKEN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default:
      return state
  }
}
