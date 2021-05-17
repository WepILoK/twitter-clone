import {Action} from "redux";
import {AddFormStatus, Tweet, TweetsState} from "./state";
import {LoadingStatus} from "../../../types";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS',
    SET_ADD_FORM_STATUS = 'tweets/SET_ADD_FORM_STATUS',

}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export interface IFetchAddTweetAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET
    payload: {text: string, images: string[]}
}

export interface IAddTweetAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET
    payload: Tweet
}

export interface ISetTweetsLoadingStatusAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATUS
    payload: LoadingStatus
}

export interface ISetAddFormStatusAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATUS
    payload: AddFormStatus
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}

export type TweetsActions =
    ISetTweetsAction |
    ISetTweetsLoadingStatusAction |
    IFetchTweetsAction |
    IFetchAddTweetAction |
    IAddTweetAction |
    ISetAddFormStatusAction

