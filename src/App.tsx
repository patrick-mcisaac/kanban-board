import { IssuesProvider } from "./components/todo/IssuesProvider"
import { ToDo } from "./components/todo/ToDo"

function App() {
    return (
        <IssuesProvider>
            <ToDo />
        </IssuesProvider>
    )
}

export default App
