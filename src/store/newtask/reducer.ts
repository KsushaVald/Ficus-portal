import { Reducer } from "react";
import { NewTaskInitialAction, NewTaskSendAction, NewTaskSendErrorAction, NewTaskSendSuccessAction, NEW_TASK_INITIAL, NEW_TASK_SEND, NEW_TASK_SEND_ERROR, NEW_TASK_SEND_SUCCESS } from "./action";

export type NewTaskState = {
  send: boolean,
  error: string[],
  success: boolean
}

export type NewTaskAction = NewTaskSendAction
  | NewTaskSendSuccessAction
  | NewTaskSendErrorAction
  | NewTaskSendAction
  | NewTaskInitialAction;


export const NewTaskReducer: Reducer<NewTaskState, NewTaskAction> = (state, action) => {
  switch(action.type) {
    case NEW_TASK_SEND:
      return {
        ... state,
        send: true,
        success: false,
        error: []
      };
    case NEW_TASK_SEND_SUCCESS: {
      return {
        ...state,
        send: false,
        success: true,
      }
    }
    case NEW_TASK_SEND_ERROR:
      return {
        ...state,
        error: action.error,
        send: false,
        success: false
      }
    case NEW_TASK_INITIAL: {
      return {
        ...state,
        error: [],
        send: false,
        success: false,
      }
    }
    default:
      return state;
  }
}
