import {Action} from "redux";
import {TweetState} from "./state";
import {LoadingStatus} from "../../../types";

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATUS = 'tweet/SET_LOADING_STATUS',

}

export interface ISetTweetDataAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEET_DATA
    payload: TweetState['data']
}

export interface ISetTweetLoadingStatusAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATUS
    payload: LoadingStatus
}

export interface IFetchTweetDataAction extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET_DATA
    payload: string
}

export type TweetAction =
    ISetTweetDataAction |
    ISetTweetLoadingStatusAction |
    IFetchTweetDataAction

