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
        <div ref={setNodeRef} className="flex w-[25%] flex-col gap-3 border-1">
            <h1 className="text-center text-2xl font-bold">
                {progression.name}
            </h1>
            {issues.map((i) => {
                if (i.progressionId === progression.id) {
                    return (
                        <TaskCard
                            progression={progression}
                            key={i.id}
                            item={i}
                        />
                    )
                }
            })}
        </div>
    )
}
