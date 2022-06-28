import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { postRequestAsync } from "../post/action";
import { RootState } from "../reducer";

export const CHANGE_TASK_SEND = 'CHANGE_TASK_SEND';

export type ChangeTaskSendAction = {
  type: typeof CHANGE_TASK_SEND;
}

export const ChangeTaskSend: ActionCreator<ChangeTaskSendAction> = () => ({
  type: CHANGE_TASK_SEND
})

export const CHANGE_TASK_SEND_SUCCESS = 'CHANGE_TASK_SEND_SUCCESS';

export type ChangeTaskSendSuccessAction = {
  type: typeof CHANGE_TASK_SEND_SUCCESS
}

export const ChangeTaskSendSuccess: ActionCreator<ChangeTaskSendSuccessAction> = ()=>({
  type: CHANGE_TASK_SEND_SUCCESS
})


export const CHANGE_TASK_SEND_ERROR = 'CHANGE_TASK_SEND_ERROR';

export type ChangeTaskSendErrorAction = {
  type: typeof CHANGE_TASK_SEND_ERROR
  error: string[]
}

export const ChangeTaskSendError: ActionCreator<ChangeTaskSendErrorAction> = (error: string[])=>({
  type: CHANGE_TASK_SEND_ERROR,
  error
})


export const ChangeTaskSendAsync=(formData:any, id: string): ThunkAction<void, RootState, unknown, Action<string>>=>(dispatch, getState)=>{
  dispatch(ChangeTaskSend());
  axios({
    method: "post",
    url: `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}?developer=kvald`,
    data: formData,
  })
  .then(resp => {
    console.log(resp.data)
    if(resp.data.status === "ok"){
      dispatch(ChangeTaskSendSuccess())
      dispatch(postRequestAsync());
    }
    else {
      console.log(resp.data)
      let errorStr:string[] = [];
      for(let [key, value] of Object.entries(resp.data.message)) {
        errorStr.push(key+': '+value);
      }
      console.log(errorStr)
      dispatch(ChangeTaskSendError(errorStr))
    }
  })
  .catch((error)=>{
    dispatch(ChangeTaskSendError([String(error)]))
  })
}
