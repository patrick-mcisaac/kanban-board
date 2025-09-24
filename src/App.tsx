import { Done } from "./components/done/Done"
import { InProgress } from "./components/inProgress/InProgress"
import { IssuesProvider } from "./components/todo/IssuesProvider"
import { ToDo } from "./components/todo/ToDo"

function App() {
    return (
        <div className="flex w-full justify-around">
            <IssuesProvider>
                <ToDo />
                <InProgress />
                <Done />
            </IssuesProvider>
        </div>
    )
}

export default App
