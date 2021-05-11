import {LoadingStatus} from "../../../types";
import {IUser} from "../../user/contracts/state";


export interface IUsersState {
    items: IUser[]
    status: LoadingStatus
}