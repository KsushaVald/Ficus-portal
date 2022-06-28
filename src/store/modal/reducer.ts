import { Reducer } from "react";
import { MODAL_CREATE_OPEN, MODAL_CREATE_CLOSE, ModalCreateOpenAction, ModalCreateCloseAction, ModalLoginOpenAction, MODAL_LOGIN_OPEN, ModalLoginCloseAction, MODAL_LOGIN_CLOSE, ModalUpdateOpenAction, ModalUpdateCloseAction, MODAL_UPDATE_OPEN, MODAL_UPDATE_CLOSE } from "./action"

export type ModalState = {
  isModalCreateOpen: boolean;
  isModalLoginOpen: boolean;
  isModalUpdateOpen: boolean
}

export type ModalActions = ModalCreateOpenAction | ModalCreateCloseAction | ModalLoginOpenAction | ModalLoginCloseAction | ModalUpdateOpenAction | ModalUpdateCloseAction;

export const modalReduser: Reducer<ModalState, ModalActions> = (state, action) => {
  switch(action.type) {
    case MODAL_CREATE_OPEN:
      return {
        ...state,
        isModalCreateOpen: true,
      };
    case MODAL_CREATE_CLOSE:
      return {
        ...state,
        isModalCreateOpen: false,
      };
    case MODAL_LOGIN_OPEN:
      return {
        ...state,
        isModalLoginOpen: true,
      }
    case MODAL_LOGIN_CLOSE:
      return {
        ...state,
        isModalLoginOpen: false,
      }
    case  MODAL_UPDATE_OPEN:
      return {
        ...state,
        isModalUpdateOpen: true
      }
      case  MODAL_UPDATE_CLOSE:
        return {
          ...state,
          isModalUpdateOpen: false
        }
    default:
      return state;
  }
}
