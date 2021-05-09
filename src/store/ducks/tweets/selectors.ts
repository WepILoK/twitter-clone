import {RootState} from "../../store";
import {AddFormStatus, TweetsState} from "./contracts/state";
import {LoadingStatus} from "../../types";

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
    selectTweets(state).status

export const selectAddForm = (state: RootState): AddFormStatus =>
    selectTweets(state).addFormStatus

export const selectIsTweetsLoading = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectTweetsItems = (state: RootState) => selectTweets(state).items
