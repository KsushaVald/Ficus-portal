import { Reducer } from "react";
import { ChangeTaskSendAction, ChangeTaskSendErrorAction, ChangeTaskSendSuccessAction, CHANGE_TASK_SEND, CHANGE_TASK_SEND_ERROR, CHANGE_TASK_SEND_SUCCESS } from "./action"

export type ChangeTaskState = {
  send: boolean,
  succes: boolean,
  error: string[]
}

export type ChangeTaskAction = ChangeTaskSendAction | ChangeTaskSendErrorAction | ChangeTaskSendSuccessAction;

export const ChangeTaskReducer: Reducer<ChangeTaskState, ChangeTaskAction> = (state, action) => {
  switch(action.type) {
    case CHANGE_TASK_SEND:
      return {
        ...state,
        send: true,
        succes: false,
        error: []
      }
    case CHANGE_TASK_SEND_SUCCESS:
      return {
        ...state,
        send: false,
        succes: true
      }
    case CHANGE_TASK_SEND_ERROR:
      return {
        ...state,
        send: false,
        error: action.error
      }
    default:
      return state;
  }
}
