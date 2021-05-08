import {call, put, takeLatest} from 'redux-saga/effects';
import {addTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";
import {IFetchAddTweetAction, TweetsActionsType} from "./contracts/actionTypes";

export function* fetchTweetsRequest() {
    try {
        const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload: text}: IFetchAddTweetAction) {
    try {
        const items: Tweet = yield call(TweetsApi.addTweet, text)
        yield put(addTweet(items))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}