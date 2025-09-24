import { DndContext, type DragEndEvent } from "@dnd-kit/core"
import { useIssuesContext } from "./hooks/useIssuesContext"
import { useEffect } from "react"
import { Column } from "./components/columns/Column"

function App() {
    const { getIssues, getProgressions } = useIssuesContext()
    useEffect(() => {
        getIssues()

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
                {state.progressions.map((p) => (
                    <Column key={p.id} progression={p} issues={state.issues} />
                ))}

                {/*  <ToDo />
                <InProgress />
                <Done /> */}
            </DndContext>
        </div>
    )
}

export default App
