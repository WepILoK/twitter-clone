import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE',

}

export interface ISetTagsAction extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS
    payload: TagsState['items']
}
export interface ISetTagsLoadingStateAction extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface IFetchTagsAction extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS
}


export const setTags = (payload: TagsState['items']): ISetTagsAction => ({
    type: TagsActionsType.SET_TAGS,
    payload
})
export const setTagsLoadingState = (payload: LoadingState): ISetTagsLoadingStateAction => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
})

export const fetchTags = (): IFetchTagsAction => ({
    type: TagsActionsType.FETCH_TAGS,
})

export type TagsAction = ISetTagsAction | ISetTagsLoadingStateAction | IFetchTagsAction