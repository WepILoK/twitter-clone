import {LoadingStatus} from "../../../types";


export enum AddFormStatus {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Tweet {
    _id: string
    text: string
    createdAt: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export interface TweetsState {
    items: Tweet[]
    status: LoadingStatus
    addFormStatus: AddFormStatus
}