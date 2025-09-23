import type React from "react"

export type IssuesContextTypes = {
    getIssues: () => void
    state: StateType
    dispatch: React.Dispatch<string> //TODO: will be action types once defined
}

type IssuesType = {
    id: number
    description: string
    progressionId: number
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
