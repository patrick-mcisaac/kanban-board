import { useIssuesContext } from "../../hooks/useIssuesContext"
import { TaskCard } from "../taskCard/TaskCard"

export const InProgress = () => {
    const { state } = useIssuesContext()
    return (
        <div className="flex w-[25%] flex-col gap-3 border-1">
            <h1 className="text-center text-2xl font-bold">In Progress</h1>
            {state.issues.map((i) => {
                if (i.progressionId === 2) {
                    return <TaskCard key={i.id} item={i} />
                }
            })}
        </div>
    )
}
