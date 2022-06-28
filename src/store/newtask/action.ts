import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { postRequestAsync } from "../post/action";
import { RootState } from "../reducer";


export const NEW_TASK_INITIAL = 'NEW_TASK_INITIAL';
export type NewTaskInitialAction = {
  type: typeof NEW_TASK_INITIAL
}

export const NewTaskInitial: ActionCreator<NewTaskInitialAction>=()=>({
  type: NEW_TASK_INITIAL
})

export const NEW_TASK_SEND = 'NEW_TASK_SEND';
export type NewTaskSendAction = {
  type: typeof NEW_TASK_SEND
}

export const NewTaskSend: ActionCreator<NewTaskSendAction>=()=>({
  type: NEW_TASK_SEND
})


export const NEW_TASK_SEND_SUCCESS = 'NEW_TASK_SEND_SUCCESS';
export type NewTaskSendSuccessAction = {
  type: typeof NEW_TASK_SEND_SUCCESS
}

export const NewTaskSendSuccess: ActionCreator<NewTaskSendSuccessAction>=()=>({
  type: NEW_TASK_SEND_SUCCESS
})



export const NEW_TASK_SEND_ERROR = 'NEW_TASK_SEND_ERROR';
export type NewTaskSendErrorAction = {
  type: typeof NEW_TASK_SEND_ERROR,
  error: string[]
}

export const NewTaskSendError: ActionCreator<NewTaskSendErrorAction>=(error:string[])=>({
  type: NEW_TASK_SEND_ERROR,
  error
})


export const NewTaskSendAsync=(formData:any, form:HTMLFormElement): ThunkAction<void, RootState, unknown, Action<string>>=>(dispatch, getState)=>{
  dispatch(NewTaskSend());
  axios({
    method: "post",
    url: "https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=kvald",
    data: formData
  })
  .then(resp => {
    console.log(resp.data)
    if(resp.data.status === "ok"){
      dispatch(NewTaskSendSuccess())
      dispatch(postRequestAsync());
      form.reset()
    }
    else {
      console.log(resp.data)
      let errorStr:string[] = [];
      for(let [key, value] of Object.entries(resp.data.message)) {
        errorStr.push(key+': '+value);
      }
      console.log(errorStr)
      dispatch(NewTaskSendError(errorStr))
    }
  })
  .catch((error)=>{
    dispatch(NewTaskSendError([String(error)]))
  })
}

