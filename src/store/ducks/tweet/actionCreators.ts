import {TweetState} from "./contracts/state";
import {
    IFetchTweetDataAction,
    ISetTweetDataAction,
    ISetTweetLoadingStatusAction,
    TweetActionsType
} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";


export const setTweetData = (payload: TweetState['data']): ISetTweetDataAction => ({
    type: TweetActionsType.SET_TWEET_DATA,
    payload
})
export const setTweetLoadingStatus = (payload: LoadingStatus): ISetTweetLoadingStatusAction => ({
    type: TweetActionsType.SET_LOADING_STATUS,
    payload
})

export const fetchTweetData = (payload: string): IFetchTweetDataAction => ({
    type: TweetActionsType.FETCH_TWEET_DATA,
    payload
})
