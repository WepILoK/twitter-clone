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

export function* fetchAddTweetRequest({payload}: IFetchAddTweetAction) {
    try {
        const data: Tweet = {
            _id: Math.random().toString(36).substr(2) ,
            text: payload,
            user: {
                fullName: 'Test User',
                userName: 'test',
                avatarUrl: 'https://source.unsplash.com/random/100x100?2'
            }
        }
        const items: Tweet = yield call(TweetsApi.addTweet, data)
        yield put(addTweet(items))
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}