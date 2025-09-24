import type { ActionTypes } from "./Actions"
import type { StateType } from "./Types"

//TODO: assign type for action

export const IssuesReducer = (state: StateType, action: ActionTypes) => {
    switch (action.type) {
        case "Issues":
            return {
                ...state,
                issues: [...action.payload]
            }
        case "IssueProgressions":
            return {
                ...state,
                issueProgressions: [...action.payload]
            }
        case "Progressions":
            return {
                ...state,
                progressions: [...action.payload]
            }
        case "DragEnd":
            console.log(action.payload)

            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
