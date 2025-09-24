import { useEffect } from "react"
import { useIssuesContext } from "../../hooks/useIssuesContext"
import { TaskCard } from "../taskCard/TaskCard"
import { useDroppable } from "@dnd-kit/core"

export const ToDo = () => {
    const { state, getIssues } = useIssuesContext()

    const Droppable = () => {
        const {setNodeRef} = useDroppable({
            // get todo id
            id: 
        })
    }

    useEffect(() => {
        getIssues()
        // get all state variables and set them
    }, [])
    return (
        <div className="flex w-[25%] flex-col gap-3 border-1">
            <h1 className="text-center text-2xl font-bold">To Do</h1>
            {state.issues.map((i) => {
                if (i.progressionId === 1) {
                    return <TaskCard key={i.id} item={i} />
                }
            })}
        </div>
    )
}
