import {call, put, takeLatest} from 'redux-saga/effects';
import {setTags, setTagsLoadingStatus} from "./actionCreators";
import {TagsApi} from "../../../services/api/tagsApi";
import {TagsState} from "./contracts/state";
import {LoadingStatus} from "../../types";
import {TagsActionsType} from "./contracts/actionTypes";

export function* fetchTagsRequest() {
    try {
        const items: TagsState['items'] = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingStatus(LoadingStatus.ERROR))
    }

}

export function* tagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}