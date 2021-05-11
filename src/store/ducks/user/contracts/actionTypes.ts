import {Action} from "redux";
import {IUser} from "./state";
import {LoadingStatus} from "../../../types";
import {LoginFormProps} from "../../../../pages/SignIn/components/LoginModal";
import {IRegisterFormProps} from "../../../../pages/SignIn/components/RegisterModal";

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
    FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
    SET_LOADING_STATUS = 'user/SET_LOADING_STATUS',

}

export interface ISetUserDataAction extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_DATA
    payload: IUser | undefined
}

export interface IFetchSignInAction extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_IN
    payload: LoginFormProps
}

export interface IFetchSignUpAction extends Action<UserActionsType> {
    type: UserActionsType.FETCH_SIGN_UP
    payload: IRegisterFormProps
}

export interface ISetUserLoadingStatusAction extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_STATUS
    payload: LoadingStatus
}

export type UserActions = ISetUserDataAction
    | ISetUserLoadingStatusAction
    | IFetchSignInAction
    | IFetchSignUpAction