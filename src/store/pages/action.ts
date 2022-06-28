import { ActionCreator } from "redux";

export const CURRENT_PAGE = 'CURRENT_PAGE';

export type CurrentPageAction = {
  type: typeof CURRENT_PAGE,
  pagenumber: number
}

export const currentPage: ActionCreator<CurrentPageAction> = (pagenumber: number) => ({
  type: CURRENT_PAGE,
  pagenumber
})

export const ALL_PAGE = 'ALL_PAGE';

export type AllPageAction = {
  type: typeof ALL_PAGE,
  pagenumber: number
}

export const allPage: ActionCreator<AllPageAction> = (pagenumber: number) => ({
  type: ALL_PAGE,
  pagenumber
})
