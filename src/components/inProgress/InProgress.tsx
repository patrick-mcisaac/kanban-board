import { useIssuesContext } from "../../hooks/useIssuesContext"

export const InProgress = () => {
    const { state } = useIssuesContext()
    return (
        <div className="flex w-[25%] flex-col gap-3 border-1">
            <h1 className="text-center text-2xl font-bold">In Progress</h1>
            {state.issues.map((i) => {
                if (i.progressionId === 2) {
                    return (
                        <section
                            key={i.id}
                            className="flex h-[5rem] items-center justify-center border-1"
                        >
                            <h2 className="text-xl font-semibold tracking-wider">
                                {i.description}
                            </h2>
                        </section>
                    )
                }
            })}
        </div>
    )
}
