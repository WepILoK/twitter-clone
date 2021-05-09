import {TagsState} from "./contracts/state";
import {LoadingStatus} from "../../types";
import {IFetchTagsAction, ISetTagsAction, ISetTagsLoadingStatusAction, TagsActionsType} from "./contracts/actionTypes";


export const setTags = (payload: TagsState['items']): ISetTagsAction => ({
    type: TagsActionsType.SET_TAGS,
    payload
})
export const setTagsLoadingStatus = (payload: LoadingStatus): ISetTagsLoadingStatusAction => ({
    type: TagsActionsType.SET_LOADING_STATUS,
    payload
})

export const fetchTags = (): IFetchTagsAction => ({
    type: TagsActionsType.FETCH_TAGS,
})

