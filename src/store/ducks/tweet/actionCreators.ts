import {LoadingState, TweetState} from "./contracts/state";
import {
    IFetchTweetDataAction,
    ISetTweetDataAction,
    ISetTweetLoadingStateAction,
    TweetActionsType
} from "./contracts/actionTypes";



export const setTweetData = (payload: TweetState['data']): ISetTweetDataAction => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload
})
export const setTweetLoadingState = (payload: LoadingState): ISetTweetLoadingStateAction => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
})

export const fetchTweetData = (payload: string): IFetchTweetDataAction => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
})

export type TweetAction =
    ISetTweetDataAction |
    ISetTweetLoadingStateAction |
    IFetchTweetDataAction
