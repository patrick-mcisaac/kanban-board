import type React from "react"
import { IssuesContext } from "./IssuesContext"
import { useReducer } from "react"
import { IssuesReducer } from "../../store/Reducer"
import { InitialState } from "../../store/InitialState"
import type { IssuesType } from "../../store/Types"

interface IssuesProps {
    children: React.ReactNode
}

export const IssuesProvider = ({ children }: IssuesProps) => {
    const [state, dispatch] = useReducer(IssuesReducer, InitialState)
    const getIssues = () => {
        fetch(`http://localhost:8088/issues`)
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: "Issues",
                    payload: data
                })
            )
    }

    const getProgressions = () => {
        fetch(`http://localhost:8088/progressions`)
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: "Progressions",
                    payload: data
                })
            )
    }

    const getIssueProgressions = () => {
        fetch(`http://localhost:8088/issueProgressions`)
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: "IssueProgressions",
                    payload: data
                })
            )
    }

    const updateIssue = (data: IssuesType, id: string) => {
        fetch(`http://localhost:8088/issues/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => getIssues())
    }

    return (
        <IssuesContext.Provider
            value={{
                updateIssue,
                getIssueProgressions,
                getProgressions,
                getIssues,
                state,
                dispatch
            }}
        >
            {children}
        </IssuesContext.Provider>
    )
}
