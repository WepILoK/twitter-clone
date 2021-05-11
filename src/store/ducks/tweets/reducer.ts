import produce, {Draft} from "immer";
import {AddFormStatus, TweetsState} from "./contracts/state";
import {TweetsActions, TweetsActionsType} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";

const initialTweetsState: TweetsState = {
    items: [],
    status: LoadingStatus.NEVER,
    addFormStatus: AddFormStatus.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload
            draft.status = LoadingStatus.LOADED
            break;
        case TweetsActionsType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload)
            draft.addFormStatus = AddFormStatus.NEVER
            break;
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormStatus = AddFormStatus.LOADING
            break;
        case TweetsActionsType.SET_ADD_FORM_STATUS:
            draft.addFormStatus = action.payload
            break;
        case TweetsActionsType.FETCH_TWEETS:
            draft.items = []
            draft.status = LoadingStatus.LOADING
            break;
        case TweetsActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        default:
            break;
    }
}, initialTweetsState)