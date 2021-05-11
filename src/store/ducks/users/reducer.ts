import produce, {Draft} from "immer";
import {LoadingStatus} from "../../types";
import {IUsersState} from "./contracts/state";
import {UsersActions, UsersActionsType} from "./contracts/actionTypes";

const initialUsersState: IUsersState = {
    items: [],
    status: LoadingStatus.NEVER
}

export const usersReducer = produce((draft: Draft<IUsersState>, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsType.SET_ITEMS:
            draft.items = action.payload
            draft.status = LoadingStatus.LOADED
            break;
        case UsersActionsType.FETCH_ITEMS:
            draft.status = LoadingStatus.LOADING
            break;
        case UsersActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        default:
            break;
    }
}, initialUsersState)