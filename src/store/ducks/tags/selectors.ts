import {RootState} from "../../store";
import {TagsState} from "./contracts/state";
import {LoadingStatus} from "../../types";

export const selectTags = (state: RootState): TagsState => state.tags

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
    selectTags(state).status

export const selectIsTagsLoading = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectTagsItems = (state: RootState) => selectTags(state).items
