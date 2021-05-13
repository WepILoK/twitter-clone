import {RootState} from "../../store";
import {IUserState} from "./contracts/state";
import {LoadingStatus} from "../../types";

export const selectUserState = (state: RootState): IUserState => state.user

export const selectUserData = (state: RootState): IUserState['data'] =>
    selectUserState(state).data

export const selectIsAuth = (state: RootState): boolean =>
    !!selectUserState(state).data

export const selectUserStatus = (state: RootState): IUserState['status'] =>
    selectUserState(state).status

export const selectIsLoading = (state: RootState): boolean =>
    selectUserState(state).status === LoadingStatus.LOADING

export const selectIsLoaded = (state: RootState): boolean =>
    selectUserState(state).status === LoadingStatus.LOADED