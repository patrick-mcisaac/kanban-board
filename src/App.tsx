import { DndContext, type DragEndEvent } from "@dnd-kit/core"
import { Done } from "./components/done/Done"
import { InProgress } from "./components/inProgress/InProgress"
import { ToDo } from "./components/todo/ToDo"
import { useIssuesContext } from "./hooks/useIssuesContext"
import { useEffect } from "react"

function App() {
    const { getIssues, getIssueProgressions, getProgressions } =
        useIssuesContext()
    useEffect(() => {
        getIssues()
        getIssueProgressions()
        getProgressions()
        // get all state variables and set them
    }, [])
    const { updateIssue, state } = useIssuesContext()
    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e
        if (!over) return

        const foundTask = state.issues.find((i) => i.id === active.id)
        if (foundTask) {
            const copyTask = {
                ...foundTask,
                progressionId: Number(over.id)
            }
            updateIssue(copyTask, String(copyTask.id))
        }
    }
    return (
        <div className="flex w-full justify-around">
            <DndContext onDragEnd={handleDragEnd}>
                <ToDo />
                <InProgress />
                <Done />
            </DndContext>
        </div>
    )
}

export default App
