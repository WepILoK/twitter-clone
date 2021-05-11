import {call, put, takeLatest} from 'redux-saga/effects';
import {LoadingStatus} from "../../types";
import {UsersActionsType} from "./contracts/actionTypes";

export function* fetchUsersRequest() {
    // try {
    //     const items: TagsState['items'] = yield call(TagsApi.fetchTags)
    //     yield put(setTags(items))
    // } catch (error) {
    //     yield put(setTagsLoadingStatus(LoadingStatus.ERROR))
    // }

}

export function* usersSaga() {
    // yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest)
}