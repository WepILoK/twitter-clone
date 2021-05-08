import {call, put, takeLatest} from 'redux-saga/effects';
import {setTweetData, setTweetLoadingState} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {LoadingState} from "./contracts/state";
import {Tweet} from "../tweets/contracts/state";
import {IFetchTweetDataAction, TweetActionsType} from "./contracts/actionTypes";

export function* fetchTweetDataRequest({payload: tweetId}: IFetchTweetDataAction) {
    try {
        const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId)
            yield put(setTweetData(data))
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}