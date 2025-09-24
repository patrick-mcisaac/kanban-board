import {
    DndContext,
    type DragEndEvent,
    type DragMoveEvent
} from "@dnd-kit/core"
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
        <div className="flex min-h-[100vh] w-full justify-around bg-[#1e1e1e]">
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
