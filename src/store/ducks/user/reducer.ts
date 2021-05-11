import produce, {Draft} from "immer";
import {IUserState} from "./contracts/state";
import {LoadingStatus} from "../../types";
import {UserActions, UserActionsType} from "./contracts/actionTypes";

const initialUserState: IUserState = {
    data: undefined,
    status: LoadingStatus.NEVER
}

export const userReducer = produce((draft: Draft<IUserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA:
            draft.data = action.payload
            draft.status = LoadingStatus.SUCCESS
            break;
        case UserActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        case UserActionsType.FETCH_SIGN_IN:
            draft.status = LoadingStatus.LOADING
            break;
        case UserActionsType.FETCH_SIGN_UP:
            draft.status = LoadingStatus.LOADING
            break;
        default:
            break;
    }
}, initialUserState)