import {LoadingState, TweetsState} from "./contracts/state";
import {Action} from "redux";

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',

}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS
    payload: TweetsState['items']
}
export interface ISetTweetsLoadingStateAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS
}


export const setTweets = (payload: TweetsState['items']): ISetTweetsAction => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})
export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateAction => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
})

export const fetchTweets = (): IFetchTweetsAction => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsAction = ISetTweetsAction | ISetTweetsLoadingStateAction | IFetchTweetsAction