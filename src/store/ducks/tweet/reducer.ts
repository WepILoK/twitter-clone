import produce, {Draft} from "immer";
import {TweetState} from "./contracts/state";
import {TweetAction, TweetActionsType} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";

const initialTweetState: TweetState = {
    data: undefined,
    status: LoadingStatus.NEVER
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetAction) => {
    switch (action.type) {
        case TweetActionsType.SET_TWEET_DATA:
            draft.data = action.payload
            draft.status = LoadingStatus.LOADED
            break;
        case TweetActionsType.FETCH_TWEET_DATA:
            draft.data = undefined
            draft.status = LoadingStatus.LOADING
            break;
        case TweetActionsType.SET_LOADING_STATUS:
            draft.status = action.payload
            break;
        default:
            break;
    }
}, initialTweetState)