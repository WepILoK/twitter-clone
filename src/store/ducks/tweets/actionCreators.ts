import {AddFormStatus, Tweet, TweetsState} from "./contracts/state";
import {
    IAddTweetAction,
    IFetchAddTweetAction, IFetchTweetsAction, ISetAddFormStatusAction,
    ISetTweetsAction,
    ISetTweetsLoadingStatusAction,
    TweetsActionsType
} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";


export const setTweets = (payload: TweetsState['items']): ISetTweetsAction => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
})

export const addTweet = (payload: Tweet): IAddTweetAction => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
})

export const fetchAddTweet = (payload: string): IFetchAddTweetAction => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
})

export const setTweetsLoadingStatus = (payload: LoadingStatus): ISetTweetsLoadingStatusAction => ({
    type: TweetsActionsType.SET_LOADING_STATUS,
    payload
})

export const setAddFormStatus = (payload: AddFormStatus): ISetAddFormStatusAction => ({
    type: TweetsActionsType.SET_ADD_FORM_STATUS,
    payload
})

export const fetchTweets = (): IFetchTweetsAction => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

