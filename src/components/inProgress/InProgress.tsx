import { useIssuesContext } from "../../hooks/useIssuesContext"

export const InProgress = () => {
    const { state } = useIssuesContext()
    return (
        <div className="flex w-[25%] flex-col gap-3 border-1">
            {state.issues.map((i) => {
                if (i.progressionId === 2) {
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
