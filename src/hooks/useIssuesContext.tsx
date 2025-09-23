import { useContext } from "react"
import { IssuesContext } from "../components/todo/IssuesContext"

export const useIssuesContext = () => {
    const context = useContext(IssuesContext)
    if (!context) {
        throw new Error("must be used within issues provider")
    } else {
        return context
    }
}
