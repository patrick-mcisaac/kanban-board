import { useEffect } from "react"
import { useIssuesContext } from "../../hooks/useIssuesContext"

export const ToDo = () => {
    const { getIssues } = useIssuesContext()

    useEffect(() => {
        getIssues()
    }, [])
    return <div>ToDo</div>
}
