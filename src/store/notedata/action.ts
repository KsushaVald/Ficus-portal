import { ActionCreator } from "redux";

export const NOTE_INITIAL  = 'NOTE_INITIAL';
export type NoteInitialAction = {
  type: typeof NOTE_INITIAL,
  data: {
    id: number,
    status: number,
    text: string,
    username: string,
    email: string
  }
}

export const noteInitial: ActionCreator<NoteInitialAction> = (data) => ({
  type: NOTE_INITIAL,
  data
})



export const NOTE_STATUS_CHANGE  = 'NOTE_STATUS_CHANGE';
export type NoteStatusChangeAction = {
  type: typeof NOTE_STATUS_CHANGE,
  status: number
}

export const noteStatusChange: ActionCreator<NoteStatusChangeAction> = (status) => ({
  type: NOTE_STATUS_CHANGE,
  status
})

export const NOTE_TEXT_CHANGE  = 'NOTE_TEXT_CHANGE';
export type NoteTextChangeAction = {
  type: typeof NOTE_TEXT_CHANGE,
  text: string
}

export const noteTextChange: ActionCreator<NoteTextChangeAction> = (text) => ({
  type: NOTE_TEXT_CHANGE,
  text
})
