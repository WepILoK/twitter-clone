import produce, {Draft} from "immer";
import {TagsState} from "./contracts/state";
import {LoadingStatus} from "../../types";
import {TagsAction, TagsActionsType} from "./contracts/actionTypes";

const initialTagsState: TagsState = {
    items: [],
    status: LoadingStatus.NEVER
}

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsAction) => {
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload
            draft.status = LoadingStatus.LOADED
            break;
        case TagsActionsType.FETCH_TAGS:
            draft.items = []
            draft.status = LoadingStatus.LOADING
            break;
        case TagsActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        default:
            break;
    }
}, initialTagsState)