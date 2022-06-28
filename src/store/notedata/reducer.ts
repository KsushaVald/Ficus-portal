import { Reducer } from "react";
import { NoteInitialAction, NoteStatusChangeAction, NoteTextChangeAction, NOTE_INITIAL, NOTE_STATUS_CHANGE, NOTE_TEXT_CHANGE } from "./action"

export type NoteState = {
  id: number,
  status: number,
  text: string
  username: string,
  email: string
}


export type NoteAction = NoteStatusChangeAction | NoteTextChangeAction | NoteInitialAction;


export const noteReducer: Reducer<NoteState, NoteAction> = (state, action) => {
  switch(action.type) {
    case NOTE_INITIAL:
      return {
        ...state,
        id: action.data.id,
        status: action.data.status,
        text: action.data.text,
        username: action.data.username,
        email: action.data.email
      }
    case NOTE_STATUS_CHANGE:
      return {
        ...state,
        status: action.status
      }
    case NOTE_TEXT_CHANGE:
      return {
        ...state,
        text: action.text,
      }

  }
}
