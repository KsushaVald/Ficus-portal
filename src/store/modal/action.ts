import { ActionCreator } from "redux";

export const MODAL_CREATE_OPEN = 'MODAL_CREATE_OPEN';
export type ModalCreateOpenAction = {
  type: typeof MODAL_CREATE_OPEN;
}

export const modalCreateOpen: ActionCreator<ModalCreateOpenAction> = () =>({
  type: MODAL_CREATE_OPEN
})

export const MODAL_CREATE_CLOSE = 'MODAL_CREATE_CLOSE';
export type ModalCreateCloseAction = {
  type: typeof MODAL_CREATE_CLOSE;
}

export const modalCreateClose: ActionCreator<ModalCreateCloseAction> = () =>({
  type: MODAL_CREATE_CLOSE
})


export const MODAL_LOGIN_OPEN = 'MODAL_LOGIN_OPEN';
export type ModalLoginOpenAction = {
  type: typeof MODAL_LOGIN_OPEN;
}

export const modalLoginOpen: ActionCreator<ModalLoginOpenAction> = () =>({
  type: MODAL_LOGIN_OPEN
})

export const MODAL_LOGIN_CLOSE = 'MODAL_LOGIN_CLOSE';
export type ModalLoginCloseAction = {
  type: typeof MODAL_LOGIN_CLOSE;
}

export const modalLoginClose: ActionCreator<ModalLoginCloseAction> = () =>({
  type: MODAL_LOGIN_CLOSE
})


export const MODAL_UPDATE_OPEN = 'MODAL_UPDATE_OPEN';
export type ModalUpdateOpenAction = {
  type: typeof MODAL_UPDATE_OPEN;
}

export const modalUpdateOpen: ActionCreator<ModalUpdateOpenAction> = () =>({
  type: MODAL_UPDATE_OPEN
})

export const MODAL_UPDATE_CLOSE = 'MODAL_UPDATE_CLOSE';
export type ModalUpdateCloseAction = {
  type: typeof MODAL_UPDATE_CLOSE;
}

export const modalUpdateClose: ActionCreator<ModalUpdateCloseAction> = () =>({
  type: MODAL_UPDATE_CLOSE
})
