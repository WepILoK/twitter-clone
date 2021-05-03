import {Action} from "redux";
import {AddFormState, LoadingState, Tweet, TweetsState} from "./state";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    ADD_TWEET = 'tweets/ADD_TWEET',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',

}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}

export interface IFetchAddTweetAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEET
    payload: string
}

export interface IAddTweetAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEET
    payload: Tweet
}

export interface ISetTweetsLoadingStateAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface ISetAddFormStateAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE
    payload: AddFormState
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}
