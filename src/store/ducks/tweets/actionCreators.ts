import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";
import {
    IAddTweetAction,
    IFetchAddTweetAction, IFetchTweetsAction, ISetAddFormStateAction,
    ISetTweetsAction,
    ISetTweetsLoadingStateAction,
    TweetsActionsType
} from "./contracts/actionTypes";



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

export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateAction => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
})

export const setAddFormState = (payload: AddFormState): ISetAddFormStateAction => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
})

export const fetchTweets = (): IFetchTweetsAction => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsAction =
    ISetTweetsAction |
    ISetTweetsLoadingStateAction |
    IFetchTweetsAction |
    IFetchAddTweetAction |
    IAddTweetAction |
    ISetAddFormStateAction
