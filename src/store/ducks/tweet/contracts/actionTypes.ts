import {Action} from "redux";
import {LoadingState, TweetState} from "./state";

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',

}

export interface ISetTweetDataAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA
    payload: TweetState['data']
}

export interface ISetTweetLoadingStateAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface IFetchTweetDataAction extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA
    payload: string
}

