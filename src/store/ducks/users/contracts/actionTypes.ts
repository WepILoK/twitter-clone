import {Action} from "redux";
import {IUser} from "../../user/contracts/state";
import {LoadingStatus} from "../../../types";

export enum UsersActionsType {
    SET_ITEMS = 'users/SET_ITEMS',
    FETCH_ITEMS = 'users/FETCH_ITEMS',
    SET_LOADING_STATUS = 'tags/SET_LOADING_STATUS',
}

export interface ISetUsersItemsAction extends Action<UsersActionsType> {
    type: UsersActionsType.SET_ITEMS
    payload: IUser[]
}

export interface IFetchUsersItemsAction extends Action<UsersActionsType> {
    type: UsersActionsType.FETCH_ITEMS
}

export interface ISetUsersLoadingStatus extends Action<UsersActionsType> {
    type: UsersActionsType.SET_LOADING_STATUS
    payload: LoadingStatus
}

export type UsersActions = ISetUsersItemsAction
    | IFetchUsersItemsAction
    | ISetUsersLoadingStatus