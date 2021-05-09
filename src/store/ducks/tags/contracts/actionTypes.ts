import {Action} from "redux";
import {TagsState} from "./state";
import {LoadingStatus} from "../../../types";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATUS = 'tags/SET_LOADING_STATUS',

}

export interface ISetTagsAction extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS
    payload: TagsState['items']
}
export interface ISetTagsLoadingStatusAction extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATUS
    payload: LoadingStatus
}

export interface IFetchTagsAction extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS
}

export type TagsAction = ISetTagsAction | ISetTagsLoadingStatusAction | IFetchTagsAction