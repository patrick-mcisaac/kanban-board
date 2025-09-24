import type React from "react"
import { IssuesContext } from "./IssuesContext"
import { useReducer } from "react"
import { IssuesReducer } from "../../store/Reducer"
import { InitialState } from "../../store/InitialState"

interface IssuesProps {
    children: React.ReactNode
}

export const IssuesProvider = ({ children }: IssuesProps) => {
    const [state, dispatch] = useReducer(IssuesReducer, InitialState)
    const getIssues = () => {
        fetch(`http://localhost:8088/issues?_expand=progression`)
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: "Initial",
                    payload: data
                })
            )
    }

    return (
        <IssuesContext.Provider value={{ getIssues, state, dispatch }}>
            {children}
        </IssuesContext.Provider>
    )
}
