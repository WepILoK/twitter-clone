import {
    IFetchUsersItemsAction,
    ISetUsersItemsAction,
    ISetUsersLoadingStatus,
    UsersActionsType
} from "./contracts/actionTypes";
import {IUser} from "../user/contracts/state";
import {LoadingStatus} from "../../types";


export const setUsersItems = (payload: IUser[]): ISetUsersItemsAction => ({
    type: UsersActionsType.SET_ITEMS,
    payload
})

export const fetchUsersItems = (): IFetchUsersItemsAction => ({
    type: UsersActionsType.FETCH_ITEMS,
})

export const setUsersLoadingStatus = (payload: LoadingStatus): ISetUsersLoadingStatus => ({
    type: UsersActionsType.SET_LOADING_STATUS,
    payload
})
