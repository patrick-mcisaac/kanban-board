import type { IssuesType, ProgressionsType } from "./Types"

type Issues = {
    type: "Issues"
    payload: IssuesType[]
}

type Progressions = {
    type: "Progressions"
    payload: ProgressionsType[]
}

type DragEnd = {
    type: "DragEnd"
    payload: IssuesType
}
export type ActionTypes = Issues | Progressions | DragEnd
