import { createContext } from "react"
import type { IssuesContextTypes } from "../../store/Types"

export const IssuesContext = createContext<IssuesContextTypes | []>([])
