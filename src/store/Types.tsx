import type React from "react"
import type { ActionTypes } from "./Actions"

export type IssuesContextTypes = {
    getIssues: () => void
    state: StateType
    dispatch: React.Dispatch<ActionTypes>
    getTodoIssues: () => void
}

export type IssuesType = {
    id: number
    description: string
    progressionId: number
    progression?: ProgressionsType
}

type ProgressionsType = {
    id: number
    name: string
}

type IssueProgressionsType = {
    id: number
    progressionId: number
    issuesId: number
}

export type StateType = {
    issues: IssuesType[]
    progressions: ProgressionsType[]
    issueProgressions: IssueProgressionsType[]
}

//TODO: set up action types
