import { Reducer } from "redux";
import { ChangeTaskSendAction, ChangeTaskSendErrorAction, ChangeTaskSendSuccessAction, CHANGE_TASK_SEND, CHANGE_TASK_SEND_ERROR, CHANGE_TASK_SEND_SUCCESS } from "./changetask/action";
import { ChangeTaskReducer, ChangeTaskState } from "./changetask/reducer";
import { ModalCreateCloseAction, ModalCreateOpenAction, ModalLoginCloseAction, ModalLoginOpenAction, ModalUpdateCloseAction, ModalUpdateOpenAction, MODAL_CREATE_CLOSE, MODAL_CREATE_OPEN, MODAL_LOGIN_CLOSE, MODAL_LOGIN_OPEN, MODAL_UPDATE_CLOSE, MODAL_UPDATE_OPEN } from "./modal/action";
import { modalReduser, ModalState } from "./modal/reducer";
import { NewTaskInitialAction, NewTaskSendAction, NewTaskSendErrorAction, NEW_TASK_INITIAL, NEW_TASK_SEND, NEW_TASK_SEND_ERROR, NEW_TASK_SEND_SUCCESS } from "./newtask/action";
import { NewTaskAction, NewTaskReducer, NewTaskState } from "./newtask/reducer";
import { NoteInitialAction, NoteStatusChangeAction, NoteTextChangeAction, NOTE_INITIAL, NOTE_STATUS_CHANGE, NOTE_TEXT_CHANGE } from "./notedata/action";
import { noteReducer, NoteState } from "./notedata/reducer";
import { AllPageAction, ALL_PAGE, CurrentPageAction, CURRENT_PAGE } from "./pages/action";
import { pageReducer, PageState } from "./pages/reducer";
import { PostRequestAction, PostRequestErrorAction, PostRequestSuccessAction, POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from "./post/action";
import { postReducer, PostState } from "./post/reducer"
import { PostSortAction, POST_SORT } from "./sort/action";
import { postSortReducer, PostSortState } from "./sort/reducer";
import { RequestTokenAction, RequestTokenErrorAction, RequestTokenSuccessAction, REQUEST_TOKEN, REQUEST_TOKEN_ERROR, REQUEST_TOKEN_SUCCESS } from "./token/action";
import { tokenReducer, TokenState } from "./token/reducer";

export type RootState = {
  posts: PostState,
  pages: PageState,
  sort: PostSortState
  modal: ModalState,
  newtask: NewTaskState,
  token: TokenState,
  note: NoteState,
  changetask: ChangeTaskState
}

const initialState = {
  posts: {
    loading: false,
    data: [],
    error: ''
  },
  pages: {
    currentpage: 1,
    allpagenumber: 1
  },
  sort: {
    sortField: 'id',
    sortDirection: 'asc',
  },
  modal: {
    isModalCreateOpen: false,
    isModalLoginOpen: false,
    isModalUpdateOpen: false
  },
  newtask: {
    send: false,
    success: false,
    error: []
  },
  token: {
    loading: false,
    error: '',
    token: ''
  },
  note: {
    id: 0,
    username: '',
    email: '',
    status: 0,
    text: ''
  },
  changetask: {
    send: false,
    succes: false,
    error: []
  }
}


export type AllAction = PostRequestAction
  | PostRequestSuccessAction
  | PostRequestErrorAction
  | CurrentPageAction
  | AllPageAction
  | PostSortAction
  | ModalCreateCloseAction
  | ModalCreateOpenAction
  | ModalLoginCloseAction
  | ModalLoginOpenAction
  | ModalUpdateCloseAction
  | ModalUpdateOpenAction
  | NewTaskSendAction
  | NewTaskSendErrorAction
  | NewTaskAction
  | NewTaskInitialAction
  | RequestTokenAction
  | RequestTokenErrorAction
  | RequestTokenSuccessAction
  | NoteStatusChangeAction
  | NoteTextChangeAction
  | NoteInitialAction
  | ChangeTaskSendAction
  | ChangeTaskSendErrorAction
  | ChangeTaskSendSuccessAction;

export const rootReducer: Reducer<RootState, AllAction> = (state = initialState, action) =>{
  switch(action.type) {
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESS:
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        posts: postReducer(state.posts, action)
      }
    case CURRENT_PAGE:
    case ALL_PAGE:
      return {
        ...state,
        pages: pageReducer(state.pages, action)
      }
    case POST_SORT:
      return {
        ...state,
        sort: postSortReducer(state.sort, action)
      }
    case MODAL_CREATE_CLOSE:
    case MODAL_CREATE_OPEN:
    case MODAL_LOGIN_CLOSE:
    case MODAL_LOGIN_OPEN:
    case MODAL_UPDATE_CLOSE:
    case MODAL_UPDATE_OPEN:
      return {
        ...state,
        modal: modalReduser(state.modal, action)
      }
    case NEW_TASK_SEND:
    case NEW_TASK_SEND_SUCCESS:
    case NEW_TASK_SEND_ERROR:
    case NEW_TASK_INITIAL:
      return {
        ...state,
        newtask: NewTaskReducer(state.newtask, action)
      }
    case REQUEST_TOKEN:
    case REQUEST_TOKEN_SUCCESS:
    case REQUEST_TOKEN_ERROR:
      return {
        ...state,
        token: tokenReducer(state.token, action)
      }
    case NOTE_INITIAL:
    case NOTE_TEXT_CHANGE:
    case NOTE_STATUS_CHANGE:
      return {
        ...state,
        note: noteReducer(state.note, action)
      }
    case CHANGE_TASK_SEND:
    case CHANGE_TASK_SEND_SUCCESS:
    case CHANGE_TASK_SEND_ERROR:
      return {
        ...state,
        changetask: ChangeTaskReducer(state.changetask, action)
      }
    default:
      return state;
  }
}

