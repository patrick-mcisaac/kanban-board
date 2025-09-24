import { useEffect } from "react"
import { useIssuesContext } from "../../hooks/useIssuesContext"

export const ToDo = () => {
    const { state, getIssues } = useIssuesContext()

    useEffect(() => {
        getIssues()
    }, [])
    return (
        <div className="flex w-[25%] flex-col gap-3 border-1">
            <h1 className="text-center text-2xl font-bold">To Do</h1>
            {state.issues.map((i) => {
                if (i.progressionId === 1) {
                    return (
                        <section
                            key={i.id}
                            className="flex h-[5rem] items-center justify-center border-1"
                        >
                            <h1 className="text-xl font-semibold tracking-wider">
                                {i.description}
                            </h1>
                        </section>
                    )
                }
            })}
        </div>
    )
}
