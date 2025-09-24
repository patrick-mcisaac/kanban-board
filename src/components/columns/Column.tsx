import { useDroppable } from "@dnd-kit/core"
import { TaskCard } from "../taskCard/TaskCard"
import type { IssuesType, ProgressionsType } from "../../store/Types"

type ColumnProps = {
    progression: ProgressionsType
    issues: IssuesType[]
}

export const Column = ({ progression, issues }: ColumnProps) => {
    const { setNodeRef } = useDroppable({
        // get todo id
        id: String(progression.id)
    })

    return (
        <div
            id={`column-${progression.id}`}
            ref={setNodeRef}
            className="mt-[9rem] flex h-[40rem] w-[25%] flex-col gap-3 rounded-2xl bg-neutral-400 p-5 shadow-xs shadow-neutral-300"
        >
            <h1 className="text-center text-[3rem] font-bold tracking-wider text-neutral-100 text-shadow-black text-shadow-sm">
                {progression.name}
            </h1>
            {issues.map((i) => {
                if (i.progressionId === progression.id) {
                    return <TaskCard key={i.id} item={i} />
                }
            })}
        </div>
    )
}
