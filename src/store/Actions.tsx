import type { IssuesType } from "./Types"

type Initial = {
    type: "Initial"
    payload: IssuesType[]
}

export type ActionTypes = Initial
