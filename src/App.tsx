import { DndContext } from "@dnd-kit/core"
import { Done } from "./components/done/Done"
import { InProgress } from "./components/inProgress/InProgress"
import { IssuesProvider } from "./components/todo/IssuesProvider"
import { ToDo } from "./components/todo/ToDo"

function App() {
    return (
        <div className="flex w-full justify-around">
            <IssuesProvider>
                <DndContext>
                    <ToDo />
                    <InProgress />
                    <Done />
                </DndContext>
            </IssuesProvider>
        </div>
    )
}

export default App
