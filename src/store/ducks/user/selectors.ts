import {RootState} from "../../store";
import {LoadingState, TagsState} from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags
