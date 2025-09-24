import { useIssuesContext } from "../../hooks/useIssuesContext"
import { TaskCard } from "../taskCard/TaskCard"

export const Done = () => {
    const { state } = useIssuesContext()
    return (
        <div className="flex w-[25%] flex-col gap-3 border-1">
            <h1 className="text-center text-2xl font-bold">Done</h1>
            {state.issues.map((i) => {
                if (i.progressionId === 3) {
                    return <TaskCard key={i.id} item={i} />
                }
            })}
        </div>
    )
}
