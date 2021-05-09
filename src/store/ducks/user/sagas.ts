import {call, put, takeLatest} from 'redux-saga/effects';
import {IUser} from "./contracts/state";
import {IFetchSignInAction, UserActionsType} from "./contracts/actionTypes";
import {AuthApi} from "../../../services/api/authApi";
import {setUserData, setUserLoadingStatus} from "./actionCreators";
import {LoadingStatus} from "../../types";

export function* fetchSignInRequest({payload}: IFetchSignInAction) {
    try {
        const data: IUser = yield call(AuthApi.signIn, payload)
        yield put(setUserData(data))
        window.localStorage.setItem('token', data?.token)
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }

}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
}