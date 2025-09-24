import type React from "react"
import type { ActionTypes } from "./Actions"

export type IssuesContextTypes = {
    getIssues: () => void
    updateIssue: (data: IssuesType, id: string) => void
    getIssueProgressions: () => void
    getProgressions: () => void
    state: StateType
    dispatch: React.Dispatch<ActionTypes>
}

export type IssuesType = {
    id: number
    description: string
    progressionId: number
    progression?: ProgressionsType
}

export type ProgressionsType = {
    id: number
    name: string
}

export type StateType = {
    issues: IssuesType[]
    progressions: ProgressionsType[]
}
