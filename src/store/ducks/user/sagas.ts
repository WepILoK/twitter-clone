import {call, put, takeLatest} from 'redux-saga/effects';
import {IUser} from "./contracts/state";
import {IFetchSignInAction, IFetchSignUpAction, UserActionsType} from "./contracts/actionTypes";
import {AuthApi} from "../../../services/api/authApi";
import {setUserData, setUserLoadingStatus} from "./actionCreators";
import {LoadingStatus} from "../../types";

export function* fetchSignInRequest({payload}: IFetchSignInAction) {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        const data: IUser = yield call(AuthApi.signIn, payload)
        yield put(setUserData(data))
        window.localStorage.setItem('token', data?.token)
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }

}

export function* fetchSignUpRequest({payload}: IFetchSignUpAction) {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        yield call(AuthApi.signUp, payload)
        yield put(setUserLoadingStatus(LoadingStatus.SUCCESS))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }

}

export function* fetchUserDataRequest() {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        const {data} = yield call(AuthApi.getMe)
        yield put(setUserData(data))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }

}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)
}