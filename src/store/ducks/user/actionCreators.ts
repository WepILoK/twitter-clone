import {IUserState} from "./contracts/state";
import {
    IFetchSignInAction,
    ISetUserDataAction,
    ISetUserLoadingStatusAction,
    UserActionsType
} from "./contracts/actionTypes";
import {LoginFormProps} from "../../../pages/SignIn/components/LoginModal";


export const setUserData = (payload: IUserState['data']): ISetUserDataAction => ({
    type: UserActionsType.SET_USER_DATA,
    payload
})

export const fetchSignIn = (payload: LoginFormProps): IFetchSignInAction => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload
})

export const setUserLoadingStatus = (payload: IUserState['status']): ISetUserLoadingStatusAction => ({
    type: UserActionsType.SET_LOADING_STATUS,
    payload
})

