import type { ActionTypes } from "./Actions"
import type { StateType } from "./Types"

//TODO: assign type for action

export const IssuesReducer = (state: StateType, action: ActionTypes) => {
    switch (action.type) {
        case "Initial":
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
