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
        default:
            break;
    }
}, initialUserState)