import { ActionTypes } from "./Actions"
import type { StateType } from "./Types"

//TODO: assign type for action

export const IssuesReducer = (state: StateType, action) => {
    switch (action.type) {
        case ActionTypes.Initial:
            return {
                ...state,
                issues: [...action.payload]
            }
        default:
            return {
                ...state
            }
    }
}
