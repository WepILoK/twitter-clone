import {call, put, takeLatest} from 'redux-saga/effects';
import {addTweet, setAddFormStatus, setTweets, setTweetsLoadingStatus} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormStatus, Tweet, TweetsState} from "./contracts/state";
import {IFetchAddTweetAction, TweetsActionsType} from "./contracts/actionTypes";
import {LoadingStatus} from "../../types";

export function* fetchTweetsRequest() {
    try {
        const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: IFetchAddTweetAction) {
    try {
        const items: Tweet = yield call(TweetsApi.addTweet, payload)
        yield put(addTweet(items))
    } catch (error) {
        yield put(setAddFormStatus(AddFormStatus.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}