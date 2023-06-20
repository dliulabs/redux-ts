import { ActionType } from "../action-types";

interface SearchRespositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRespositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRespositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRespositoriesAction
  | SearchRespositoriesSuccessAction
  | SearchRespositoriesErrorAction;
