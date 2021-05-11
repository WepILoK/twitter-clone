import {RootState} from "../../store";
import {IUsersState} from "./contracts/state";

export const selectUsers = (state: RootState): IUsersState => state.users

export const selectUsersItems = (state: RootState): IUsersState['items'] => state.users.items

